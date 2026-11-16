import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/stats.server-hldsOjC_.js
var _0002_stats_default = "create table if not exists page_views (\n  id         bigserial primary key,\n  path       text not null,\n  title      text not null default '',\n  created_at timestamptz not null default now()\n);\n\ncreate index if not exists page_views_created_idx on page_views (created_at);\ncreate index if not exists page_views_path_idx on page_views (path);\n\ncreate table if not exists site_events (\n  id         bigserial primary key,\n  kind       text not null,\n  path       text not null default '',\n  meta       text not null default '',\n  created_at timestamptz not null default now()\n);\n\ncreate index if not exists site_events_created_idx on site_events (created_at);\ncreate index if not exists site_events_kind_idx on site_events (kind);\n\ncreate table if not exists admin_sessions (\n  token      text primary key,\n  expires_at timestamptz not null\n);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_stats.sql": _0002_stats_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
var ADMIN_USER = "admin";
var ADMIN_PASSWORD = "Promservis2026";
function sameSecret(a, b) {
	const left = createHash("sha256").update(a).digest();
	const right = createHash("sha256").update(b).digest();
	return timingSafeEqual(left, right);
}
async function recordView(path, title) {
	await (await getSql())`insert into page_views (path, title) values (${path}, ${title})`;
}
async function recordEvent(kind, path, meta) {
	await (await getSql())`insert into site_events (kind, path, meta) values (${kind}, ${path}, ${meta})`;
}
async function openAdminSession(login, password) {
	if (!sameSecret(login, ADMIN_USER) || !sameSecret(password, ADMIN_PASSWORD)) return null;
	const sql = await getSql();
	await sql`delete from admin_sessions where expires_at < now()`;
	const token = randomBytes(24).toString("hex");
	await sql`insert into admin_sessions (token, expires_at) values (${token}, now() + interval '12 hours')`;
	return token;
}
async function readStats(token) {
	const sql = await getSql();
	if (!(await sql`
    select token from admin_sessions where token = ${token} and expires_at > now()
  `).length) return null;
	const [viewsToday] = await sql`
    select count(*)::int as n from page_views
    where created_at >= date_trunc('day', now())
  `;
	const [views7] = await sql`
    select count(*)::int as n from page_views where created_at > now() - interval '7 days'
  `;
	const [views30] = await sql`
    select count(*)::int as n from page_views where created_at > now() - interval '30 days'
  `;
	const [events7] = await sql`
    select count(*)::int as n from site_events where created_at > now() - interval '7 days'
  `;
	const byDayRows = await sql`
    select to_char(created_at, 'YYYY-MM-DD') as day,
           count(*)::int as views
    from page_views
    where created_at > now() - interval '14 days'
    group by 1
    order by 1
  `;
	const topPages = await sql`
    select path, max(title) as title, count(*)::int as n
    from page_views
    group by path
    order by n desc
    limit 8
  `;
	const byKind = await sql`
    select kind, count(*)::int as n
    from site_events
    group by kind
    order by n desc
  `;
	const topProducts = await sql`
    select meta, count(*)::int as n
    from site_events
    where kind = 'cart' and meta <> ''
    group by meta
    order by n desc
    limit 6
  `;
	const recent = await sql`
    select kind, path, meta,
           to_char(created_at, 'DD.MM HH24:MI') as at
    from site_events
    order by id desc
    limit 12
  `;
	const byDay = [];
	const map = new Map(byDayRows.map((row) => [String(row.day).slice(0, 10), row.views]));
	for (let i = 13; i >= 0; i -= 1) {
		const date = /* @__PURE__ */ new Date();
		date.setUTCDate(date.getUTCDate() - i);
		const day = date.toISOString().slice(0, 10);
		byDay.push({
			day: day.slice(5),
			views: map.get(day) ?? 0
		});
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
		recent
	};
}
//#endregion
export { openAdminSession, readStats, recordEvent, recordView };
