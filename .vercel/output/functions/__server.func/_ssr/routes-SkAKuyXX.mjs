import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play } from "../_libs/lucide-react.mjs";
import { A as stats, N as useUi, O as reviews, S as products, T as projects, _ as news, c as btnPrimary, d as formatPrice, h as lines, i as SiteFrame, l as company, o as btnAccent, r as ProductCard, s as btnGhost, t as LeadForm } from "./chrome-D-Tozyhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SkAKuyXX.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const open = useUi((state) => state.open);
	const featured = products.filter((item) => [
		"sever-vk-37",
		"potok-ov-40",
		"osnova-vp-90",
		"rezec-lp-280"
	].includes(item.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Поставка промышленного оборудования",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-wide text-accent uppercase",
								children: company.legal
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl",
								children: "Оборудование, которое выходит на смену без сюрпризов"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-lg text-muted",
								children: "Подбираем компрессоры, подготовку воздуха, строительные машины и станки. Отгружаем со склада, запускаем и чиним, пока техника в работе."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/catalog",
									className: btnAccent,
									children: "Открыть каталог"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: btnPrimary,
									onClick: () => open("message"),
									children: "Задать вопрос"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-sm text-muted",
								children: [
									"Приёмная",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "font-semibold text-fg",
										href: company.phoneHref,
										children: company.phone
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise relative overflow-hidden rounded-lg",
						style: { animationDelay: "80ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/hero.jpg",
							alt: "Шоурум компрессоров и станков Промсервис",
							width: 1792,
							height: 1008,
							className: "aspect-[16/10] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => open("video"),
							className: "btn absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-surface/95 px-4 text-sm font-semibold text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" }), "Смотреть площадку"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold",
						children: "Линейки"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						className: "text-sm font-semibold text-primary",
						children: "Весь каталог"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/lines/$slug",
						params: { slug: line.slug },
						className: "card-hover rise grid overflow-hidden rounded-lg border border-fg/10 bg-surface sm:grid-cols-5",
						style: { animationDelay: `${index * 70}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: line.image,
							alt: line.alt,
							className: "aspect-[4/3] h-full w-full object-cover sm:col-span-2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-wide text-accent uppercase",
									children: line.mark
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-xl font-extrabold",
									children: line.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: line.lead
								})
							]
						})]
					}, line.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary text-on-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3",
					children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-3xl font-extrabold tabular-nums",
						children: item.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-on-primary/75",
						children: item.label
					})] }, item.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-center gap-6 px-4 py-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: "Появились вопросы по подбору?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Оставьте номер. Инженер перезвонит и уточнит расход, давление или задачу на площадке — без обзвона «просто так»."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCallback, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/warehouse.jpg",
						alt: "Склад Промсервис",
						className: "aspect-[16/10] w-full rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [[
							["Склад, а не витрина", "Наличие по компрессорам, плитам и расходникам видно в карточке. Под заказ называем срок до подтверждения."],
							["Сервис на весь срок", "Гарантия 12 месяцев. Дальше — тот же пост: диагностика, запчасти, выезд."],
							["Документы и пуск", "Паспорта, запуск и короткое обучение оператора входят в поставку станций."]
						].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: text
						})] }, title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/service",
								className: btnPrimary,
								children: "Как устроен сервис"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btnGhost,
								onClick: () => open("office"),
								children: "Ближайший офис"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: "Часто берут"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						slug: product.slug,
						title: product.title,
						summary: product.summary,
						price: formatPrice(product.price),
						image: product.image,
						stock: product.stock
					}, product.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-extrabold",
							children: "Проекты"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "text-sm font-semibold text-primary",
							children: "Все проекты"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: projects.slice(0, 2).map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: project.slug },
							className: "card-hover overflow-hidden rounded-lg border border-fg/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: "",
								className: "aspect-[3/2] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-semibold text-accent",
									children: [
										project.city,
										" · ",
										project.year
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-bold",
									children: project.title
								})]
							})]
						}, project.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: "Как это выглядит на площадке"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "mt-6 aspect-video w-full rounded-lg bg-fg object-cover",
					controls: true,
					playsInline: true,
					poster: "/media/hero.jpg",
					src: "/media/plant.mp4"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-extrabold",
							children: "Отзывы"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm font-semibold text-primary",
							onClick: () => open("review"),
							children: "Оставить отзыв"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-lg border border-fg/10 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "text-sm",
								children: review.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 text-sm font-semibold text-muted",
								children: review.company
							})]
						}, review.company))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold",
						children: "Новости"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/news",
						className: "text-sm font-semibold text-primary",
						children: "Все новости"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: news.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/news/$slug",
						params: { slug: item.slug },
						className: "card-hover overflow-hidden rounded-lg border border-fg/10 bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							className: "aspect-[3/2] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: item.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-bold",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: item.lead
								})
							]
						})]
					}, item.slug))
				})]
			})
		]
	});
}
function HomeCallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
		kind: "callback",
		meta: "home",
		submitLabel: "Обратиться",
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
	});
}
//#endregion
export { Home as component };
