import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as readLocalLeads, a as adminLogin, f as kindLabels, g as loadStats, i as SiteFrame, n as PageIntro, o as btnAccent, p as kindTitle, s as btnGhost, x as productBySlug } from "./chrome-D-Tozyhf.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CJf3LY3Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TOKEN_KEY = "pso-admin";
function AdminPage() {
	const [token, setToken] = (0, import_react.useState)(null);
	const [stats, setStats] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const [leads, setLeads] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const saved = sessionStorage.getItem(TOKEN_KEY);
		if (saved) setToken(saved);
		setLeads(readLocalLeads());
	}, []);
	(0, import_react.useEffect)(() => {
		if (!token) return;
		let stop = false;
		const pull = () => {
			loadStats({ data: { token } }).then((result) => {
				if (stop) return;
				if (!result.ok) {
					sessionStorage.removeItem(TOKEN_KEY);
					setToken(null);
					setStats(null);
					return;
				}
				setStats(result.stats);
			}).catch(() => void 0);
		};
		pull();
		const timer = window.setInterval(pull, 15e3);
		return () => {
			stop = true;
			window.clearInterval(timer);
		};
	}, [token]);
	async function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setPending(true);
		setError("");
		try {
			const result = await adminLogin({ data: {
				login: String(form.get("login") ?? ""),
				password: String(form.get("password") ?? "")
			} });
			if (!result.ok) {
				setError(result.error);
				return;
			}
			sessionStorage.setItem(TOKEN_KEY, result.token);
			setToken(result.token);
		} catch {
			setError("Не удалось войти. Обновите страницу.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, {
		title: "Админка",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Администратор",
			title: "Просмотры и статистика",
			text: "Считает визиты страниц и число заявок по всему сайту. Телефоны и тексты в общую базу не пишутся."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-8",
			children: [
				!token ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "max-w-md space-y-3 rounded-lg border border-fg/10 bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Логин", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "login",
								autoComplete: "username",
								className: "field mt-1",
								defaultValue: "admin"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Пароль", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "password",
								type: "password",
								autoComplete: "current-password",
								className: "field mt-1"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-accent",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: btnAccent,
							disabled: pending,
							children: pending ? "Проверяем…" : "Войти"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Учётная запись: логин ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-fg",
									children: "admin"
								}),
								", пароль",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-fg",
									children: "Promservis2026"
								})
							]
						})
					]
				}) : null,
				token && stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {
					stats,
					leads,
					onLogout: () => {
						sessionStorage.removeItem(TOKEN_KEY);
						setToken(null);
						setStats(null);
					}
				}) : null,
				token && !stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Собираем цифры…"
				}) : null
			]
		})]
	});
}
function Dashboard({ stats, leads, onLogout }) {
	const [chartReady, setChartReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setChartReady(true), []);
	const cards = [
		["Сегодня", stats.viewsToday],
		["7 дней", stats.views7],
		["30 дней", stats.views30],
		["Заявки за 7 дней", stats.events7]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Обновляется само, раз в 15 секунд."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: btnGhost,
					onClick: onLogout,
					children: "Выйти"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: cards.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-3xl font-extrabold tabular-nums",
						children: value
					})]
				}, String(label)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-fg/10 bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold",
					children: "Просмотры по дням"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-56",
					children: chartReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: stats.byDay,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "day",
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									width: 28,
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "views",
									name: "Просмотры",
									stroke: "var(--color-primary)",
									fill: "var(--color-primary)",
									fillOpacity: .15
								})
							]
						})
					}) : null
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold",
						children: "Страницы"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "mt-3 w-full text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stats.topPages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-muted",
							children: "Пока нет просмотров. Откройте пару разделов и вернитесь."
						}) }) : stats.topPages.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-fg/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-2 pr-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: row.title || row.path
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: row.path
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-right font-bold tabular-nums",
								children: row.n
							})]
						}, row.path)) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-lg border border-fg/10 bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold",
							children: "События"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [stats.byKind.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: "Заявок ещё не было."
							}) : null, stats.byKind.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3 border-t border-fg/10 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: kindTitle(row.kind) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold tabular-nums",
									children: row.n
								})]
							}, row.kind))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-bold",
							children: "Кладут в корзину"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 space-y-1 text-sm",
							children: [stats.topProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: "Пока никто не добавлял."
							}) : null, stats.topProducts.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: productBySlug(row.meta)?.title ?? row.meta }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold tabular-nums",
									children: row.n
								})]
							}, row.meta))]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-fg/10 bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold",
					children: "Последние события"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-fg/10 text-sm",
					children: stats.recent.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap justify-between gap-2 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [kindLabels[row.kind] ?? row.kind, row.meta ? ` · ${row.meta}` : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [
								row.at,
								" · ",
								row.path
							]
						})]
					}, `${row.at}-${index}`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg border border-fg/10 bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold",
						children: "Заявки с этого браузера"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Имена и телефоны видны только здесь, на устройстве, где форму отправили."
					}),
					leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "В этом браузере заявок нет."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: leads.slice(0, 8).map((lead, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									kindTitle(lead.kind),
									" · ",
									lead.at
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: Object.entries(lead.fields).filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join(" · ")
							})]
						}, `${lead.at}-${index}`))
					})
				]
			})
		]
	});
}
//#endregion
export { AdminPage as component };
