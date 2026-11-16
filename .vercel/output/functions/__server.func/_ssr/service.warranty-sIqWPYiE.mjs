import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as lines, i as SiteFrame, n as PageIntro, t as LeadForm } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service.warranty-sIqWPYiE.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Гарантийный ремонт",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Сервис",
			title: "Заявка на гарантийный ремонт",
			text: "Нужны модель, заводской номер и что именно случилось. Фото шильдика можно описать текстом — перезвоним и заберём файлы отдельно."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-xl px-4 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				kind: "warranty",
				submitLabel: "Отправить заявку",
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
						name: "city",
						label: "Город",
						required: true,
						options: [
							"Москва",
							"Новосибирск",
							"Екатеринбург",
							"Казань",
							"Краснодар",
							"Другой"
						]
					},
					{
						name: "line",
						label: "Линейка",
						required: true,
						options: lines.map((line) => line.name)
					},
					{
						name: "model",
						label: "Модель и заводской номер",
						required: true
					},
					{
						name: "text",
						label: "Неисправность",
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
