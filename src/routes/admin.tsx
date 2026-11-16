import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { kindLabels, productBySlug } from "@/data/site";
import { btnAccent, btnGhost, PageIntro, SiteFrame, kindTitle } from "@/components/chrome";
import { readLocalLeads, type LocalLead } from "@/lib/cart";
import { adminLogin, loadStats } from "@/lib/stats.functions";

const TOKEN_KEY = "pso-admin";

type Stats = {
  viewsToday: number;
  views7: number;
  views30: number;
  events7: number;
  byDay: { day: string; views: number }[];
  topPages: { path: string; title: string; n: number }[];
  byKind: { kind: string; n: number }[];
  topProducts: { meta: string; n: number }[];
  recent: { kind: string; path: string; meta: string; at: string }[];
};

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [leads, setLeads] = useState<LocalLead[]>([]);

  useEffect(() => {
    const saved = sessionStorage.getItem(TOKEN_KEY);
    if (saved) setToken(saved);
    setLeads(readLocalLeads());
  }, []);

  useEffect(() => {
    if (!token) return;
    let stop = false;
    const pull = () => {
      void loadStats({ data: { token } })
        .then((result) => {
          if (stop) return;
          if (!result.ok) {
            sessionStorage.removeItem(TOKEN_KEY);
            setToken(null);
            setStats(null);
            return;
          }
          setStats(result.stats);
        })
        .catch(() => undefined);
    };
    pull();
    const timer = window.setInterval(pull, 15000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, [token]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);
    setError("");
    try {
      const result = await adminLogin({
        data: {
          login: String(form.get("login") ?? ""),
          password: String(form.get("password") ?? ""),
        },
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      sessionStorage.setItem(TOKEN_KEY, result.token);
      setToken(result.token);
    } catch {
      setError("Не удалось войти. Обновите страницу.");
    } finally {
      setPending(false);
    }
  }

  return (
    <SiteFrame title="Админка">
      <PageIntro
        kicker="Администратор"
        title="Просмотры и статистика"
        text="Считает визиты страниц и число заявок по всему сайту. Телефоны и тексты в общую базу не пишутся."
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        {!token ? (
          <form onSubmit={onSubmit} className="max-w-md space-y-3 rounded-lg border border-fg/10 bg-surface p-5">
            <label className="block text-sm font-medium">
              Логин
              <input name="login" autoComplete="username" className="field mt-1" defaultValue="admin" />
            </label>
            <label className="block text-sm font-medium">
              Пароль
              <input name="password" type="password" autoComplete="current-password" className="field mt-1" />
            </label>
            {error ? <p className="text-sm text-accent">{error}</p> : null}
            <button type="submit" className={btnAccent} disabled={pending}>
              {pending ? "Проверяем…" : "Войти"}
            </button>
            <p className="text-sm text-muted">
              Учётная запись: логин <span className="font-semibold text-fg">admin</span>, пароль{" "}
              <span className="font-semibold text-fg">Promservis2026</span>
            </p>
          </form>
        ) : null}
        {token && stats ? <Dashboard stats={stats} leads={leads} onLogout={() => {
          sessionStorage.removeItem(TOKEN_KEY);
          setToken(null);
          setStats(null);
        }} /> : null}
        {token && !stats ? <p className="text-muted">Собираем цифры…</p> : null}
      </div>
    </SiteFrame>
  );
}

function Dashboard({
  stats,
  leads,
  onLogout,
}: {
  stats: Stats;
  leads: LocalLead[];
  onLogout: () => void;
}) {
  const [chartReady, setChartReady] = useState(false);
  useEffect(() => setChartReady(true), []);
  const cards = [
    ["Сегодня", stats.viewsToday],
    ["7 дней", stats.views7],
    ["30 дней", stats.views30],
    ["Заявки за 7 дней", stats.events7],
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted">Обновляется само, раз в 15 секунд.</p>
        <button type="button" className={btnGhost} onClick={onLogout}>
          Выйти
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([label, value]) => (
          <div key={String(label)} className="rounded-lg border border-fg/10 bg-surface p-4">
            <p className="text-sm text-muted">{label}</p>
            <p className="mt-1 text-3xl font-extrabold tabular-nums">{value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-fg/10 bg-surface p-4">
        <h2 className="font-bold">Просмотры по дням</h2>
        <div className="mt-4 h-56">
          {chartReady ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.byDay}>
                <XAxis dataKey="day" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis allowDecimals={false} width={28} tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="views" name="Просмотры" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-lg border border-fg/10 bg-surface p-4">
          <h2 className="font-bold">Страницы</h2>
          <table className="mt-3 w-full text-sm">
            <tbody>
              {stats.topPages.length === 0 ? (
                <tr>
                  <td className="py-2 text-muted">Пока нет просмотров. Откройте пару разделов и вернитесь.</td>
                </tr>
              ) : (
                stats.topPages.map((row) => (
                  <tr key={row.path} className="border-t border-fg/10">
                    <td className="py-2 pr-3">
                      <p className="font-semibold">{row.title || row.path}</p>
                      <p className="text-muted">{row.path}</p>
                    </td>
                    <td className="py-2 text-right font-bold tabular-nums">{row.n}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
        <section className="rounded-lg border border-fg/10 bg-surface p-4">
          <h2 className="font-bold">События</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {stats.byKind.length === 0 ? <li className="text-muted">Заявок ещё не было.</li> : null}
            {stats.byKind.map((row) => (
              <li key={row.kind} className="flex justify-between gap-3 border-t border-fg/10 py-2">
                <span>{kindTitle(row.kind)}</span>
                <span className="font-bold tabular-nums">{row.n}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-5 font-bold">Кладут в корзину</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {stats.topProducts.length === 0 ? <li className="text-muted">Пока никто не добавлял.</li> : null}
            {stats.topProducts.map((row) => (
              <li key={row.meta} className="flex justify-between gap-3">
                <span>{productBySlug(row.meta)?.title ?? row.meta}</span>
                <span className="font-bold tabular-nums">{row.n}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="rounded-lg border border-fg/10 bg-surface p-4">
        <h2 className="font-bold">Последние события</h2>
        <ul className="mt-3 divide-y divide-fg/10 text-sm">
          {stats.recent.map((row, index) => (
            <li key={`${row.at}-${index}`} className="flex flex-wrap justify-between gap-2 py-2">
              <span>
                {kindLabels[row.kind] ?? row.kind}
                {row.meta ? ` · ${row.meta}` : ""}
              </span>
              <span className="text-muted">
                {row.at} · {row.path}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-lg border border-fg/10 bg-surface p-4">
        <h2 className="font-bold">Заявки с этого браузера</h2>
        <p className="mt-1 text-sm text-muted">Имена и телефоны видны только здесь, на устройстве, где форму отправили.</p>
        {leads.length === 0 ? <p className="mt-3 text-sm text-muted">В этом браузере заявок нет.</p> : null}
        <ul className="mt-3 space-y-3">
          {leads.slice(0, 8).map((lead, index) => (
            <li key={`${lead.at}-${index}`} className="text-sm">
              <p className="font-semibold">
                {kindTitle(lead.kind)} · {lead.at}
              </p>
              <p className="text-muted">
                {Object.entries(lead.fields)
                  .filter(([, value]) => value)
                  .map(([label, value]) => `${label}: ${value}`)
                  .join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
