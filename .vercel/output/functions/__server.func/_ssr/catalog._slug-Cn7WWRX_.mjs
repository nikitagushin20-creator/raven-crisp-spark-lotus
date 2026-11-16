import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as useCart, N as useUi, S as products, d as formatPrice, i as SiteFrame, j as trackEvent, m as lineBySlug, o as btnAccent, r as ProductCard, s as btnGhost, x as productBySlug } from "./chrome-D-Tozyhf.mjs";
import { a as Route$10 } from "./router-DKrMjPfk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog._slug-Cn7WWRX_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route$10.useParams();
	const product = productBySlug(slug);
	const add = useCart((state) => state.add);
	const open = useUi((state) => state.open);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [added, setAdded] = (0, import_react.useState)(false);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		title: "Не найдено",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold",
				children: "Позиции нет в каталоге"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/catalog",
				className: "mt-4 inline-block font-semibold text-primary",
				children: "Вернуться в каталог"
			})]
		})
	});
	const line = lineBySlug(product.line);
	const related = products.filter((item) => item.line === product.line && item.slug !== product.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: product.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.title,
				className: "rise aspect-[4/3] w-full rounded-lg object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise",
				style: { animationDelay: "60ms" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-accent",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-extrabold",
						children: product.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: product.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-3xl font-extrabold tabular-nums",
						children: formatPrice(product.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: product.stock
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: ["Количество", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									max: 99,
									value: qty,
									onChange: (event) => setQty(Math.max(1, Number(event.target.value) || 1)),
									className: "field mt-1 w-24"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btnAccent,
								onClick: () => {
									add(product.slug, qty);
									setAdded(true);
									trackEvent({ data: {
										kind: "cart",
										path: `/catalog/${product.slug}`,
										meta: product.slug
									} }).catch(() => void 0);
									window.setTimeout(() => setAdded(false), 1600);
								},
								children: added ? "В корзине" : "В корзину"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btnGhost,
								onClick: () => open("callback"),
								children: "Запросить счёт"
							})
						]
					}),
					line ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/lines/$slug",
						params: { slug: line.slug },
						className: "mt-4 inline-block text-sm font-semibold text-primary",
						children: [
							"Вся линейка «",
							line.name,
							"»"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "mt-6 w-full text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: product.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-fg/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-4 text-left font-medium text-muted",
								children: spec.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 font-semibold",
								children: spec.value
							})]
						}, spec.label)) })
					})
				]
			})]
		}), related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-extrabold",
				children: "Рядом в линейке"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-3",
				children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					slug: item.slug,
					title: item.title,
					summary: item.summary,
					price: formatPrice(item.price),
					image: item.image,
					stock: item.stock
				}, item.slug))
			})]
		}) : null]
	});
}
//#endregion
export { ProductPage as component };
