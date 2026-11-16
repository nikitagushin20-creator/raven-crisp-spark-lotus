import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, n as PageIntro, t as LeadForm } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service.repair-D8kfml-G.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Негарантийный ремонт",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Сервис",
			title: "Заявка на негарантийный ремонт",
			text: "Смету пришлём до начала работ. Срок зависит от того, есть ли узел на складе."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-xl px-4 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				kind: "repair",
				submitLabel: "Запросить смету",
				fields: [
					{
						name: "name",
						label: "Контактное лицо",
						required: true
					},
					{
						name: "phone",
						label: "Телефон",
						required: true,
						type: "tel"
					},
					{
						name: "model",
						label: "Модель",
						required: true
					},
					{
						name: "text",
						label: "Что нужно сделать",
						required: true,
						textarea: true
					}
				]
			})
		})]
	});
}
//#endregion
export { Page as component };
