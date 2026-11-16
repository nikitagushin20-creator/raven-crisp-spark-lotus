import { createFileRoute, Link } from "@tanstack/react-router";
import { newsBySlug } from "@/data/site";
import { SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/news/$slug")({ component: NewsItemPage });

function NewsItemPage() {
  const { slug } = Route.useParams();
  const item = newsBySlug(slug);
  if (!item) {
    return (
      <SiteFrame title="Новость">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-extrabold">Заметка не найдена</h1>
          <Link to="/news" className="mt-4 inline-block font-semibold text-primary">
            Все новости
          </Link>
        </div>
      </SiteFrame>
    );
  }
  return (
    <SiteFrame title={item.title}>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-muted">{item.date}</p>
        <h1 className="mt-2 text-3xl font-extrabold">{item.title}</h1>
        <img src={item.image} alt="" className="mt-6 aspect-[3/2] w-full rounded-lg object-cover" />
        <div className="mt-6 space-y-4 text-base leading-relaxed">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link to="/news" className="mt-8 inline-block text-sm font-semibold text-primary">
          Все новости
        </Link>
      </article>
    </SiteFrame>
  );
}
