import { createServerFn } from "@tanstack/react-start";

const KINDS = new Set([
  "callback",
  "message",
  "review",
  "warranty",
  "repair",
  "register",
  "engineer",
  "dealer",
  "checkout",
  "cart",
]);

function asText(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export const trackView = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const raw = input as { path?: unknown; title?: unknown };
    const path = asText(raw?.path, 180);
    if (!path.startsWith("/") || path.includes("..")) throw new Error("bad path");
    return { path, title: asText(raw?.title, 140) };
  })
  .handler(async ({ data }) => {
    const { recordView } = await import("./stats.server");
    await recordView(data.path, data.title);
    return { ok: true as const };
  });

export const trackEvent = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const raw = input as { kind?: unknown; path?: unknown; meta?: unknown };
    const kind = asText(raw?.kind, 32);
    if (!KINDS.has(kind)) throw new Error("bad kind");
    const path = asText(raw?.path, 180);
    const safePath = path.startsWith("/") ? path : "/";
    return { kind, path: safePath, meta: asText(raw?.meta, 80) };
  })
  .handler(async ({ data }) => {
    const { recordEvent } = await import("./stats.server");
    await recordEvent(data.kind, data.path, data.meta);
    return { ok: true as const };
  });

export const adminLogin = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const raw = input as { login?: unknown; password?: unknown };
    return {
      login: asText(raw?.login, 40),
      password: String(raw?.password ?? "").slice(0, 80),
    };
  })
  .handler(async ({ data }) => {
    const { openAdminSession } = await import("./stats.server");
    const token = await openAdminSession(data.login, data.password);
    if (!token) return { ok: false as const, error: "Неверный логин или пароль" };
    return { ok: true as const, token };
  });

export const loadStats = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const token = asText((input as { token?: unknown })?.token, 80);
    if (token.length < 20) throw new Error("unauthorized");
    return { token };
  })
  .handler(async ({ data }) => {
    const { readStats } = await import("./stats.server");
    const stats = await readStats(data.token);
    if (!stats) return { ok: false as const };
    return { ok: true as const, stats };
  });
