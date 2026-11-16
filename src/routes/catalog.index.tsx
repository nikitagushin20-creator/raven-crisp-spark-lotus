import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { filterProducts, formatPrice, lines } from "@/data/site";
import { PageIntro, ProductCard, SiteFrame } from "@/components/chrome";

type CatalogSearch = { q?: string; line?: string };

export const Route = createFileRoute("/catalog/")({
  validateSearch: (search: Record<string, unknown>): CatalogSearch => {
    const out: CatalogSearch = {};
    if (typeof search.q === "string" && search.q) out.q = search.q;
    if (typeof search.line === "string" && search.line) out.line = search.line;
    return out;
  },
  component: CatalogPage,
});

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/catalog/" });
  const q = search.q ?? "";
  const line = search.line ?? "";
  const [draft, setDraft] = useState(q);
  const list = filterProducts(q, line);

  function apply(next: CatalogSearch) {
    const clean: CatalogSearch = {};
    if (next.q) clean.q = next.q;
    if (next.line) clean.line = next.line;
    void navigate({ search: clean });
  }

  return (
    <SiteFrame title="Каталог">
      <PageIntro
        kicker="Каталог"
        title="Оборудование и расходники"
        text="Цены — с основного склада. Наличие в карточке. Если позиции нет, напишем срок до подтверждения заказа."
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            apply({ q: draft.trim(), line });
          }}
        >
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Модель, линейка или задача"
            className="field sm:max-w-md"
          />
          <button type="submit" className="btn min-h-11 rounded-md bg-primary px-4 text-sm font-semibold text-on-primary">
            Найти
          </button>
        </form>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={!line} onClick={() => apply({ q, line: undefined })}>
            Все
          </FilterChip>
          {lines.map((item) => (
            <FilterChip
              key={item.slug}
              active={line === item.slug}
              onClick={() => apply({ q, line: item.slug })}
            >
              {item.name}
            </FilterChip>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-8 text-muted">
            Ничего не нашли. Сбросьте фильтр или{" "}
            <Link to="/service/engineer" className="font-semibold text-primary">
              спросите инженера
            </Link>
            .
          </p>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                title={product.title}
                summary={product.summary}
                price={formatPrice(product.price)}
                image={product.image}
                stock={product.stock}
              />
            ))}
          </div>
        )}
      </div>
    </SiteFrame>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "btn shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary"
          : "btn shrink-0 rounded-full border border-fg/15 bg-surface px-4 py-2 text-sm font-semibold"
      }
    >
      {children}
    </button>
  );
}
