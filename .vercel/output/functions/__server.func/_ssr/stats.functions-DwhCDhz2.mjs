import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stats.functions-DwhCDhz2.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var KINDS = /* @__PURE__ */ new Set([
	"callback",
	"message",
	"review",
	"warranty",
	"repair",
	"register",
	"engineer",
	"dealer",
	"checkout",
	"cart"
]);
function asText(value, max) {
	return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}
var trackView_createServerFn_handler = createServerRpc({
	id: "55352ee1ba928a18b266cec0d3c36d86ccc0926d71b2713ebac589c846bd4f63",
	name: "trackView",
	filename: "src/lib/stats.functions.ts"
}, (opts) => trackView.__executeServer(opts));
var trackView = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	const path = asText(raw?.path, 180);
	if (!path.startsWith("/") || path.includes("..")) throw new Error("bad path");
	return {
		path,
		title: asText(raw?.title, 140)
	};
}).handler(trackView_createServerFn_handler, async ({ data }) => {
	const { recordView } = await import("./stats.server-hldsOjC_.mjs");
	await recordView(data.path, data.title);
	return { ok: true };
});
var trackEvent_createServerFn_handler = createServerRpc({
	id: "32eea4a95a07bba56c72f76a019798119c583bba5f2cb2834f251d4b6b0a0c57",
	name: "trackEvent",
	filename: "src/lib/stats.functions.ts"
}, (opts) => trackEvent.__executeServer(opts));
var trackEvent = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	const kind = asText(raw?.kind, 32);
	if (!KINDS.has(kind)) throw new Error("bad kind");
	const path = asText(raw?.path, 180);
	return {
		kind,
		path: path.startsWith("/") ? path : "/",
		meta: asText(raw?.meta, 80)
	};
}).handler(trackEvent_createServerFn_handler, async ({ data }) => {
	const { recordEvent } = await import("./stats.server-hldsOjC_.mjs");
	await recordEvent(data.kind, data.path, data.meta);
	return { ok: true };
});
var adminLogin_createServerFn_handler = createServerRpc({
	id: "869cca4910765eb11310597b6210d144ee1923ce92dca0e7687169e73510ccd8",
	name: "adminLogin",
	filename: "src/lib/stats.functions.ts"
}, (opts) => adminLogin.__executeServer(opts));
var adminLogin = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	return {
		login: asText(raw?.login, 40),
		password: String(raw?.password ?? "").slice(0, 80)
	};
}).handler(adminLogin_createServerFn_handler, async ({ data }) => {
	const { openAdminSession } = await import("./stats.server-hldsOjC_.mjs");
	const token = await openAdminSession(data.login, data.password);
	if (!token) return {
		ok: false,
		error: "Неверный логин или пароль"
	};
	return {
		ok: true,
		token
	};
});
var loadStats_createServerFn_handler = createServerRpc({
	id: "b4c6f618d42fc0c03e2c883499c992b90879af4b02b3692fc74c124d5a2514a4",
	name: "loadStats",
	filename: "src/lib/stats.functions.ts"
}, (opts) => loadStats.__executeServer(opts));
var loadStats = createServerFn({ method: "POST" }).validator((input) => {
	const token = asText(input?.token, 80);
	if (token.length < 20) throw new Error("unauthorized");
	return { token };
}).handler(loadStats_createServerFn_handler, async ({ data }) => {
	const { readStats } = await import("./stats.server-hldsOjC_.mjs");
	const stats = await readStats(data.token);
	if (!stats) return { ok: false };
	return {
		ok: true,
		stats
	};
});
//#endregion
export { adminLogin_createServerFn_handler, loadStats_createServerFn_handler, trackEvent_createServerFn_handler, trackView_createServerFn_handler };
