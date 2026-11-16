import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  Search,
  ShoppingCart,
  X,
  ChevronDown,
  MapPin,
  Mail,
} from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { company, kindLabels, lines, offices } from "@/data/site";
import { saveLocalLead, useCart, useCartReady } from "@/lib/cart";
import { cn } from "@/lib/cn";
import { trackEvent, trackView } from "@/lib/stats.functions";
import { useUi } from "@/lib/ui";

const btn =
  "btn inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold";
export const btnAccent = `${btn} bg-accent text-on-accent`;
export const btnPrimary = `${btn} bg-primary text-on-primary`;
export const btnGhost = `${btn} border border-fg/15 bg-surface text-fg`;

export function SiteFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const modal = useUi((state) => state.modal);

  useEffect(() => {
    document.title = title ? `${title} — ${company.short}` : company.legal;
  }, [title]);

  useEffect(() => {
    const key = `pso-view:${path}`;
    const prev = Number(sessionStorage.getItem(key) || 0);
    const now = Date.now();
    if (now - prev < 2500) return;
    sessionStorage.setItem(key, String(now));
    void trackView({ data: { path, title } }).catch(() => undefined);
  }, [path, title]);

  useEffect(() => {
    if (!modal) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") useUi.getState().close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main className="pb-24 lg:pb-0">{children}</main>
      <Footer />
      <MobileBar />
      <Modals />
    </div>
  );
}

function Header() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const open = useUi((state) => state.open);
  const menu = useUi((state) => state.modal) === "menu";
  const close = useUi((state) => state.close);
  const items = useCart((state) => state.items);
  const ready = useCartReady();
  const [query, setQuery] = useState("");
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => close(), [path, close]);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    window.location.assign(q ? `/catalog?q=${encodeURIComponent(q)}` : "/catalog");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-fg/10 bg-surface/95 backdrop-blur-md">
      <div className="hidden border-b border-fg/10 bg-primary text-on-primary lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
          <p>Поставка и обслуживание промышленного оборудования</p>
          <div className="flex items-center gap-5">
            <span>{company.hours}</span>
            <a className="inline-flex items-center gap-2 font-semibold" href={company.phoneHref}>
              <Phone className="size-4" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-sm font-extrabold tracking-wide text-on-primary">
            ПС
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold tracking-wide">ПРОМСЕРВИС</span>
            <span className="block truncate text-xs text-muted">и обслуживание</span>
          </span>
        </Link>
        <form onSubmit={onSearch} className="mx-auto hidden max-w-sm flex-1 lg:block">
          <label className="relative block">
            <span className="sr-only">Поиск по каталогу</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Найти станок или компрессор"
              className="field pl-10"
            />
          </label>
        </form>
        <div className="ml-auto flex items-center gap-2">
          <button type="button" className={`${btnGhost} hidden sm:inline-flex`} onClick={() => open("callback")}>
            Заказать звонок
          </button>
          <Link to="/cart" className={`${btnGhost} relative px-3`} aria-label="Корзина">
            <ShoppingCart className="size-5" />
            {ready && count > 0 ? (
              <span className="absolute -top-1 -right-1 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-bold text-on-accent">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className={`${btnGhost} px-3 lg:hidden`}
            aria-label={menu ? "Закрыть меню" : "Открыть меню"}
            onClick={() => (menu ? close() : open("menu"))}
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <nav className="mx-auto hidden max-w-6xl items-center gap-1 px-4 pb-3 lg:flex">
        <Drop label="Каталог" active={path.startsWith("/catalog") || path.startsWith("/lines")}>
          <Link to="/catalog" className="block rounded-md px-3 py-2 hover:bg-bg">
            Весь каталог
          </Link>
          {lines.map((line) => (
            <Link
              key={line.slug}
              to="/lines/$slug"
              params={{ slug: line.slug }}
              className="block rounded-md px-3 py-2 hover:bg-bg"
            >
              {line.mark}: {line.name}
            </Link>
          ))}
        </Drop>
        <Drop label="Сервис" active={path.startsWith("/service")}>
          <Link to="/service" className="block rounded-md px-3 py-2 hover:bg-bg">
            О сервисе
          </Link>
          <Link to="/service/warranty" className="block rounded-md px-3 py-2 hover:bg-bg">
            Гарантийный ремонт
          </Link>
          <Link to="/service/repair" className="block rounded-md px-3 py-2 hover:bg-bg">
            Негарантийный ремонт
          </Link>
          <Link to="/service/register" className="block rounded-md px-3 py-2 hover:bg-bg">
            Регистрация оборудования
          </Link>
          <Link to="/service/engineer" className="block rounded-md px-3 py-2 hover:bg-bg">
            Вопрос инженеру
          </Link>
        </Drop>
        <NavLink to="/dealers" active={path.startsWith("/dealers")}>
          Дилерам
        </NavLink>
        <NavLink to="/projects" active={path.startsWith("/projects")}>
          Проекты
        </NavLink>
        <NavLink to="/news" active={path.startsWith("/news")}>
          Новости
        </NavLink>
        <NavLink to="/contacts" active={path.startsWith("/contacts")}>
          Контакты
        </NavLink>
        <NavLink to="/cabinet" active={path.startsWith("/cabinet")}>
          Кабинет
        </NavLink>
      </nav>
      {menu ? <MobileMenu /> : null}
    </header>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: "/" | "/dealers" | "/projects" | "/news" | "/contacts" | "/cabinet" | "/catalog" | "/service";
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
        active ? "bg-primary text-on-primary" : "hover:bg-bg",
      )}
    >
      {children}
    </Link>
  );
}

