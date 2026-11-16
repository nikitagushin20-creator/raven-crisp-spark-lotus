import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { c as MapPin, i as Search, l as Mail, o as Phone, r as ShoppingCart, s as Menu, t as X, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-D-Tozyhf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var company = {
	legal: "ООО «Промсервис и обслуживание»",
	short: "Промсервис",
	phone: "+7 982 274-16-88",
	phoneHref: "tel:+79822741688",
	email: "info@promservis-obsl.ru",
	hours: "Пн–Пт, 9:00–18:00"
};
var lines = [
	{
		slug: "sever",
		name: "Север",
		mark: "Компрессоры",
		lead: "Винтовые и поршневые станции для цеха и стройплощадки.",
		text: "Линейка «Север» закрывает расход от небольшой мастерской до круглосуточной компрессорной. Подбираем давление, ресивер и схему включения под реальный график смен, а не по табличке из буклета.",
		image: "/media/compressor.jpg",
		alt: "Винтовой компрессор линейки Север"
	},
	{
		slug: "potok",
		name: "Поток",
		mark: "Подготовка воздуха",
		lead: "Осушители, фильтры и ресиверы, чтобы воздух не портил линию.",
		text: "Влага и масло в магистрали бьют по инструменту и покраске. «Поток» ставится после компрессора: осушение, фильтрация и запас в ресивере под пиковые включения.",
		image: "/media/dryer.jpg",
		alt: "Осушитель и фильтр линейки Поток"
	},
	{
		slug: "osnova",
		name: "Основа",
		mark: "Строительные машины",
		lead: "Виброплиты, затирка и нарезка швов для бетонных работ.",
		text: "Техника «Основа» рассчитана на ежедневную аренду и собственные бригады: понятный запуск, доступные расходники и сервис без ожидания «с завода».",
		image: "/media/construction.jpg",
		alt: "Строительное оборудование линейки Основа"
	},
	{
		slug: "rezec",
		name: "Резец",
		mark: "Металлообработка",
		lead: "Токарные, фрезерные и ленточнопильные станки для заготовительного участка.",
		text: "«Резец» — станки для цеха, где нужен предсказуемый рез и нормальная документация на русском, а не витринный образец без запчастей.",
		image: "/media/lathe.jpg",
		alt: "Металлорежущий станок линейки Резец"
	}
];
var products = [
	{
		slug: "sever-vk-22",
		line: "sever",
		category: "Винтовые компрессоры",
		title: "Север ВК-22",
		summary: "Винтовая станция 22 кВт для участка с постоянным расходом воздуха.",
		price: 486e3,
		stock: "На складе в Москве",
		image: "/media/compressor.jpg",
		specs: [
			{
				label: "Мощность",
				value: "22 кВт"
			},
			{
				label: "Производительность",
				value: "3,6 м³/мин"
			},
			{
				label: "Давление",
				value: "8 бар"
			},
			{
				label: "Ресивер",
				value: "500 л, опция"
			},
			{
				label: "Питание",
				value: "380 В"
			}
		]
	},
	{
		slug: "sever-vk-37",
		line: "sever",
		category: "Винтовые компрессоры",
		title: "Север ВК-37",
		summary: "Станция на две смены: запас по производительности и спокойный тепловой режим.",
		price: 612e3,
		stock: "На складе в Новосибирске",
		image: "/media/compressor.jpg",
		specs: [
			{
				label: "Мощность",
				value: "37 кВт"
			},
			{
				label: "Производительность",
				value: "6,2 м³/мин"
			},
			{
				label: "Давление",
				value: "8 / 10 бар"
			},
			{
				label: "Уровень шума",
				value: "72 дБ"
			},
			{
				label: "Питание",
				value: "380 В"
			}
		]
	},
	{
		slug: "sever-vk-75",
		line: "sever",
		category: "Винтовые компрессоры",
		title: "Север ВК-75",
		summary: "Компрессорная единица для цеха с центральной магистралью.",
		price: 118e4,
		stock: "Под заказ, 12–16 дней",
		image: "/media/project.jpg",
		specs: [
			{
				label: "Мощность",
				value: "75 кВт"
			},
			{
				label: "Производительность",
				value: "12,5 м³/мин"
			},
			{
				label: "Давление",
				value: "8 бар"
			},
			{
				label: "Охлаждение",
				value: "воздушное"
			},
			{
				label: "Питание",
				value: "380 В"
			}
		]
	},
	{
		slug: "sever-pk-4",
		line: "sever",
		category: "Поршневые компрессоры",
		title: "Север ПК-4",
		summary: "Поршневой компрессор для сервиса, гаража и небольшого поста.",
		price: 96400,
		stock: "На складе",
		image: "/media/compressor.jpg",
		specs: [
			{
				label: "Мощность",
				value: "4 кВт"
			},
			{
				label: "Производительность",
				value: "0,6 м³/мин"
			},
			{
				label: "Ресивер",
				value: "200 л"
			},
			{
				label: "Давление",
				value: "10 бар"
			},
			{
				label: "Питание",
				value: "380 В"
			}
		]
	},
	{
		slug: "potok-ov-40",
		line: "potok",
		category: "Осушители",
		title: "Поток ОВ-40",
		summary: "Рефрижераторный осушитель под расход до 4 м³/мин.",
		price: 214e3,
		stock: "На складе",
		image: "/media/dryer.jpg",
		specs: [
			{
				label: "Пропускная способность",
				value: "4,0 м³/мин"
			},
			{
				label: "Точка росы",
				value: "+3 °C"
			},
			{
				label: "Давление",
				value: "до 16 бар"
			},
			{
				label: "Хладагент",
				value: "R134a"
			},
			{
				label: "Питание",
				value: "220 В"
			}
		]
	},
	{
		slug: "potok-fm-25",
		line: "potok",
		category: "Фильтры",
		title: "Поток ФМ-25",
		summary: "Магистральный фильтр тонкой очистки перед инструментом и покраской.",
		price: 28900,
		stock: "На складе",
		image: "/media/dryer.jpg",
		specs: [
			{
				label: "Присоединение",
				value: "G1"
			},
			{
				label: "Расход",
				value: "2,5 м³/мин"
			},
			{
				label: "Степень очистки",
				value: "0,01 мкм"
			},
			{
				label: "Остаток масла",
				value: "0,01 мг/м³"
			},
			{
				label: "Корпус",
				value: "алюминий"
			}
		]
	},
	{
		slug: "potok-r-500",
		line: "potok",
		category: "Ресиверы",
		title: "Поток Р-500",
		summary: "Воздухосборник 500 литров с паспортом и площадкой под обвязку.",
		price: 74500,
		stock: "На складе",
		image: "/media/warehouse.jpg",
		specs: [
			{
				label: "Объём",
				value: "500 л"
			},
			{
				label: "Давление",
				value: "10 бар"
			},
			{
				label: "Исполнение",
				value: "вертикальное"
			},
			{
				label: "Документы",
				value: "паспорт сосуда"
			},
			{
				label: "Покрытие",
				value: "грунт + эмаль"
			}
		]
	},
	{
		slug: "osnova-vp-90",
		line: "osnova",
		category: "Уплотнение",
		title: "Основа ВП-90",
		summary: "Виброплита 90 кг для оснований, отмостки и ямочного ремонта.",
		price: 118e3,
		stock: "На складе",
		image: "/media/construction.jpg",
		specs: [
			{
				label: "Масса",
				value: "90 кг"
			},
			{
				label: "Центробежная сила",
				value: "13 кН"
			},
			{
				label: "Плита",
				value: "540 × 420 мм"
			},
			{
				label: "Двигатель",
				value: "бензин"
			},
			{
				label: "Бак",
				value: "водяной, опция"
			}
		]
	},
	{
		slug: "osnova-zm-900",
		line: "osnova",
		category: "Бетон",
		title: "Основа ЗМ-900",
		summary: "Затирочная машина с диском 900 мм для промышленных полов.",
		price: 164e3,
		stock: "На складе в Краснодаре",
		image: "/media/construction.jpg",
		specs: [
			{
				label: "Диаметр",
				value: "900 мм"
			},
			{
				label: "Двигатель",
				value: "бензин, Honda-класс"
			},
			{
				label: "Оснастка",
				value: "диск и лопасти"
			},
			{
				label: "Ручка",
				value: "складывается"
			},
			{
				label: "Масса",
				value: "78 кг"
			}
		]
	},
	{
		slug: "osnova-shn-180",
		line: "osnova",
		category: "Бетон",
		title: "Основа ШН-180",
		summary: "Швонарезчик для деформационных швов в свежем и зрелом бетоне.",
		price: 142e3,
		stock: "Под заказ, 7–10 дней",
		image: "/media/construction.jpg",
		specs: [
			{
				label: "Диск",
				value: "до 350 мм"
			},
			{
				label: "Глубина",
				value: "до 120 мм"
			},
			{
				label: "Двигатель",
				value: "бензин"
			},
			{
				label: "Бак для воды",
				value: "есть"
			},
			{
				label: "Масса",
				value: "72 кг"
			}
		]
	},
	{
		slug: "rezec-ts-320",
		line: "rezec",
		category: "Токарные станки",
		title: "Резец ТС-320",
		summary: "Токарно-винторезный станок для ремонтного и заготовительного цеха.",
		price: 89e4,
		stock: "Под заказ, 20 дней",
		image: "/media/lathe.jpg",
		specs: [
			{
				label: "Диаметр над станиной",
				value: "320 мм"
			},
			{
				label: "РМЦ",
				value: "1000 мм"
			},
			{
				label: "Отверстие шпинделя",
				value: "52 мм"
			},
			{
				label: "Мощность",
				value: "5,5 кВт"
			},
			{
				label: "ЧПУ",
				value: "ручное управление"
			}
		]
	},
	{
		slug: "rezec-lp-280",
		line: "rezec",
		category: "Ленточные пилы",
		title: "Резец ЛП-280",
		summary: "Ленточнопильный станок по металлу для прутка и профиля.",
		price: 64e4,
		stock: "На складе",
		image: "/media/lathe.jpg",
		specs: [
			{
				label: "Рез круга",
				value: "280 мм"
			},
			{
				label: "Поворот рамы",
				value: "0–60°"
			},
			{
				label: "Подача",
				value: "гидроразгрузка"
			},
			{
				label: "Полотно",
				value: "27 × 0,9 мм"
			},
			{
				label: "СОЖ",
				value: "в комплекте"
			}
		]
	},
	{
		slug: "rezec-fs-250",
		line: "rezec",
		category: "Фрезерные станки",
		title: "Резец ФС-250",
		summary: "Универсальный фрезерный станок для оснастки и мелкосерийных деталей.",
		price: 72e4,
		stock: "Под заказ, 18 дней",
		image: "/media/lathe.jpg",
		specs: [
			{
				label: "Стол",
				value: "1000 × 250 мм"
			},
			{
				label: "Ход X/Y/Z",
				value: "620 / 220 / 380 мм"
			},
			{
				label: "Шпиндель",
				value: "ISO40"
			},
			{
				label: "Мощность",
				value: "4 кВт"
			},
			{
				label: "Подачи",
				value: "механические"
			}
		]
	},
	{
		slug: "sever-fe-22",
		line: "sever",
		category: "Запчасти",
		title: "Фильтр-элемент ФЭ-22",
		summary: "Сменный элемент сепаратора для станций ВК-22 и ВК-37.",
		price: 4800,
		stock: "На складе",
		image: "/media/dryer.jpg",
		specs: [
			{
				label: "Совместимость",
				value: "ВК-22, ВК-37"
			},
			{
				label: "Ресурс",
				value: "2000 ч"
			},
			{
				label: "Упаковка",
				value: "1 шт."
			},
			{
				label: "Тип",
				value: "сепаратор"
			},
			{
				label: "Отгрузка",
				value: "в день заказа"
			}
		]
	},
	{
		slug: "osnova-rp-13",
		line: "osnova",
		category: "Запчасти",
		title: "Ремень привода РП-13",
		summary: "Клиновой ремень для виброплит ВП-90.",
		price: 2150,
		stock: "На складе",
		image: "/media/construction.jpg",
		specs: [
			{
				label: "Совместимость",
				value: "ВП-90"
			},
			{
				label: "Профиль",
				value: "A"
			},
			{
				label: "Упаковка",
				value: "1 шт."
			},
			{
				label: "Материал",
				value: "резина, корд"
			},
			{
				label: "Отгрузка",
				value: "в день заказа"
			}
		]
	},
	{
		slug: "sever-oil-20",
		line: "sever",
		category: "Расходники",
		title: "Масло компрессорное, 20 л",
		summary: "Масло для винтовых станций «Север», канистра 20 литров.",
		price: 6900,
		stock: "На складе",
		image: "/media/warehouse.jpg",
		specs: [
			{
				label: "Объём",
				value: "20 л"
			},
			{
				label: "Назначение",
				value: "винтовой блок"
			},
			{
				label: "Интервал",
				value: "2000–3000 ч"
			},
			{
				label: "Тара",
				value: "канистра"
			},
			{
				label: "Документы",
				value: "паспорт качества"
			}
		]
	}
];
var projects = [
	{
		slug: "kazan-food",
		title: "Компрессорная для пищевого цеха",
		city: "Казань",
		year: "2025",
		image: "/media/project.jpg",
		task: "Цеху упаковки нужен был сухой воздух без масла на линии фасовки и запас на ночную смену.",
		solution: "Поставили Север ВК-37, осушитель Поток ОВ-40 и ресивер 500 л. Обвязку собрали на месте, точку росы проверили на рабочем расходе.",
		result: "Линия ушла с баллонов. Простой из-за конденсата на клапанах за первый квартал не фиксировали."
	},
	{
		slug: "krasnodar-road",
		title: "Парк плит для дорожной бригады",
		city: "Краснодар",
		year: "2025",
		image: "/media/construction.jpg",
		task: "Подрядчику нужны были одинаковые виброплиты, чтобы механик держал один комплект ремней и фильтров.",
		solution: "Отгрузили шесть Основа ВП-90 со склада и заложили расходники на сезон.",
		result: "Бригада закрыла ямочный ремонт без аренды. Две плиты прошли сезон без замены двигателя."
	},
	{
		slug: "ekb-saw",
		title: "Участок резки металлопроката",
		city: "Екатеринбург",
		year: "2024",
		image: "/media/lathe.jpg",
		task: "Склад резал круг болгаркой и терял время на торцовке перед отгрузкой.",
		solution: "Установили Резец ЛП-280, настроили СОЖ и обучили двух операторов за одну смену.",
		result: "Рез партии ушёл в отдельный пост. Геометрия торца перестала быть причиной возвратов."
	},
	{
		slug: "nsk-paint",
		title: "Осушение на линии покраски",
		city: "Новосибирск",
		year: "2024",
		image: "/media/warehouse.jpg",
		task: "На окраске зимой всплывала «сыпь» — воздух из ресивера шёл влажный.",
		solution: "Врезали Поток ОВ-40 и фильтр ФМ-25 сразу после ресивера, слили конденсат в отдельную ёмкость.",
		result: "Дефект по влаге ушёл. Малярка перестала греть цех «на всякий случай» перед сменой."
	}
];
var news = [
	{
		slug: "service-kazan",
		date: "12 ноября 2026",
		title: "В Казани открыли сервисный пост",
		image: "/media/engineer.jpg",
		lead: "Гарантийный и платный ремонт станций «Север» теперь принимают на площадке в Казани, без отправки в Москву.",
		body: [
			"Пост принимает компрессоры и оборудование подготовки воздуха. Диагностика — в день обращения, если узел уже на площадке до 14:00.",
			"Негарантийный ремонт согласуем сметой до разборки. Запчасти, которые есть на местном складе, ставим сразу. Остальное везём с московского склада.",
			"Записаться можно заявкой на сайте или по телефону +7 982 274-16-88. Модель и заводской номер лучше прислать сразу — так быстрее смотрим наличие."
		]
	},
	{
		slug: "ural-batch",
		date: "28 октября 2026",
		title: "Партия ВК-37 ушла на Урал",
		image: "/media/compressor.jpg",
		lead: "Четыре станции Север ВК-37 отгрузили со склада в Новосибирске на предприятия Екатеринбурга и Тюмени.",
		body: [
			"Комплект собрали с осушителями «Поток» и комплектом фильтров на первый год. Пусконаладку сделают инженеры екатеринбургского поста.",
			"Для заказчиков из УрФО срок по наличию сейчас 2–4 дня до двери терминала, если станция есть на новосибирском складе.",
			"Актуальные остатки смотрите в карточке товара. Если стоит пометка «под заказ», назовём срок после проверки у сборки."
		]
	},
	{
		slug: "holiday-hours",
		date: "4 октября 2026",
		title: "Как работаем в праздничные дни",
		image: "/media/warehouse.jpg",
		lead: "Склады отгружают в последний рабочий день до праздников до 15:00. Сервисные посты — по записи.",
		body: [
			"Заявки с сайта разбираем и в выходные, но выезд инженера и отгрузку со склада ставим на ближайший будний день.",
			"Срочные запчасти, которые уже лежат на складе, можно забрать самовывозом в пятницу до обеда — предупредите кладовщика заранее.",
			"Телефон приёмной не меняется: +7 982 274-16-88."
		]
	},
	{
		slug: "how-dryer",
		date: "18 сентября 2026",
		title: "Как выбрать осушитель под расход",
		image: "/media/dryer.jpg",
		lead: "Коротко: берите осушитель не по шильдику компрессора, а по летнему расходу с запасом на точку росы.",
		body: [
			"Если компрессор выдаёт 3,6 м³/мин, а посты включаются пачками, пик легко уходит за 4. Осушитель «впритык» летом поднимет точку росы, и влага снова окажется в магистрали.",
			"Для покраски и пищевки закладываем рефрижераторный осушитель с запасом 15–20% и фильтр после него. Для пескоструя иногда хватает циклонного отделения и слива ресивера — это считаем отдельно.",
			"Пришлите расход, давление и что стоит на конце линии. Инженер ответит, нужен ли ОВ-40 или хватит меньшего аппарата."
		]
	},
	{
		slug: "operator-school",
		date: "2 сентября 2026",
		title: "Набор на обучение операторов",
		image: "/media/engineer.jpg",
		lead: "В ноябре проводим однодневное занятие: запуск винтовой станции, ежесменный осмотр и то, что нельзя крутить самим.",
		body: [
			"Занятие для тех, кто уже купил «Север» или только ставит станцию. Разбираем уровни, температуру, когда менять масло и как читать аварии на контроллере.",
			"Группа до восьми человек, площадка в Москве. Для других городов соберём выезд, если наберётся смена от одного заказчика.",
			"Запись — через форму вопроса инженеру. В теме напишите «обучение» и город."
		]
	}
];
var offices = [
	{
		city: "Москва",
		role: "Офис и склад",
		address: "ул. Электрозаводская, 21, стр. 4, офис 306",
		hours: "Пн–Пт 9:00–18:00",
		map: "https://www.openstreetmap.org/export/embed.html?bbox=37.66%2C55.77%2C37.75%2C55.81&layer=mapnik&marker=55.786%2C37.704"
	},
	{
		city: "Новосибирск",
		role: "Склад и сервис",
		address: "ул. Станционная, 62",
		hours: "Пн–Пт 9:00–17:30",
		map: "https://www.openstreetmap.org/export/embed.html?bbox=82.82%2C54.98%2C82.98%2C55.08&layer=mapnik&marker=55.03%2C82.92"
	},
	{
		city: "Екатеринбург",
		role: "Сервисный пост",
		address: "ул. Машиностроителей, 19",
		hours: "Пн–Пт 9:00–18:00",
		map: "https://www.openstreetmap.org/export/embed.html?bbox=60.55%2C56.82%2C60.68%2C56.88&layer=mapnik&marker=56.851%2C60.612"
	},
	{
		city: "Казань",
		role: "Офис и сервис",
		address: "ул. Аделя Кутуя, 151",
		hours: "Пн–Пт 9:00–17:30",
		map: "https://www.openstreetmap.org/export/embed.html?bbox=49.05%2C55.75%2C49.2%2C55.84&layer=mapnik&marker=55.788%2C49.122"
	},
	{
		city: "Краснодар",
		role: "Склад строительной техники",
		address: "ул. Уральская, 98",
		hours: "Пн–Пт 9:00–17:30",
		map: "https://www.openstreetmap.org/export/embed.html?bbox=38.95%2C45.02%2C39.08%2C45.08&layer=mapnik&marker=45.044%2C39.0"
	}
];
var presence = [
	"Москва",
	"Новосибирск",
	"Екатеринбург",
	"Казань",
	"Краснодар",
	"Самара",
	"Воронеж",
	"Тюмень",
	"Иркутск",
	"Хабаровск"
];
var stats = [
	{
		value: "12 лет",
		label: "Подбираем и обслуживаем технику с 2014 года"
	},
	{
		value: "5 постов",
		label: "Сервис в Москве, Новосибирске, Екатеринбурге, Казани и Краснодаре"
	},
	{
		value: "3 400",
		label: "Действующих заказчиков в России и ближнем зарубежье"
	},
	{
		value: "42 000",
		label: "Единиц оборудования и комплектов запчастей отгружено"
	},
	{
		value: "6 200 м²",
		label: "Склады, с которых уходит наличие, а не «уточним»"
	},
	{
		value: "4 линейки",
		label: "Север, Поток, Основа и Резец — со своими запчастями"
	}
];
var reviews = [
	{
		company: "Цех фасовки, Казань",
		text: "Станцию и осушитель поставили одним комплектом. На пуске инженер остался, пока не увидели точку росы на рабочем расходе, а не на холостом."
	},
	{
		company: "Дорожная бригада, Краснодар",
		text: "Плиты одинаковые, ремни на складе в городе. Для сезона это важнее, чем ещё одна неизвестная модель в прайсе."
	},
	{
		company: "Склад металла, Екатеринбург",
		text: "Пилу запустили за день. Оператор, который раньше резал кругом, после занятия сам меняет полотно и доливает СОЖ."
	}
];
var kindLabels = {
	callback: "Обратный звонок",
	message: "Сообщение",
	review: "Отзыв",
	warranty: "Гарантийный ремонт",
	repair: "Негарантийный ремонт",
	register: "Регистрация оборудования",
	engineer: "Вопрос инженеру",
	dealer: "Заявка дилера",
	checkout: "Оформление заказа",
	cart: "В корзину"
};
function formatPrice(value) {
	return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}
function lineBySlug(slug) {
	return lines.find((line) => line.slug === slug);
}
function productBySlug(slug) {
	return products.find((product) => product.slug === slug);
}
function productsByLine(slug) {
	return products.filter((product) => product.line === slug);
}
function filterProducts(query, line) {
	const q = query.trim().toLowerCase();
	return products.filter((product) => {
		if (line && product.line !== line) return false;
		if (!q) return true;
		return `${product.title} ${product.summary} ${product.category} ${product.slug}`.toLowerCase().includes(q);
	});
}
function projectBySlug(slug) {
	return projects.find((project) => project.slug === slug);
}
function newsBySlug(slug) {
	return news.find((item) => item.slug === slug);
}
var useCart = create()(persist((set) => ({
	items: [],
	add: (slug, qty = 1) => set((state) => {
		if (!state.items.find((item) => item.slug === slug)) return { items: [...state.items, {
			slug,
			qty
		}] };
		return { items: state.items.map((item) => item.slug === slug ? {
			...item,
			qty: item.qty + qty
		} : item) };
	}),
	setQty: (slug, qty) => set((state) => ({ items: qty <= 0 ? state.items.filter((item) => item.slug !== slug) : state.items.map((item) => item.slug === slug ? {
		...item,
		qty
	} : item) })),
	remove: (slug) => set((state) => ({ items: state.items.filter((item) => item.slug !== slug) })),
	clear: () => set({ items: [] })
}), { name: "pso-cart" }));
function saveLocalLead(lead) {
	const current = readLocalLeads();
	current.unshift(lead);
	localStorage.setItem("pso-leads", JSON.stringify(current.slice(0, 40)));
}
function readLocalLeads() {
	try {
		const raw = localStorage.getItem("pso-leads");
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveLocalOrder(order) {
	const current = readLocalOrders();
	current.unshift(order);
	localStorage.setItem("pso-orders", JSON.stringify(current.slice(0, 30)));
}
function readLocalOrders() {
	try {
		const raw = localStorage.getItem("pso-orders");
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var KINDS = /* @__PURE__ */ new Set([
	"callback",
	"message",
	"review",
	"warranty",
	"repair",
	"register",
	"engineer",
	"dealer",
	"checkout",
	"cart"
]);
function asText(value, max) {
	return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}
var trackView = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	const path = asText(raw?.path, 180);
	if (!path.startsWith("/") || path.includes("..")) throw new Error("bad path");
	return {
		path,
		title: asText(raw?.title, 140)
	};
}).handler(createSsrRpc("55352ee1ba928a18b266cec0d3c36d86ccc0926d71b2713ebac589c846bd4f63"));
var trackEvent = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	const kind = asText(raw?.kind, 32);
	if (!KINDS.has(kind)) throw new Error("bad kind");
	const path = asText(raw?.path, 180);
	return {
		kind,
		path: path.startsWith("/") ? path : "/",
		meta: asText(raw?.meta, 80)
	};
}).handler(createSsrRpc("32eea4a95a07bba56c72f76a019798119c583bba5f2cb2834f251d4b6b0a0c57"));
var adminLogin = createServerFn({ method: "POST" }).validator((input) => {
	const raw = input;
	return {
		login: asText(raw?.login, 40),
		password: String(raw?.password ?? "").slice(0, 80)
	};
}).handler(createSsrRpc("869cca4910765eb11310597b6210d144ee1923ce92dca0e7687169e73510ccd8"));
var loadStats = createServerFn({ method: "POST" }).validator((input) => {
	const token = asText(input?.token, 80);
	if (token.length < 20) throw new Error("unauthorized");
	return { token };
}).handler(createSsrRpc("b4c6f618d42fc0c03e2c883499c992b90879af4b02b3692fc74c124d5a2514a4"));
var useUi = create((set) => ({
	modal: null,
	open: (modal) => set({ modal }),
	close: () => set({ modal: null })
}));
var btn = "btn inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold";
var btnAccent = `${btn} bg-accent text-on-accent`;
var btnPrimary = `${btn} bg-primary text-on-primary`;
var btnGhost = `${btn} border border-fg/15 bg-surface text-fg`;
function SiteFrame({ title, children }) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const modal = useUi((state) => state.modal);
	(0, import_react.useEffect)(() => {
		document.title = title ? `${title} — ${company.short}` : company.legal;
	}, [title]);
	(0, import_react.useEffect)(() => {
		const key = `pso-view:${path}`;
		const prev = Number(sessionStorage.getItem(key) || 0);
		const now = Date.now();
		if (now - prev < 2500) return;
		sessionStorage.setItem(key, String(now));
		trackView({ data: {
			path,
			title
		} }).catch(() => void 0);
	}, [path, title]);
	(0, import_react.useEffect)(() => {
		if (!modal) return;
		const onKey = (event) => {
			if (event.key === "Escape") useUi.getState().close();
		};
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [modal]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-24 lg:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modals, {})
		]
	});
}
function Header() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const open = useUi((state) => state.open);
	const menu = useUi((state) => state.modal) === "menu";
	const close = useUi((state) => state.close);
	const items = useCart((state) => state.items);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const count = items.reduce((sum, item) => sum + item.qty, 0);
	(0, import_react.useEffect)(() => setReady(true), []);
	(0, import_react.useEffect)(() => close(), [path, close]);
	function onSearch(event) {
		event.preventDefault();
		const q = query.trim();
		window.location.assign(q ? `/catalog?q=${encodeURIComponent(q)}` : "/catalog");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-fg/10 bg-surface/95 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-b border-fg/10 bg-primary text-on-primary lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Поставка и обслуживание промышленного оборудования" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.hours }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "inline-flex items-center gap-2 font-semibold",
							href: company.phoneHref,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phone]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 shrink-0 place-items-center rounded-md bg-primary text-sm font-extrabold tracking-wide text-on-primary",
							children: "ПС"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-base font-extrabold tracking-wide",
								children: "ПРОМСЕРВИС"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-xs text-muted",
								children: "и обслуживание"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: onSearch,
						className: "mx-auto hidden max-w-sm flex-1 lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Поиск по каталогу"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Найти станок или компрессор",
									className: "field pl-10"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${btnGhost} hidden sm:inline-flex`,
								onClick: () => open("callback"),
								children: "Заказать звонок"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: `${btnGhost} relative px-3`,
								"aria-label": "Корзина",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "size-5" }), ready && count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-bold text-on-accent",
									children: count
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${btnGhost} px-3 lg:hidden`,
								"aria-label": menu ? "Закрыть меню" : "Открыть меню",
								onClick: () => menu ? close() : open("menu"),
								children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto hidden max-w-6xl items-center gap-1 px-4 pb-3 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drop, {
						label: "Каталог",
						active: path.startsWith("/catalog") || path.startsWith("/lines"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							className: "block rounded-md px-3 py-2 hover:bg-bg",
							children: "Весь каталог"
						}), lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/lines/$slug",
							params: { slug: line.slug },
							className: "block rounded-md px-3 py-2 hover:bg-bg",
							children: [
								line.mark,
								": ",
								line.name
							]
						}, line.slug))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drop, {
						label: "Сервис",
						active: path.startsWith("/service"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/service",
								className: "block rounded-md px-3 py-2 hover:bg-bg",
								children: "О сервисе"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/service/warranty",
								className: "block rounded-md px-3 py-2 hover:bg-bg",
								children: "Гарантийный ремонт"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/service/repair",
								className: "block rounded-md px-3 py-2 hover:bg-bg",
								children: "Негарантийный ремонт"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/service/register",
								className: "block rounded-md px-3 py-2 hover:bg-bg",
								children: "Регистрация оборудования"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/service/engineer",
								className: "block rounded-md px-3 py-2 hover:bg-bg",
								children: "Вопрос инженеру"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/dealers",
						active: path.startsWith("/dealers"),
						children: "Дилерам"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/projects",
						active: path.startsWith("/projects"),
						children: "Проекты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/news",
						active: path.startsWith("/news"),
						children: "Новости"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/contacts",
						active: path.startsWith("/contacts"),
						children: "Контакты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: "/cabinet",
						active: path.startsWith("/cabinet"),
						children: "Кабинет"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, { open: menu })
		]
	});
}
function NavLink({ to, active, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn("rounded-md px-3 py-2 text-sm font-semibold transition-colors", active ? "bg-primary text-on-primary" : "hover:bg-bg"),
		children
	});
}
function Drop({ label, active, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: cn("inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold", active ? "bg-primary text-on-primary" : "hover:bg-bg"),
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "invisible absolute top-full left-0 z-20 min-w-64 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md border border-fg/10 bg-surface p-2 shadow-lg",
				children
			})
		})]
	});
}
function MobileMenu({ open }) {
	const close = useUi((state) => state.close);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-40 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Закрыть меню",
			className: cn("absolute inset-0 bg-fg/40 transition-opacity", open ? "opacity-100" : "opacity-0"),
			onClick: close
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("absolute top-0 right-0 flex h-full w-[min(100%,22rem)] flex-col gap-1 overflow-y-auto bg-surface p-4 shadow-xl transition-transform duration-200 ease-out", open ? "translate-x-0" : "translate-x-full"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-semibold text-muted",
					children: "Разделы"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/catalog",
					className: "rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Каталог"
				}),
				lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/lines/$slug",
					params: { slug: line.slug },
					className: "rounded-md px-3 py-2 text-sm hover:bg-bg",
					onClick: close,
					children: [
						line.name,
						" — ",
						line.mark.toLowerCase()
					]
				}, line.slug)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/service",
					className: "mt-2 rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Сервис"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/service/warranty",
					className: "rounded-md px-3 py-2 text-sm hover:bg-bg",
					onClick: close,
					children: "Гарантийный ремонт"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/service/repair",
					className: "rounded-md px-3 py-2 text-sm hover:bg-bg",
					onClick: close,
					children: "Негарантийный ремонт"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/service/register",
					className: "rounded-md px-3 py-2 text-sm hover:bg-bg",
					onClick: close,
					children: "Регистрация оборудования"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/service/engineer",
					className: "rounded-md px-3 py-2 text-sm hover:bg-bg",
					onClick: close,
					children: "Вопрос инженеру"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dealers",
					className: "rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Дилерам"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					className: "rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Проекты"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					className: "rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Новости"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contacts",
					className: "rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Контакты"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/cabinet",
					className: "rounded-md px-3 py-3 font-semibold hover:bg-bg",
					onClick: close,
					children: "Личный кабинет"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "rounded-md px-3 py-3 text-sm text-muted hover:bg-bg",
					onClick: close,
					children: "Админка"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: company.phoneHref,
					className: `${btnAccent} mt-3`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phone]
				})
			]
		})]
	});
}
function MobileBar() {
	const open = useUi((state) => state.open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-fg/10 bg-surface p-3 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: company.phoneHref,
			className: `${btnPrimary} flex-1`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Позвонить"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `${btnAccent} flex-1`,
			onClick: () => open("callback"),
			children: "Звонок"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 border-t border-fg/10 bg-primary text-on-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-extrabold tracking-wide",
						children: "ПРОМСЕРВИС"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-on-primary/80",
						children: company.legal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-on-primary/80",
						children: "Компрессоры, подготовка воздуха, строительные машины и металлообработка. Подбор, склад, пуск и ремонт."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Каталог"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-on-primary/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						className: "hover:text-on-primary",
						children: "Все позиции"
					}) }), lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/lines/$slug",
						params: { slug: line.slug },
						className: "hover:text-on-primary",
						children: line.name
					}) }, line.slug))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Компания"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-on-primary/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/service",
							className: "hover:text-on-primary",
							children: "Сервис"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dealers",
							className: "hover:text-on-primary",
							children: "Дилерам"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "hover:text-on-primary",
							children: "Проекты"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/news",
							className: "hover:text-on-primary",
							children: "Новости"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacts",
							className: "hover:text-on-primary",
							children: "Контакты"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "hover:text-on-primary",
							children: "Статистика"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: "Связь"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mt-3 flex items-center gap-2 text-sm font-semibold",
						href: company.phoneHref,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), company.phone]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mt-2 flex items-center gap-2 text-sm text-on-primary/80",
						href: `mailto:${company.email}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), company.email]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex items-start gap-2 text-sm text-on-primary/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0" }), "Москва, Новосибирск, Екатеринбург, Казань, Краснодар"]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-on-primary/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-on-primary/70",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legal,
					". Телефон приёмной ",
					company.phone,
					"."
				]
			})
		})]
	});
}
function Modals() {
	const modal = useUi((state) => state.modal);
	const close = useUi((state) => state.close);
	if (!modal || modal === "menu") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 grid place-items-end p-0 sm:place-items-center sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Закрыть",
			className: "absolute inset-0 bg-fg/50",
			onClick: close
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "dialog-title",
			className: "rise relative max-h-[92vh] w-full overflow-y-auto rounded-t-lg bg-surface p-5 shadow-xl sm:max-w-lg sm:rounded-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "dialog-title",
						className: "text-xl font-extrabold",
						children: {
							callback: "Заказать звонок",
							message: "Написать сообщение",
							review: "Оставить отзыв",
							video: "Площадка и компрессорная",
							office: "Ближайший офис"
						}[modal]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${btnGhost} px-3`,
						onClick: close,
						"aria-label": "Закрыть окно",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				modal === "callback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					kind: "callback",
					meta: "modal",
					submitLabel: "Жду звонка",
					fields: [{
						name: "name",
						label: "Имя",
						required: true
					}, {
						name: "phone",
						label: "Телефон",
						required: true,
						type: "tel"
					}]
				}) : null,
				modal === "message" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					kind: "message",
					meta: "modal",
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
				}) : null,
				modal === "review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
					kind: "review",
					meta: "modal",
					submitLabel: "Отправить отзыв",
					fields: [
						{
							name: "name",
							label: "Имя",
							required: true
						},
						{
							name: "company",
							label: "Компания"
						},
						{
							name: "text",
							label: "Отзыв",
							required: true,
							textarea: true
						}
					]
				}) : null,
				modal === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "w-full rounded-md bg-fg",
					controls: true,
					playsInline: true,
					poster: "/media/hero.jpg",
					src: "/media/plant.mp4"
				}) : null,
				modal === "office" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeList, {}) : null
			]
		})]
	});
}
function OfficeList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3",
		children: offices.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-md border border-fg/10 p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold",
					children: [
						office.city,
						" · ",
						office.role
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: office.address
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: office.hours
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-1 inline-block text-sm font-semibold text-primary",
					href: company.phoneHref,
					children: company.phone
				})
			]
		}, office.city))
	});
}
function LeadForm({ kind, meta, fields, submitLabel }) {
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const path = useRouterState({ select: (state) => state.location.pathname });
	function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const fieldsOut = {};
		for (const field of fields) {
			const value = String(form.get(field.name) ?? "").trim();
			if (field.required && !value) {
				setError(`Заполните поле «${field.label}»`);
				return;
			}
			if (field.name === "phone" && value.replace(/\D/g, "").length < 10) {
				setError("Укажите телефон полностью");
				return;
			}
			fieldsOut[field.label] = value;
		}
		setError("");
		saveLocalLead({
			kind,
			at: (/* @__PURE__ */ new Date()).toLocaleString("ru-RU"),
			fields: fieldsOut
		});
		trackEvent({ data: {
			kind,
			path,
			meta: meta ?? ""
		} }).catch(() => void 0);
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise rounded-md bg-bg p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: "Заявка принята"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [
				"Перезвоним на ",
				company.phone,
				" в рабочее время. Если вопрос срочный — наберите этот номер сами."
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-3",
		children: [
			fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm font-medium",
				children: [
					field.label,
					field.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: " *"
					}) : null,
					field.textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: field.name,
						rows: 4,
						className: "field mt-1"
					}) : field.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: field.name,
						className: "field mt-1",
						defaultValue: "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Выберите"
						}), field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: option,
							children: option
						}, option))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: field.name,
						type: field.type ?? "text",
						className: "field mt-1"
					})
				]
			}, field.name)),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-accent",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: btnAccent,
				children: submitLabel
			})
		]
	});
}
function PageIntro({ kicker, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-fg/10 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rise mx-auto max-w-6xl px-4 py-10",
			children: [
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-wide text-accent uppercase",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl",
					children: title
				}),
				text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-base text-muted",
					children: text
				}) : null
			]
		})
	});
}
function ProductCard({ slug, title, summary, price, image, stock }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/catalog/$slug",
		params: { slug },
		className: "card-hover flex h-full flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: title,
			className: "aspect-[4/3] w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-bold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 flex-1 text-sm text-muted",
					children: summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: stock
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-lg font-extrabold",
					children: price
				})
			]
		})]
	});
}
function kindTitle(kind) {
	return kindLabels[kind] ?? kind;
}
//#endregion
export { stats as A, productsByLine as C, readLocalOrders as D, readLocalLeads as E, useCart as M, useUi as N, reviews as O, products as S, projects as T, news as _, adminLogin as a, presence as b, btnPrimary as c, formatPrice as d, kindLabels as f, loadStats as g, lines as h, SiteFrame as i, trackEvent as j, saveLocalOrder as k, company as l, lineBySlug as m, PageIntro as n, btnAccent as o, kindTitle as p, ProductCard as r, btnGhost as s, LeadForm as t, filterProducts as u, newsBySlug as v, projectBySlug as w, productBySlug as x, offices as y };
