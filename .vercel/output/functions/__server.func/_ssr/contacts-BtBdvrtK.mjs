import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, l as company, n as PageIntro, t as LeadForm, y as offices } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacts-BtBdvrtK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactsPage() {
	const [city, setCity] = (0, import_react.useState)(offices[0]?.city ?? "Москва");
	const office = offices.find((item) => item.city === city) ?? offices[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Контакты",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Контакты",
			title: "Офисы, склады и сервис",
			text: `Один телефон на все площадки: ${company.phone}. Письма — ${company.email}.`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3 lg:col-span-2",
				children: offices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCity(item.city),
					className: item.city === office?.city ? "w-full rounded-lg border border-primary bg-primary p-4 text-left text-on-primary" : "w-full rounded-lg border border-fg/10 bg-surface p-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold",
							children: [
								item.city,
								" · ",
								item.role
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: item.city === office?.city ? "mt-1 text-sm text-on-primary/80" : "mt-1 text-sm text-muted",
							children: item.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: item.city === office?.city ? "text-sm text-on-primary/80" : "text-sm text-muted",
							children: item.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold",
							children: company.phone
						})
					]
				}, item.city))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3",
				children: [office ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `Карта: ${office.city}`,
					src: office.map,
					className: "h-72 w-full rounded-lg border border-fg/10 bg-surface",
					loading: "lazy"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-lg border border-fg/10 bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-extrabold",
						children: "Написать в офис"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
							kind: "message",
							meta: office?.city ?? "",
							submitLabel: "Отправить",
							fields: [
								{
									name: "name",
									label: "Имя",
									required: true
								},
								{
									name: "phone",
									label: "Телефон",
									required: true,
									type: "tel"
								},
								{
									name: "text",
									label: "Сообщение",
									required: true,
									textarea: true
								}
							]
						})
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { ContactsPage as component };