function Drop({
  label,
  active,
  children,
}: {
  label: string;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold",
          active ? "bg-primary text-on-primary" : "hover:bg-bg",
        )}
      >
        {label}
        <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="invisible absolute top-full left-0 z-20 min-w-64 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-md border border-fg/10 bg-surface p-2 shadow-lg">{children}</div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const close = useUi((state) => state.close);
  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button
        type="button"
        aria-label="Закрыть меню"
        className="absolute inset-0 bg-fg/40"
        onClick={close}
      />
      <div className="rise absolute top-0 right-0 flex h-full w-[min(100%,22rem)] flex-col gap-1 overflow-y-auto bg-surface p-4 shadow-xl">
        <p className="mb-2 text-sm font-semibold text-muted">Разделы</p>
        <Link to="/catalog" className="rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Каталог
        </Link>
        {lines.map((line) => (
          <Link
            key={line.slug}
            to="/lines/$slug"
            params={{ slug: line.slug }}
            className="rounded-md px-3 py-2 text-sm hover:bg-bg"
            onClick={close}
          >
            {line.name} — {line.mark.toLowerCase()}
          </Link>
        ))}
        <Link to="/service" className="mt-2 rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Сервис
        </Link>
        <Link to="/service/warranty" className="rounded-md px-3 py-2 text-sm hover:bg-bg" onClick={close}>
          Гарантийный ремонт
        </Link>
        <Link to="/service/repair" className="rounded-md px-3 py-2 text-sm hover:bg-bg" onClick={close}>
          Негарантийный ремонт
        </Link>
        <Link to="/service/register" className="rounded-md px-3 py-2 text-sm hover:bg-bg" onClick={close}>
          Регистрация оборудования
        </Link>
        <Link to="/service/engineer" className="rounded-md px-3 py-2 text-sm hover:bg-bg" onClick={close}>
          Вопрос инженеру
        </Link>
        <Link to="/dealers" className="rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Дилерам
        </Link>
        <Link to="/projects" className="rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Проекты
        </Link>
        <Link to="/news" className="rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Новости
        </Link>
        <Link to="/contacts" className="rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Контакты
        </Link>
        <Link to="/cabinet" className="rounded-md px-3 py-3 font-semibold hover:bg-bg" onClick={close}>
          Личный кабинет
        </Link>
        <Link to="/admin" className="rounded-md px-3 py-3 text-sm text-muted hover:bg-bg" onClick={close}>
          Админка
        </Link>
        <a href={company.phoneHref} className={`${btnAccent} mt-3`}>
          <Phone className="size-4" />
          {company.phone}
        </a>
      </div>
    </div>
  );
}

