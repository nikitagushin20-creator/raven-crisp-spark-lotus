import { createFileRoute, Link } from "@tanstack/react-router";
import { formatPrice, lineBySlug, productsByLine } from "@/data/site";
import { ProductCard, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/lines/$slug")({
  component: LinePage,
});

function LinePage() {
  const { slug } = Route.useParams();
  const line = lineBySlug(slug);
  if (!line) {
    return (
      <SiteFrame title="Линейка">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-extrabold">Такой линейки нет</h1>
          <Link to="/catalog" className="mt-4 inline-block font-semibold text-primary">
            Открыть каталог
          </Link>
        </div>
      </SiteFrame>
    );
  }
  const items = productsByLine(line.slug);
  return (
    <SiteFrame title={line.name}>
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2">
          <div className="rise">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">{line.mark}</p>
            <h1 className="mt-2 text-4xl font-extrabold">{line.name}</h1>
            <p className="mt-4 text-muted">{line.text}</p>
            <Link
              to="/catalog"
              search={{ line: line.slug }}
              className="btn mt-6 inline-flex min-h-11 items-center rounded-md bg-accent px-4 text-sm font-semibold text-on-accent"
            >
              Смотреть позиции
            </Link>
          </div>
          <img src={line.image} alt={line.alt} className="rise aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
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
      </div>
    </SiteFrame>
  );
}
