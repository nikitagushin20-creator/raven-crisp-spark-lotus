import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as productsByLine, d as formatPrice, i as SiteFrame, m as lineBySlug, r as ProductCard } from "./chrome-D-Tozyhf.mjs";
import { i as Route$9 } from "./router-DKrMjPfk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lines._slug-m7I8tpw3.js
var import_jsx_runtime = require_jsx_runtime();
function LinePage() {
	const { slug } = Route$9.useParams();
	const line = lineBySlug(slug);
	if (!line) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		title: "Линейка",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold",
				children: "Такой линейки нет"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/catalog",
				className: "mt-4 inline-block font-semibold text-primary",
				children: "Открыть каталог"
			})]
		})
	});
	const items = productsByLine(line.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: line.name,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-wide text-accent uppercase",
							children: line.mark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-4xl font-extrabold",
							children: line.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: line.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							search: { line: line.slug },
							className: "btn mt-6 inline-flex min-h-11 items-center rounded-md bg-accent px-4 text-sm font-semibold text-on-accent",
							children: "Смотреть позиции"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: line.image,
					alt: line.alt,
					className: "rise aspect-[4/3] w-full rounded-lg object-cover"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					slug: product.slug,
					title: product.title,
					summary: product.summary,
					price: formatPrice(product.price),
					image: product.image,
					stock: product.stock
				}, product.slug))
			})
		})]
	});
}
//#endregion
export { LinePage as component };
