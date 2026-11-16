import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, w as projectBySlug } from "./chrome-D-Tozyhf.mjs";
import { n as Route$5 } from "./router-DKrMjPfk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-B-0z3zyU.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { slug } = Route$5.useParams();
	const project = projectBySlug(slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		title: "Проект",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold",
				children: "Проект не найден"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projects",
				className: "mt-4 inline-block font-semibold text-primary",
				children: "Все проекты"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		title: project.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-accent",
					children: [
						project.city,
						" · ",
						project.year
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-extrabold",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: "",
					className: "mt-6 aspect-[3/2] w-full rounded-lg object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Задача",
							text: project.task
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Что сделали",
							text: project.solution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Чем кончилось",
							text: project.result
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					className: "mt-8 inline-block text-sm font-semibold text-primary",
					children: "Остальные проекты"
				})
			]
		})
	});
}
function Section({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-bold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-muted",
		children: text
	})] });
}
//#endregion
export { ProjectPage as component };
