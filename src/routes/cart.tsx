import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { company, formatPrice, productBySlug } from "@/data/site";
import { btnAccent, PageIntro, SiteFrame } from "@/components/chrome";
import { saveLocalOrder, useCart, useCartReady } from "@/lib/cart";
import { trackEvent } from "@/lib/stats.functions";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const items = useCart((state) => state.items);
  const setQty = useCart((state) => state.setQty);
  const remove = useCart((state) => state.remove);
  const clear = useCart((state) => state.clear);
  const cartReady = useCartReady();
  const [done, setDone] = useState("");
  const [error, setError] = useState("");

  const rows = items
    .map((item) => {
      const product = productBySlug(item.slug);
      return product ? { ...item, product } : null;
    })
    .filter((row): row is NonNullable<typeof row> => row !== null);
  const total = rows.reduce((sum, row) => sum + row.product.price * row.qty, 0);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!rows.length) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();
    if (!name || phone.replace(/\D/g, "").length < 10 || !city) {
      setError("Укажите имя, телефон и город");
      return;
    }
    const id = `ПС-${Date.now().toString().slice(-6)}`;
    saveLocalOrder({
      id,
      at: new Date().toLocaleString("ru-RU"),
      city,
      name,
      phone,
      total,
      items: rows.map((row) => ({
        slug: row.product.slug,
        title: row.product.title,
        qty: row.qty,
        price: row.product.price,
      })),
    });
    void trackEvent({
      data: { kind: "checkout", path: "/cart", meta: `${rows.length} поз.` },
    }).catch(() => undefined);
    clear();
    setError("");
    setDone(id);
  }

  return (
    <SiteFrame title="Корзина">
      <PageIntro kicker="Корзина" title="Состав заказа" text="Счёт выставим после проверки наличия. Заказ сохранится в кабинете на этом устройстве." />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {!cartReady ? <p className="text-muted">Открываем корзину…</p> : null}
          {cartReady && rows.length === 0 && !done ? (
            <div className="rounded-lg border border-fg/10 bg-surface p-6">
              <p className="font-semibold">Корзина пуста</p>
              <p className="mt-2 text-sm text-muted">Выберите позицию в каталоге и нажмите «В корзину».</p>
              <Link
                to="/catalog"
                className="btn mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-on-primary"
              >
                В каталог
              </Link>
            </div>
          ) : null}
          <ul className="space-y-3">
            {rows.map((row) => (
              <li key={row.slug} className="flex gap-3 rounded-lg border border-fg/10 bg-surface p-3">
                <img src={row.product.image} alt="" className="size-20 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <Link to="/catalog/$slug" params={{ slug: row.product.slug }} className="font-bold">
                    {row.product.title}
                  </Link>
                  <p className="text-sm text-muted">{formatPrice(row.product.price)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={row.qty}
                      onChange={(event) => setQty(row.slug, Number(event.target.value) || 1)}
                      className="field w-20"
                      aria-label={`Количество ${row.product.title}`}
                    />
                    <button type="button" className="text-sm font-semibold text-accent" onClick={() => remove(row.slug)}>
                      Удалить
                    </button>
                  </div>
                </div>
                <p className="font-extrabold tabular-nums">{formatPrice(row.product.price * row.qty)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-fg/10 bg-surface p-5 lg:col-span-2">
          {done ? (
            <div>
              <p className="text-lg font-extrabold">Заказ {done} принят</p>
              <p className="mt-2 text-sm text-muted">
                Перезвоним с номера {company.phone}. Копия лежит в личном кабинете этого браузера.
              </p>
              <Link to="/cabinet" className={`${btnAccent} mt-4`}>
                Открыть кабинет
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <p className="text-lg font-extrabold tabular-nums">Итого {formatPrice(total)}</p>
              <label className="block text-sm font-medium">
                Имя
                <input name="name" className="field mt-1" />
              </label>
              <label className="block text-sm font-medium">
                Телефон
                <input name="phone" type="tel" className="field mt-1" />
              </label>
              <label className="block text-sm font-medium">
                Город доставки
                <input name="city" className="field mt-1" />
              </label>
              <label className="block text-sm font-medium">
                Комментарий
                <textarea name="note" rows={3} className="field mt-1" />
              </label>
              {error ? <p className="text-sm text-accent">{error}</p> : null}
              <button type="submit" className={btnAccent} disabled={!rows.length}>
                Оформить заказ
              </button>
            </form>
          )}
        </div>
      </div>
    </SiteFrame>
  );
}
