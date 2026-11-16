import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, n as PageIntro, t as LeadForm } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service.engineer-CtV5t6q0.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Вопрос инженеру",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Сервис",
			title: "Задать вопрос сервисному инженеру",
			text: "Напишите модель и что уже пробовали. Ответ — в рабочее время, обычно в тот же день."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-xl px-4 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				kind: "engineer",
				submitLabel: "Отправить вопрос",
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
						name: "model",
						label: "Модель, если есть"
					},
					{
						name: "text",
						label: "Вопрос",
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
