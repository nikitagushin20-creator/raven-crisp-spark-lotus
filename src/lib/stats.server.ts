import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { getSql } from "@/lib/db";

const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "Promservis2026";

export type StatsPayload = {
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

function sameSecret(a: string, b: string) {
  const left = createHash("sha256").update(a).digest();
  const right = createHash("sha256").update(b).digest();
  return timingSafeEqual(left, right);
}

export async function recordView(path: string, title: string) {
  const sql = await getSql();
  await sql`insert into page_views (path, title) values (${path}, ${title})`;
}

export async function recordEvent(kind: string, path: string, meta: string) {
  const sql = await getSql();
  await sql`insert into site_events (kind, path, meta) values (${kind}, ${path}, ${meta})`;
}

export async function openAdminSession(login: string, password: string) {
  if (!sameSecret(login, ADMIN_USER) || !sameSecret(password, ADMIN_PASSWORD)) {
    return null;
  }
  const sql = await getSql();
  await sql`delete from admin_sessions where expires_at < now()`;
  const token = randomBytes(24).toString("hex");
  await sql`insert into admin_sessions (token, expires_at) values (${token}, now() + interval '12 hours')`;
  return token;
}

export async function readStats(token: string): Promise<StatsPayload | null> {
  const sql = await getSql();
  const sessions = await sql<{ token: string }>`
    select token from admin_sessions where token = ${token} and expires_at > now()
  `;
  if (!sessions.length) return null;

  const [viewsToday] = await sql<{ n: number }>`
    select count(*)::int as n from page_views
    where created_at >= date_trunc('day', now())
  `;
  const [views7] = await sql<{ n: number }>`
    select count(*)::int as n from page_views where created_at > now() - interval '7 days'
  `;
  const [views30] = await sql<{ n: number }>`
    select count(*)::int as n from page_views where created_at > now() - interval '30 days'
  `;
  const [events7] = await sql<{ n: number }>`
    select count(*)::int as n from site_events where created_at > now() - interval '7 days'
  `;
  const byDayRows = await sql<{ day: string; views: number }>`
    select to_char(created_at, 'YYYY-MM-DD') as day,
           count(*)::int as views
    from page_views
    where created_at > now() - interval '14 days'
    group by 1
    order by 1
  `;
  const topPages = await sql<{ path: string; title: string; n: number }>`
    select path, max(title) as title, count(*)::int as n
    from page_views
    group by path
    order by n desc
    limit 8
  `;
  const byKind = await sql<{ kind: string; n: number }>`
    select kind, count(*)::int as n
    from site_events
    group by kind
    order by n desc
  `;
  const topProducts = await sql<{ meta: string; n: number }>`
    select meta, count(*)::int as n
    from site_events
    where kind = 'cart' and meta <> ''
    group by meta
    order by n desc
    limit 6
  `;
  const recent = await sql<{ kind: string; path: string; meta: string; at: string }>`
    select kind, path, meta,
           to_char(created_at, 'DD.MM HH24:MI') as at
    from site_events
    order by id desc
    limit 12
  `;

  const byDay: { day: string; views: number }[] = [];
  const map = new Map(byDayRows.map((row) => [String(row.day).slice(0, 10), row.views]));
  for (let i = 13; i >= 0; i -= 1) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() - i);
    const day = date.toISOString().slice(0, 10);
    byDay.push({ day: day.slice(5), views: map.get(day) ?? 0 });
  }

  return {
    viewsToday: viewsToday?.n ?? 0,
    views7: views7?.n ?? 0,
    views30: views30?.n ?? 0,
    events7: events7?.n ?? 0,
    byDay,
    topPages,
    byKind,
    topProducts,
    recent,
  };
}
