import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as projects, i as SiteFrame, n as PageIntro } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-DkX2-Tni.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Проекты",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Проекты",
			title: "Что уже стоит и работает",
			text: "Короткие истории поставок: задача, что поставили и чем закончилось. Без обещаний «под ключ за три дня» там, где этого не было."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2",
			children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects/$slug",
				params: { slug: project.slug },
				className: "card-hover overflow-hidden rounded-lg border border-fg/10 bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: "",
					className: "aspect-[3/2] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold text-accent",
							children: [
								project.city,
								" · ",
								project.year
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-lg font-extrabold",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: project.task
						})
					]
				})]
			}, project.slug))
		})]
	});
}
//#endregion
export { ProjectsPage as component };
