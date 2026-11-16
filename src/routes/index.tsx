import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { company, formatPrice, lines, news, products, projects, reviews, stats } from "@/data/site";
import { btnAccent, btnGhost, btnPrimary, LeadForm, ProductCard, SiteFrame } from "@/components/chrome";
import { useUi } from "@/lib/ui";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const open = useUi((state) => state.open);
  const featured = products.filter((item) =>
    ["sever-vk-37", "potok-ov-40", "osnova-vp-90", "rezec-lp-280"].includes(item.slug),
  );

  return (
    <SiteFrame title="Поставка промышленного оборудования">
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
          <div className="rise">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              {company.legal}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Оборудование, которое выходит на смену без сюрпризов
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Подбираем компрессоры, подготовку воздуха, строительные машины и станки. Отгружаем со склада,
              запускаем и чиним, пока техника в работе.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/catalog" className={btnAccent}>
                Открыть каталог
              </Link>
              <button type="button" className={btnPrimary} onClick={() => open("message")}>
                Задать вопрос
              </button>
            </div>
            <p className="mt-5 text-sm text-muted">
              Приёмная{" "}
              <a className="font-semibold text-fg" href={company.phoneHref}>
                {company.phone}
              </a>
            </p>
          </div>
          <div className="rise relative overflow-hidden rounded-lg" style={{ animationDelay: "80ms" }}>
            <img
              src="/media/hero.jpg"
              alt="Шоурум компрессоров и станков Промсервис"
              width={1792}
              height={1008}
              className="aspect-[16/10] w-full object-cover"
            />
            <button
              type="button"
              onClick={() => open("video")}
              className="btn absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-surface/95 px-4 text-sm font-semibold text-fg"
            >
              <Play className="size-4 fill-current" />
              Смотреть площадку
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Линейки</h2>
          <Link to="/catalog" className="text-sm font-semibold text-primary">
            Весь каталог
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {lines.map((line, index) => (
            <Link
              key={line.slug}
              to="/lines/$slug"
              params={{ slug: line.slug }}
              className="card-hover rise grid overflow-hidden rounded-lg border border-fg/10 bg-surface sm:grid-cols-5"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <img src={line.image} alt={line.alt} className="aspect-[4/3] h-full w-full object-cover sm:col-span-2" />
              <div className="p-4 sm:col-span-3">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase">{line.mark}</p>
                <h3 className="mt-1 text-xl font-extrabold">{line.name}</h3>
                <p className="mt-2 text-sm text-muted">{line.lead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary text-on-primary">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.value}>
              <p className="text-3xl font-extrabold tabular-nums">{item.value}</p>
              <p className="mt-1 text-sm text-on-primary/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold">Появились вопросы по подбору?</h2>
          <p className="mt-2 text-muted">
            Оставьте номер. Инженер перезвонит и уточнит расход, давление или задачу на площадке — без обзвона «просто так».
          </p>
        </div>
        <div className="rounded-lg border border-fg/10 bg-surface p-4">
          <HomeCallback />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2">
          <img
            src="/media/warehouse.jpg"
            alt="Склад Промсервис"
            className="aspect-[16/10] w-full rounded-lg object-cover"
          />
          <div className="grid gap-5">
            {[
              ["Склад, а не витрина", "Наличие по компрессорам, плитам и расходникам видно в карточке. Под заказ называем срок до подтверждения."],
              ["Сервис на весь срок", "Гарантия 12 месяцев. Дальше — тот же пост: диагностика, запчасти, выезд."],
              ["Документы и пуск", "Паспорта, запуск и короткое обучение оператора входят в поставку станций."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-3">
              <Link to="/service" className={btnPrimary}>
                Как устроен сервис
              </Link>
              <button type="button" className={btnGhost} onClick={() => open("office")}>
                Ближайший офис
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-extrabold">Часто берут</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
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
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold">Проекты</h2>
            <Link to="/projects" className="text-sm font-semibold text-primary">
              Все проекты
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <Link
                key={project.slug}
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="card-hover overflow-hidden rounded-lg border border-fg/10"
              >
                <img src={project.image} alt="" className="aspect-[3/2] w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs font-semibold text-accent">
                    {project.city} · {project.year}
                  </p>
                  <h3 className="mt-1 font-bold">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-extrabold">Как это выглядит на площадке</h2>
        <video
          className="mt-6 aspect-video w-full rounded-lg bg-fg object-cover"
          controls
          playsInline
          poster="/media/hero.jpg"
          src="/media/plant.mp4"
        />
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold">Отзывы</h2>
            <button type="button" className="text-sm font-semibold text-primary" onClick={() => open("review")}>
              Оставить отзыв
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.company} className="rounded-lg border border-fg/10 p-4">
                <blockquote className="text-sm">{review.text}</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-muted">{review.company}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Новости</h2>
          <Link to="/news" className="text-sm font-semibold text-primary">
            Все новости
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {news.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              to="/news/$slug"
              params={{ slug: item.slug }}
              className="card-hover overflow-hidden rounded-lg border border-fg/10 bg-surface"
            >
              <img src={item.image} alt="" className="aspect-[3/2] w-full object-cover" />
              <div className="p-4">
                <p className="text-xs text-muted">{item.date}</p>
                <h3 className="mt-1 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.lead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}

function HomeCallback() {
  return (
    <LeadForm
      kind="callback"
      meta="home"
      submitLabel="Обратиться"
      fields={[
        { name: "name", label: "Имя", required: true },
        { name: "phone", label: "Телефон", required: true, type: "tel" },
      ]}
    />
  );
}
