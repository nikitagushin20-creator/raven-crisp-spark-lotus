import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { formatPrice, lineBySlug, productBySlug, products } from "@/data/site";
import { btnAccent, btnGhost, ProductCard, SiteFrame } from "@/components/chrome";
import { useCart, useCartReady } from "@/lib/cart";
import { trackEvent } from "@/lib/stats.functions";
import { useUi } from "@/lib/ui";

export const Route = createFileRoute("/catalog/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = productBySlug(slug);
  const add = useCart((state) => state.add);
  const cartReady = useCartReady();
  const open = useUi((state) => state.open);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <SiteFrame title="Не найдено">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-extrabold">Позиции нет в каталоге</h1>
          <Link to="/catalog" className="mt-4 inline-block font-semibold text-primary">
            Вернуться в каталог
          </Link>
        </div>
      </SiteFrame>
    );
  }

  const line = lineBySlug(product.line);
  const related = products.filter((item) => item.line === product.line && item.slug !== product.slug).slice(0, 3);

  return (
    <SiteFrame title={product.title}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2">
        <img
          src={product.image}
          alt={product.title}
          className="rise aspect-[4/3] w-full rounded-lg object-cover"
        />
        <div className="rise" style={{ animationDelay: "60ms" }}>
          <p className="text-sm font-semibold text-accent">{product.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold">{product.title}</h1>
          <p className="mt-3 text-muted">{product.summary}</p>
          <p className="mt-4 text-3xl font-extrabold tabular-nums">{formatPrice(product.price)}</p>
          <p className="mt-1 text-sm text-muted">{product.stock}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <label className="text-sm font-medium">
              Количество
              <input
                type="number"
                min={1}
                max={99}
                value={qty}
                onChange={(event) => setQty(Math.max(1, Number(event.target.value) || 1))}
                className="field mt-1 w-24"
              />
            </label>
            <button
              type="button"
              className={btnAccent}
              disabled={!cartReady}
              onClick={() => {
                add(product.slug, qty);
                setAdded(true);
                void trackEvent({
                  data: { kind: "cart", path: `/catalog/${product.slug}`, meta: product.slug },
                }).catch(() => undefined);
                window.setTimeout(() => setAdded(false), 1600);
              }}
            >
              {added ? "В корзине" : "В корзину"}
            </button>
            <button type="button" className={btnGhost} onClick={() => open("callback")}>
              Запросить счёт
            </button>
          </div>
          {line ? (
            <Link
              to="/lines/$slug"
              params={{ slug: line.slug }}
              className="mt-4 inline-block text-sm font-semibold text-primary"
            >
              Вся линейка «{line.name}»
            </Link>
          ) : null}
          <table className="mt-6 w-full text-sm">
            <tbody>
              {product.specs.map((spec) => (
                <tr key={spec.label} className="border-t border-fg/10">
                  <th className="py-2 pr-4 text-left font-medium text-muted">{spec.label}</th>
                  <td className="py-2 font-semibold">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {related.length > 0 ? (
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="text-xl font-extrabold">Рядом в линейке</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <ProductCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                summary={item.summary}
                price={formatPrice(item.price)}
                image={item.image}
                stock={item.stock}
              />
            ))}
          </div>
        </div>
      ) : null}
    </SiteFrame>
  );
}
