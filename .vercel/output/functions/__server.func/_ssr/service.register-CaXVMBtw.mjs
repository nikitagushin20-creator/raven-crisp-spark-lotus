import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, n as PageIntro, t as LeadForm } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service.register-CaXVMBtw.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Регистрация оборудования",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Сервис",
			title: "Регистрация оборудования",
			text: "Регистрация фиксирует дату ввода. Без неё гарантия считается от отгрузки со склада."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-xl px-4 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
				kind: "register",
				submitLabel: "Зарегистрировать",
				fields: [
					{
						name: "company",
						label: "Организация",
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
						name: "model",
						label: "Модель",
						required: true
					},
					{
						name: "serial",
						label: "Заводской номер",
						required: true
					},
					{
						name: "date",
						label: "Дата пуска",
						type: "date"
					}
				]
			})
		})]
	});
}
//#endregion
export { Page as component };
