import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as presence, i as SiteFrame, n as PageIntro, t as LeadForm } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dealers-DuaHwzoY.js
var import_jsx_runtime = require_jsx_runtime();
function DealersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Дилерам",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Дилерам",
			title: "Склад, цены и обучение для тех, кто продаёт технику",
			text: "Дилеру отдаём прайс с защитой региона, остатки раз в день и инженера, который подключается на сложных подборах."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [[
					["Складской запас", "Компрессоры до 37 кВт, плиты и расходники держим в Москве и Новосибирске. Дилер забирает под клиента, не замораживая весь модельный ряд."],
					["Регион", "Не сажаем двух дилеров на один город без разговора. Заявку рассматриваем, если уже есть сервис или договор с местной мастерской."],
					["Обучение", "Раз в квартал — разбор новых моделей и типовых отказов. Можно приехать на пост или собрать смену у себя."]
				].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: text
					})]
				}, title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"Сейчас техника представлена в городах: ",
						presence.join(", "),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-fg/10 bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-extrabold",
					children: "Заявка дилера"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
						kind: "dealer",
						submitLabel: "Отправить заявку",
						fields: [
							{
								name: "company",
								label: "Компания",
								required: true
							},
							{
								name: "city",
								label: "Город",
								required: true
							},
							{
								name: "name",
								label: "Контакт",
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
								label: "Чем уже занимаетесь",
								required: true,
								textarea: true
							}
						]
					})
				})]
			})]
		})]
	});
}
//#endregion
export { DealersPage as component };
