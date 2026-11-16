import { createFileRoute, Link } from "@tanstack/react-router";
import { news } from "@/data/site";
import { PageIntro, SiteFrame } from "@/components/chrome";

export const Route = createFileRoute("/news/")({ component: NewsPage });

function NewsPage() {
  return (
    <SiteFrame title="Новости">
      <PageIntro
        kicker="Новости"
        title="Склады, сервис и разборы"
        text="Короткие заметки: куда отгрузили, где открылся пост и как не промахнуться с подбором."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
        {news.map((item) => (
          <Link
            key={item.slug}
            to="/news/$slug"
            params={{ slug: item.slug }}
            className="card-hover grid overflow-hidden rounded-lg border border-fg/10 bg-surface sm:grid-cols-5"
          >
            <img src={item.image} alt="" className="aspect-[3/2] h-full w-full object-cover sm:col-span-2" />
            <div className="p-4 sm:col-span-3">
              <p className="text-xs text-muted">{item.date}</p>
              <h2 className="mt-1 font-extrabold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.lead}</p>
            </div>
          </Link>
        ))}
      </div>
    </SiteFrame>
  );
}
