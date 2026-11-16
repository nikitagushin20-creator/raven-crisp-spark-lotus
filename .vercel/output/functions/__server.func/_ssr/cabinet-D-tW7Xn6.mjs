import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as readLocalOrders, E as readLocalLeads, d as formatPrice, f as kindLabels, i as SiteFrame, n as PageIntro } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cabinet-D-tW7Xn6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CabinetPage() {
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [leads, setLeads] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setOrders(readLocalOrders());
		setLeads(readLocalLeads());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Личный кабинет",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Кабинет",
			title: "Заказы и заявки на этом устройстве",
			text: "Кабинет хранит то, что вы отправили в этом браузере. Чтобы увидеть просмотры всего сайта, откройте админку."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-extrabold",
				children: "Заказы"
			}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Пока пусто.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						className: "font-semibold text-primary",
						children: "Перейти в каталог"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold",
							children: [
								order.id,
								" · ",
								formatPrice(order.total)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								order.at,
								" · ",
								order.city
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 text-sm",
							children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								item.title,
								" × ",
								item.qty
							] }, item.slug))
						})
					]
				}, order.id))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-extrabold",
				children: "Заявки"
			}), leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Заявки с форм появятся здесь после отправки."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: leads.map((lead, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold",
							children: kindLabels[lead.kind] ?? lead.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: lead.at
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-2 space-y-1 text-sm",
							children: Object.entries(lead.fields).map(([label, value]) => value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
								className: "inline text-muted",
								children: [label, ": "]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "inline",
								children: value
							})] }, label) : null)
						})
					]
				}, `${lead.at}-${index}`))
			})] })]
		})]
	});
}
//#endregion
export { CabinetPage as component };
