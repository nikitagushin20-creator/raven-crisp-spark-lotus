import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as news, i as SiteFrame, n as PageIntro } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news.index-BkCnCCtt.js
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Новости",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Новости",
			title: "Склады, сервис и разборы",
			text: "Короткие заметки: куда отгрузили, где открылся пост и как не промахнуться с подбором."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2",
			children: news.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/news/$slug",
				params: { slug: item.slug },
				className: "card-hover grid overflow-hidden rounded-lg border border-fg/10 bg-surface sm:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					className: "aspect-[3/2] h-full w-full object-cover sm:col-span-2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 sm:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: item.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-extrabold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: item.lead
						})
					]
				})]
			}, item.slug))
		})]
	});
}
//#endregion
export { NewsPage as component };