function MobileBar() {
  const open = useUi((state) => state.open);
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-fg/10 bg-surface p-3 lg:hidden">
      <a href={company.phoneHref} className={`${btnPrimary} flex-1`}>
        <Phone className="size-4" />
        Позвонить
      </a>
      <button type="button" className={`${btnAccent} flex-1`} onClick={() => open("callback")}>
        Звонок
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-fg/10 bg-primary text-on-primary">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold tracking-wide">ПРОМСЕРВИС</p>
          <p className="mt-2 text-sm text-on-primary/80">{company.legal}</p>
          <p className="mt-4 text-sm text-on-primary/80">
            Компрессоры, подготовка воздуха, строительные машины и металлообработка. Подбор, склад, пуск и ремонт.
          </p>
        </div>
        <div>
          <p className="font-semibold">Каталог</p>
          <ul className="mt-3 space-y-2 text-sm text-on-primary/80">
            <li>
              <Link to="/catalog" className="hover:text-on-primary">
                Все позиции
              </Link>
            </li>
            {lines.map((line) => (
              <li key={line.slug}>
                <Link to="/lines/$slug" params={{ slug: line.slug }} className="hover:text-on-primary">
                  {line.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Компания</p>
          <ul className="mt-3 space-y-2 text-sm text-on-primary/80">
            <li>
              <Link to="/service" className="hover:text-on-primary">
                Сервис
              </Link>
            </li>
            <li>
              <Link to="/dealers" className="hover:text-on-primary">
                Дилерам
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-on-primary">
                Проекты
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-on-primary">
                Новости
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-on-primary">
                Контакты
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-on-primary">
                Статистика
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Связь</p>
          <a className="mt-3 flex items-center gap-2 text-sm font-semibold" href={company.phoneHref}>
            <Phone className="size-4" />
            {company.phone}
          </a>
          <a className="mt-2 flex items-center gap-2 text-sm text-on-primary/80" href={`mailto:${company.email}`}>
            <Mail className="size-4" />
            {company.email}
          </a>
          <p className="mt-2 flex items-start gap-2 text-sm text-on-primary/80">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            Москва, Новосибирск, Екатеринбург, Казань, Краснодар
          </p>
        </div>
      </div>
      <div className="border-t border-on-primary/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-on-primary/70">
          © {new Date().getFullYear()} {company.legal}. Телефон приёмной {company.phone}.
        </p>
      </div>
    </footer>
  );
}

function Modals() {
  const modal = useUi((state) => state.modal);
  const close = useUi((state) => state.close);
  if (!modal || modal === "menu") return null;

  const titles: Record<string, string> = {
    callback: "Заказать звонок",
    message: "Написать сообщение",
    review: "Оставить отзыв",
    video: "Площадка и компрессорная",
    office: "Ближайший офис",
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-end p-0 sm:place-items-center sm:p-4">
      <button type="button" aria-label="Закрыть" className="absolute inset-0 bg-fg/50" onClick={close} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="rise relative max-h-[92vh] w-full overflow-y-auto rounded-t-lg bg-surface p-5 shadow-xl sm:max-w-lg sm:rounded-lg"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id="dialog-title" className="text-xl font-extrabold">
            {titles[modal]}
          </h2>
          <button type="button" className={`${btnGhost} px-3`} onClick={close} aria-label="Закрыть окно">
            <X className="size-4" />
          </button>
        </div>
        {modal === "callback" ? (
          <LeadForm
            kind="callback"
            meta="modal"
            submitLabel="Жду звонка"
            fields={[
              { name: "name", label: "Имя", required: true },
              { name: "phone", label: "Телефон", required: true, type: "tel" },
            ]}
          />
        ) : null}
        {modal === "message" ? (
          <LeadForm
            kind="message"
            meta="modal"
            submitLabel="Отправить"
            fields={[
              { name: "name", label: "Имя", required: true },
              { name: "phone", label: "Телефон", required: true, type: "tel" },
              { name: "text", label: "Сообщение", required: true, textarea: true },
            ]}
          />
        ) : null}
        {modal === "review" ? (
          <LeadForm
            kind="review"
            meta="modal"
            submitLabel="Отправить отзыв"
            fields={[
              { name: "name", label: "Имя", required: true },
              { name: "company", label: "Компания" },
              { name: "text", label: "Отзыв", required: true, textarea: true },
            ]}
          />
        ) : null}
        {modal === "video" ? (
          <video
            className="w-full rounded-md bg-fg"
            controls
            playsInline
            poster="/media/hero.jpg"
            src="/media/plant.mp4"
          />
        ) : null}
        {modal === "office" ? <OfficeList /> : null}
      </div>
    </div>
  );
}

function OfficeList() {
  return (
    <ul className="space-y-3">
      {offices.map((office) => (
        <li key={office.city} className="rounded-md border border-fg/10 p-3">
          <p className="font-semibold">
            {office.city} · {office.role}
          </p>
          <p className="mt-1 text-sm text-muted">{office.address}</p>
          <p className="text-sm text-muted">{office.hours}</p>
          <a className="mt-1 inline-block text-sm font-semibold text-primary" href={company.phoneHref}>
            {company.phone}
          </a>
        </li>
      ))}
    </ul>
  );
}

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  options?: string[];
};

export function LeadForm({
  kind,
  meta,
  fields,
  submitLabel,
}: {
  kind: string;
  meta?: string;
  fields: Field[];
  submitLabel: string;
}) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const path = useRouterState({ select: (state) => state.location.pathname });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fieldsOut: Record<string, string> = {};
    for (const field of fields) {
      const value = String(form.get(field.name) ?? "").trim();
      if (field.required && !value) {
        setError(`Заполните поле «${field.label}»`);
        return;
      }
      if (field.name === "phone" && value.replace(/\D/g, "").length < 10) {
        setError("Укажите телефон полностью");
        return;
      }
      fieldsOut[field.label] = value;
    }
    setError("");
    saveLocalLead({
      kind,
      at: new Date().toLocaleString("ru-RU"),
      fields: fieldsOut,
    });
    void trackEvent({ data: { kind, path, meta: meta ?? "" } }).catch(() => undefined);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rise rounded-md bg-bg p-4">
        <p className="font-semibold">Заявка принята</p>
        <p className="mt-1 text-sm text-muted">
          Перезвоним на {company.phone} в рабочее время. Если вопрос срочный — наберите этот номер сами.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {fields.map((field) => (
        <label key={field.name} className="block text-sm font-medium">
          {field.label}
          {field.required ? <span className="text-accent"> *</span> : null}
          {field.textarea ? (
            <textarea name={field.name} rows={4} className="field mt-1" />
          ) : field.options ? (
            <select name={field.name} className="field mt-1" defaultValue="">
              <option value="" disabled>
                Выберите
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input name={field.name} type={field.type ?? "text"} className="field mt-1" />
          )}
        </label>
      ))}
      {error ? <p className="text-sm text-accent">{error}</p> : null}
      <button type="submit" className={btnAccent}>
        {submitLabel}
      </button>
    </form>
  );
}

export function PageIntro({
  kicker,
  title,
  text,
}: {
  kicker?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="border-b border-fg/10 bg-surface">
      <div className="rise mx-auto max-w-6xl px-4 py-10">
        {kicker ? <p className="text-sm font-semibold tracking-wide text-accent uppercase">{kicker}</p> : null}
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        {text ? <p className="mt-3 max-w-2xl text-base text-muted">{text}</p> : null}
      </div>
    </div>
  );
}

export function ProductCard({
  slug,
  title,
  summary,
  price,
  image,
  stock,
}: {
  slug: string;
  title: string;
  summary: string;
  price: string;
  image: string;
  stock: string;
}) {
  return (
    <Link
      to="/catalog/$slug"
      params={{ slug }}
      className="card-hover flex h-full flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface"
    >
      <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 flex-1 text-sm text-muted">{summary}</p>
        <p className="mt-3 text-xs text-muted">{stock}</p>
        <p className="mt-1 text-lg font-extrabold">{price}</p>
      </div>
    </Link>
  );
}

export function kindTitle(kind: string) {
  return kindLabels[kind] ?? kind;
}
