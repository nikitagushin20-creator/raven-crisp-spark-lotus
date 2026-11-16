import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as useCart, d as formatPrice, i as SiteFrame, j as trackEvent, k as saveLocalOrder, l as company, n as PageIntro, o as btnAccent, x as productBySlug } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-BjYZisUA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const items = useCart((state) => state.items);
	const setQty = useCart((state) => state.setQty);
	const remove = useCart((state) => state.remove);
	const clear = useCart((state) => state.clear);
	const [done, setDone] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const rows = items.map((item) => {
		const product = productBySlug(item.slug);
		return product ? {
			...item,
			product
		} : null;
	}).filter((row) => row !== null);
	const total = rows.reduce((sum, row) => sum + row.product.price * row.qty, 0);
	function onSubmit(event) {
		event.preventDefault();
		if (!rows.length) return;
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") ?? "").trim();
		const phone = String(form.get("phone") ?? "").trim();
		const city = String(form.get("city") ?? "").trim();
		if (!name || phone.replace(/\D/g, "").length < 10 || !city) {
			setError("Укажите имя, телефон и город");
			return;
		}
		const id = `ПС-${Date.now().toString().slice(-6)}`;
		saveLocalOrder({
			id,
			at: (/* @__PURE__ */ new Date()).toLocaleString("ru-RU"),
			city,
			name,
			phone,
			total,
			items: rows.map((row) => ({
				slug: row.product.slug,
				title: row.product.title,
				qty: row.qty,
				price: row.product.price
			}))
		});
		trackEvent({ data: {
			kind: "checkout",
			path: "/cart",
			meta: `${rows.length} поз.`
		} }).catch(() => void 0);
		clear();
		setError("");
		setDone(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Корзина",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Корзина",
			title: "Состав заказа",
			text: "Счёт выставим после проверки наличия. Заказ сохранится в кабинете на этом устройстве."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3",
				children: [rows.length === 0 && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-fg/10 bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: "Корзина пуста"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Выберите позицию в каталоге и нажмите «В корзину»."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							className: "btn mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-on-primary",
							children: "В каталог"
						})
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-lg border border-fg/10 bg-surface p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: row.product.image,
								alt: "",
								className: "size-20 rounded-md object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/catalog/$slug",
										params: { slug: row.product.slug },
										className: "font-bold",
										children: row.product.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: formatPrice(row.product.price)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: 1,
											value: row.qty,
											onChange: (event) => setQty(row.slug, Number(event.target.value) || 1),
											className: "field w-20",
											"aria-label": `Количество ${row.product.title}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "text-sm font-semibold text-accent",
											onClick: () => remove(row.slug),
											children: "Удалить"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold tabular-nums",
								children: formatPrice(row.product.price * row.qty)
							})
						]
					}, row.slug))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-fg/10 bg-surface p-5 lg:col-span-2",
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-extrabold",
						children: [
							"Заказ ",
							done,
							" принят"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Перезвоним с номера ",
							company.phone,
							". Копия лежит в личном кабинете этого браузера."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cabinet",
						className: `${btnAccent} mt-4`,
						children: "Открыть кабинет"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-extrabold tabular-nums",
							children: ["Итого ", formatPrice(total)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Имя", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								className: "field mt-1"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Телефон", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								type: "tel",
								className: "field mt-1"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Город доставки", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "city",
								className: "field mt-1"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Комментарий", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "note",
								rows: 3,
								className: "field mt-1"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-accent",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: btnAccent,
							disabled: !rows.length,
							children: "Оформить заказ"
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { CartPage as component };
