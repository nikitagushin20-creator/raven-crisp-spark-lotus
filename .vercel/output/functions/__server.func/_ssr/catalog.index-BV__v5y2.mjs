import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as formatPrice, h as lines, i as SiteFrame, n as PageIntro, r as ProductCard, u as filterProducts } from "./chrome-D-Tozyhf.mjs";
import { o as Route$11 } from "./router-DKrMjPfk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog.index-BV__v5y2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CatalogPage() {
	const search = Route$11.useSearch();
	const navigate = useNavigate({ from: "/catalog/" });
	const q = search.q ?? "";
	const line = search.line ?? "";
	const [draft, setDraft] = (0, import_react.useState)(q);
	const list = filterProducts(q, line);
	function apply(next) {
		const clean = {};
		if (next.q) clean.q = next.q;
		if (next.line) clean.line = next.line;
		navigate({ search: clean });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Каталог",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Каталог",
			title: "Оборудование и расходники",
			text: "Цены — с основного склада. Наличие в карточке. Если позиции нет, напишем срок до подтверждения заказа."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-3 sm:flex-row",
					onSubmit: (event) => {
						event.preventDefault();
						apply({
							q: draft.trim(),
							line
						});
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft,
						onChange: (event) => setDraft(event.target.value),
						placeholder: "Модель, линейка или задача",
						className: "field sm:max-w-md"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn min-h-11 rounded-md bg-primary px-4 text-sm font-semibold text-on-primary",
						children: "Найти"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: !line,
						onClick: () => apply({
							q,
							line: void 0
						}),
						children: "Все"
					}), lines.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: line === item.slug,
						onClick: () => apply({
							q,
							line: item.slug
						}),
						children: item.name
					}, item.slug))]
				}),
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-muted",
					children: [
						"Ничего не нашли. Сбросьте фильтр или",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/service/engineer",
							className: "font-semibold text-primary",
							children: "спросите инженера"
						}),
						"."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: list.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						slug: product.slug,
						title: product.title,
						summary: product.summary,
						price: formatPrice(product.price),
						image: product.image,
						stock: product.stock
					}, product.slug))
				})
			]
		})]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: active ? "btn shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary" : "btn shrink-0 rounded-full border border-fg/15 bg-surface px-4 py-2 text-sm font-semibold",
		children
	});
}
//#endregion
export { CatalogPage as component };
