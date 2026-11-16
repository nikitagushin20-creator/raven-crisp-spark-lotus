import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteFrame, n as PageIntro, y as offices } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service.index-DYqoRXLV.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/service/warranty",
		title: "Гарантийный ремонт",
		text: "12 месяцев с отгрузки. Запчасти по гарантии везём за свой счёт."
	},
	{
		to: "/service/repair",
		title: "Негарантийный ремонт",
		text: "Смета до разборки. Срок и стоимость согласуем письменно."
	},
	{
		to: "/service/register",
		title: "Регистрация оборудования",
		text: "Чтобы гарантия считалась с пуска, а не с даты на складе."
	},
	{
		to: "/service/engineer",
		title: "Вопрос инженеру",
		text: "Подбор, ошибка контроллера, расходник — ответим по модели."
	}
];
function ServicePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Сервис",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "Сервис",
				title: "Ремонт и сопровождение, пока техника в работе",
				text: "Предпродажная проверка, пуск, гарантия и платный ремонт на одних и тех же постах. Не отправляем «на завод» то, что можем закрыть запчастью со склада."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/engineer.jpg",
					alt: "Инженер осматривает компрессор",
					className: "aspect-[3/2] w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Гарантия — 12 месяцев с даты отгрузки, если оборудование зарегистрировано и не вскрывалось на стороне. Откажем, если узел горел из-за сети, масло меняли «чем было» или ремонт уже начинали сами." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Негарантийный ремонт идёт по смете. Невостребованную технику храним 30 дней, дальше согласуем утилизацию или возврат за счёт заказчика." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Обучение оператора — короткое, на площадке: что смотреть каждую смену и чего не крутить." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-4 pb-4 sm:grid-cols-2",
				children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: "card-hover rounded-lg border border-fg/10 bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-extrabold",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.text
					})]
				}, item.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-extrabold",
					children: "Где принимаем"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: offices.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-fg/10 bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									office.city,
									" — ",
									office.role
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: office.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: office.hours
							})
						]
					}, office.city))
				})]
			})
		]
	});
}
//#endregion
export { ServicePage as component };
