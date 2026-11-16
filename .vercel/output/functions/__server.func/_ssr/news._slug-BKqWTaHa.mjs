import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, v as newsBySlug } from "./chrome-D-Tozyhf.mjs";
import { r as Route$7 } from "./router-DKrMjPfk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news._slug-BKqWTaHa.js
var import_jsx_runtime = require_jsx_runtime();
function NewsItemPage() {
	const { slug } = Route$7.useParams();
	const item = newsBySlug(slug);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		title: "Новость",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold",
				children: "Заметка не найдена"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/news",
				className: "mt-4 inline-block font-semibold text-primary",
				children: "Все новости"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		title: item.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: item.date
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-extrabold",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					className: "mt-6 aspect-[3/2] w-full rounded-lg object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4 text-base leading-relaxed",
					children: item.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					className: "mt-8 inline-block text-sm font-semibold text-primary",
					children: "Все новости"
				})
			]
		})
	});
}
//#endregion
export { NewsItemPage as component };
