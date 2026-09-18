import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, c as Check, l as Bookmark, n as Utensils, o as Mountain, r as UtensilsCrossed, s as Menu, t as X, u as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as extendTailwindMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { i as useMotionValueEvent, n as useTransform, o as LayoutGroup, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cpg1EwBV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var copy = {
	es: {
		nav: {
			how: "Cómo",
			app: "La app",
			eat: "Hoy",
			list: "Lista",
			cta: "Avísame"
		},
		hero: {
			kicker: "Cali · Colombia",
			title: "¿Qué comemos hoy.",
			lede: "Restaurantes en Cali, contados por la gente que come ahí. Ningún sitio paga por aparecer primero.",
			cta: "Avísame cuando esté lista",
			secondary: "Cómo decide Mira Ve",
			chips: [
				"Abierto ahora",
				"En tendencia",
				"Cerca de ti"
			],
			floatLocal: "Local ×2",
			floatFair: "Sin anuncios"
		},
		marquee: [
			"Locales ×2",
			"Sin anuncios",
			"Rotación diaria",
			"Hecha en Cali"
		],
		strip: { items: [
			{
				title: "Las reseñas locales pesan el doble",
				body: "Una reseña de alguien que vive en Cali cuenta el doble que la de un visitante. Vivir aquí es la credencial."
			},
			{
				title: "El orden cambia cada día",
				body: "El feed se reordena para ti cada mañana, con una semilla distinta. Nadie se queda dueño de la primera fila."
			},
			{
				title: "Nadie compra un puesto",
				body: "No existe destacado, patrocinado ni puesto a la venta. El orden no se paga."
			}
		] },
		principles: {
			index: "02",
			eyebrow: "Sin puestos a la venta",
			title: "Cómo funciona.",
			lede: "Ningún sitio paga por aparecer arriba. Así es como Mira Ve decide qué te muestra.",
			items: [
				{
					title: "Las reseñas de locales pesan el doble",
					body: "Una reseña de alguien que vive en Cali cuenta el doble que la de un visitante. Vivir aquí es la credencial."
				},
				{
					title: "El orden cambia cada día",
					body: "El feed se reordena para ti cada día, con una semilla distinta. Los mismos diez sitios no se quedan pegados arriba para siempre."
				},
				{
					title: "Los sitios poco vistos tienen un cupo reservado",
					body: "Una parte del feed está reservada para lugares que casi nadie ha visto todavía. Marcados como “Poco visto este mes”."
				},
				{
					title: "Nadie compra un mejor puesto",
					body: "No existe una opción para pagar por aparecer primero, destacado o patrocinado. El orden no está a la venta."
				}
			]
		},
		showcase: {
			index: "03",
			eyebrow: "La app",
			title: "Descubre, guarda, camina.",
			lede: "Un mapa de Cali, una rotación diaria y una lista para después — sin el ruido de las plataformas que venden el feed.",
			tabs: [
				{
					id: "discover",
					label: "Descubre",
					caption: "Qué comemos hoy, según quien vive aquí."
				},
				{
					id: "map",
					label: "Mapa",
					caption: "Cali entero, con lo que está abierto cerca."
				},
				{
					id: "saved",
					label: "Guardados",
					caption: "Los sitios para después, en un solo lugar."
				},
				{
					id: "how",
					label: "Reglas",
					caption: "Las reglas están a la vista. Siempre."
				}
			]
		},
		rotation: {
			index: "01",
			eyebrow: "Rotación de hoy",
			title: "No es el mismo ranking de siempre.",
			lede: "Cuatro sitios de Cali. Mañana el orden cambia. Así nadie se queda dueño de la primera fila.",
			known: "Lo que aquí se pide",
			noReviews: "Sin reseñas todavía",
			rare: "Poco visto este mes",
			cash: "Solo efectivo",
			closed: "Cerrado hoy"
		},
		badges: {
			index: "04",
			eyebrow: "Quién reseña",
			title: "No todas las voces pesan igual.",
			lede: "Mira Ve distingue a quien vive en Cali de quien está de paso.",
			items: [{
				name: "Local",
				body: "Vive en Cali: eligió su barrio y tiene 3 reseñas buenas. Su calificación cuenta doble."
			}, {
				name: "Buen Diente",
				body: "Come de verdad: reseñas constantes, platos concretos, sin relleno. Una voz que la ciudad ya reconoce."
			}]
		},
		city: {
			kicker: "Valle del Cauca",
			title: "Hecha en Cali. Para Cali.",
			lede: "San Antonio, Granada, La Flora, Centro, El Peñón. Mira Ve no es una guía mundial con Cali como filtro. Es Cali."
		},
		waitlist: {
			eyebrow: "Próximamente en iPhone",
			title: "Entra a la lista.",
			lede: "Te escribimos cuando Mira Ve esté lista para instalar. Sin spam, sin newsletter semanal.",
			name: "Nombre",
			namePh: "Tu nombre",
			email: "Correo",
			emailPh: "tu@correo.com",
			barrio: "Barrio",
			barrioPh: "Tu barrio en Cali",
			submit: "Quiero un lugar",
			sending: "Guardando…",
			successTitle: "Ya estás en la lista.",
			successBody: "Te escribimos cuando Mira Ve salga en iPhone. Gracias por esperar con nosotros.",
			error: "Revisa el correo e inténtalo de nuevo.",
			another: "Añadir otro correo"
		},
		footer: {
			mark: "Mira Ve",
			line: "Restaurantes en Cali, contados por quienes comen ahí.",
			rights: "Cali, Colombia"
		},
		lang: {
			es: "ES",
			en: "EN"
		}
	},
	en: {
		nav: {
			how: "How",
			app: "The app",
			eat: "Today",
			list: "List",
			cta: "Notify me"
		},
		hero: {
			kicker: "Cali · Colombia",
			title: "What are we eating today.",
			lede: "Restaurants in Cali, told by the people who eat there. Nobody pays to show up first.",
			cta: "Notify me when it’s ready",
			secondary: "How Mira Ve decides",
			chips: [
				"Open now",
				"Trending this week",
				"Near you"
			],
			floatLocal: "Local ×2",
			floatFair: "No ads"
		},
		marquee: [
			"Locals ×2",
			"No ads",
			"Daily shuffle",
			"Made in Cali"
		],
		strip: { items: [
			{
				title: "Local reviews count double",
				body: "A review from someone who lives in Cali counts twice as much as one from a visitor. Living here is the credential."
			},
			{
				title: "The order changes every day",
				body: "The feed is reshuffled for you each morning with a new seed. Nobody owns the front row."
			},
			{
				title: "Nobody buys a seat",
				body: "No featured, no sponsored, no placement for sale. Rank is not for sale."
			}
		] },
		principles: {
			index: "02",
			eyebrow: "Placement is not for sale",
			title: "How it works.",
			lede: "No venue pays to appear on top. This is how Mira Ve decides what you see.",
			items: [
				{
					title: "Local reviews count double",
					body: "A review from someone who lives in Cali counts twice as much as one from a visitor. Living here is the credential."
				},
				{
					title: "The order changes every day",
					body: "The feed is reshuffled for you each day with a new seed. The same ten places don’t stay glued to the top forever."
				},
				{
					title: "Overlooked spots get a reserved slot",
					body: "Part of the feed is held for places almost nobody has seen yet — marked “Rarely seen this month.”"
				},
				{
					title: "Nobody buys a better seat",
					body: "There is no way to pay for first, featured, or sponsored. Rank is not for sale."
				}
			]
		},
		showcase: {
			index: "03",
			eyebrow: "The app",
			title: "Discover, save, walk.",
			lede: "A map of Cali, a daily rotation, and a list for later — without the noise of platforms that sell the feed.",
			tabs: [
				{
					id: "discover",
					label: "Discover",
					caption: "What we’re eating today, according to people who live here."
				},
				{
					id: "map",
					label: "Map",
					caption: "All of Cali, with what’s open nearby."
				},
				{
					id: "saved",
					label: "Saved",
					caption: "The places for later, in one list."
				},
				{
					id: "how",
					label: "Rules",
					caption: "The rules are in the open. Always."
				}
			]
		},
		rotation: {
			index: "01",
			eyebrow: "Today’s rotation",
			title: "Not the same ranking as yesterday.",
			lede: "Four places in Cali. Tomorrow the order changes. Nobody owns the front row.",
			known: "What people order here",
			noReviews: "No reviews yet",
			rare: "Rarely seen this month",
			cash: "Cash only",
			closed: "Closed today"
		},
		badges: {
			index: "04",
			eyebrow: "Who’s reviewing",
			title: "Not every voice weighs the same.",
			lede: "Mira Ve tells apart someone who lives in Cali from someone just passing through.",
			items: [{
				name: "Local",
				body: "Lives in Cali: chose a neighborhood and has 3 solid reviews. Their rating counts double."
			}, {
				name: "Buen Diente",
				body: "Eats for real: steady reviews, specific dishes, no filler. A voice the city already knows."
			}]
		},
		city: {
			kicker: "Valle del Cauca",
			title: "Made in Cali. For Cali.",
			lede: "San Antonio, Granada, La Flora, Centro, El Peñón. Mira Ve is not a worldwide guide with Cali as a filter. It is Cali."
		},
		waitlist: {
			eyebrow: "Coming soon on iPhone",
			title: "Get on the list.",
			lede: "We’ll write you when Mira Ve is ready to install. No spam, no weekly newsletter.",
			name: "Name",
			namePh: "Your name",
			email: "Email",
			emailPh: "you@email.com",
			barrio: "Neighborhood",
			barrioPh: "Your neighborhood in Cali",
			submit: "Save my spot",
			sending: "Saving…",
			successTitle: "You’re on the list.",
			successBody: "We’ll write you when Mira Ve ships on iPhone. Thanks for waiting with us.",
			error: "Check the email and try again.",
			another: "Add another email"
		},
		footer: {
			mark: "Mira Ve",
			line: "Restaurants in Cali, told by the people who eat there.",
			rights: "Cali, Colombia"
		},
		lang: {
			es: "ES",
			en: "EN"
		}
	}
};
var neighborhoods = [
	"San Antonio",
	"Granada",
	"El Peñón",
	"Centro",
	"La Flora",
	"Ciudad Jardín",
	"Chipichape",
	"San Fernando",
	"El Ingenio",
	"Pance",
	"Menga",
	"La Hacienda"
];
var places = [
	{
		name: "El Deleite del Mar.",
		cuisineEs: "Mariscos",
		cuisineEn: "Seafood",
		barrio: "Centro",
		price: "$",
		dishEs: "Sancocho de pescado",
		dishEn: "Fish sancocho",
		rare: true,
		cash: true,
		closed: true
	},
	{
		name: "Platillos Voladores.",
		cuisineEs: "Pacífico",
		cuisineEn: "Pacific",
		barrio: "Granada",
		price: "$$$$",
		dishEs: "Encocado de pescado",
		dishEn: "Coconut fish stew",
		rare: true,
		closed: true
	},
	{
		name: "Ioenta.",
		cuisineEs: "Siria",
		cuisineEn: "Syrian",
		barrio: "San Antonio",
		price: "$$",
		dishEs: "Pizza margarita",
		dishEn: "Margherita pizza"
	},
	{
		name: "Palomulata Parrilla Boutique.",
		cuisineEs: "Asadero",
		cuisineEn: "Grill",
		barrio: "La Flora",
		price: "$$$$",
		dishEs: "Entraña",
		dishEn: "Skirt steak"
	}
];
function rotatePlaces(list, date = /* @__PURE__ */ new Date()) {
	const seed = date.getFullYear() * 1e4 + (date.getMonth() + 1) * 100 + date.getDate();
	const copyList = [...list];
	let s = seed || 1;
	for (let i = copyList.length - 1; i > 0; i--) {
		s = s * 16807 % 2147483647;
		const j = s % (i + 1);
		const a = copyList[i];
		const b = copyList[j];
		copyList[i] = b;
		copyList[j] = a;
	}
	return copyList;
}
var LanguageContext = (0, import_react.createContext)(null);
var STORAGE_KEY$1 = "mira-ve-lang";
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("es");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem(STORAGE_KEY$1);
		if (saved === "es" || saved === "en") setLangState(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const setLang = (0, import_react.useCallback)((next) => {
		setLangState(next);
		window.localStorage.setItem(STORAGE_KEY$1, next);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		t: copy[lang]
	}), [lang, setLang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
var twMerge = extendTailwindMerge({ extend: { theme: { text: [
	"caption2",
	"caption1",
	"footnote",
	"subheadline",
	"headline",
	"body",
	"title3",
	"title2",
	"title1",
	"large-title",
	"display-tile",
	"display-card",
	"display-hero",
	"display-page",
	"section",
	"ghost"
] } } });
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var icons = [Mountain, UtensilsCrossed];
var tints = ["bg-palma-tint text-palma", "bg-mango-tint text-mango"];
function Badges() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-caps text-muted",
					children: [
						t.badges.index,
						" — ",
						t.badges.eyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-section font-bold tracking-tight text-ink",
					children: t.badges.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-body leading-relaxed text-muted",
					children: t.badges.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: t.badges.items.map((item, i) => {
						const Icon = icons[i] ?? Mountain;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-md bg-paper p-5 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("inline-flex size-11 shrink-0 items-center justify-center rounded-sm", tints[i] ?? "bg-sand text-ink"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display text-display-tile text-ink",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-subheadline leading-relaxed text-muted",
								children: item.body
							})] })]
						}, item.name);
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/table.jpg",
					alt: "",
					className: "no-outline aspect-4/3 w-full object-cover"
				})
			})]
		})
	});
}
function City() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/cali.jpg",
				alt: "",
				className: "no-outline absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foam/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-on-photo/70",
						children: t.city.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-xl text-section font-bold tracking-tight text-on-photo sm:text-display-page",
						children: t.city.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-body leading-relaxed text-on-photo/85",
						children: t.city.lede
					})
				]
			})
		]
	});
}
function Footer() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-cream/10 bg-foam text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-title2 font-extrabold uppercase tracking-tight",
				children: t.footer.mark
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-footnote text-cream/65",
				children: t.footer.line
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-cream/45",
				children: t.footer.rights
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold transition-[transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-50 enabled:active:scale-[0.96] hover:-translate-y-px", {
	variants: {
		variant: {
			foam: "bg-foam text-cream hover:bg-ink",
			inverse: "bg-cream text-foam hover:bg-sand",
			ghost: "bg-transparent text-ink hover:bg-sand",
			outline: "bg-transparent text-ink border border-line hover:bg-sand",
			inverseOutline: "bg-transparent text-cream border border-cream/25 hover:bg-cream/10"
		},
		size: {
			sm: "h-10 px-4 text-subheadline",
			md: "h-11 px-5 text-headline",
			lg: "h-14 px-7 text-headline"
		}
	},
	defaultVariants: {
		variant: "foam",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var PILL_EASE = [
	.22,
	1,
	.36,
	1
];
function useActiveSection(hrefs) {
	const [active, setActive] = (0, import_react.useState)("");
	const lockUntil = (0, import_react.useRef)(0);
	const key = hrefs.join("|");
	(0, import_react.useEffect)(() => {
		const ids = hrefs.map((h) => h.replace("#", ""));
		const update = () => {
			if (performance.now() < lockUntil.current) return;
			const hero = document.getElementById("top");
			if (hero && hero.getBoundingClientRect().bottom > window.innerHeight - 8) {
				setActive((prev) => prev === "" ? prev : "");
				return;
			}
			let current = "";
			for (const id of ids) {
				const el = document.getElementById(id);
				if (!el) continue;
				if (el.getBoundingClientRect().top <= 96) current = `#${id}`;
			}
			setActive((prev) => prev === current ? prev : current);
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, [key]);
	const select = (href) => {
		lockUntil.current = performance.now() + 700;
		setActive(href);
	};
	return [active, select];
}
function MorphicNav({ links, onDark, className }) {
	const [active, select] = useActiveSection(links.map((l) => l.href));
	const pillTransition = useReducedMotion() === true ? { duration: 0 } : {
		type: "tween",
		duration: .2,
		ease: PILL_EASE
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: cn("flex justify-center", className),
		"aria-label": "Primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGroup, {
			id: "site-nav",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative flex rounded-sm p-1", onDark ? "bg-cream/15" : "bg-sand"),
				children: links.map((link) => {
					const isActive = link.href === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link.href,
						"aria-current": isActive ? "location" : void 0,
						onClick: () => select(link.href),
						className: cn("relative z-10 inline-flex h-9 items-center px-3.5 whitespace-nowrap", "label-caps transition-colors duration-150 ease-out motion-reduce:transition-none", isActive ? onDark ? "font-semibold text-foam" : "font-semibold text-cream" : onDark ? "text-cream/75 hover:text-cream" : "text-muted hover:text-ink"),
						children: [isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "site-nav-pill",
							className: cn("absolute inset-0 -z-10 rounded-xs", onDark ? "bg-cream" : "bg-foam"),
							transition: pillTransition
						}) : null, link.label]
					}, link.href);
				})
			})
		})
	});
}
function Header() {
	const { t, lang, setLang } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const onDark = !scrolled;
	const links = [
		{
			href: "#hoy",
			label: t.nav.eat
		},
		{
			href: "#como",
			label: t.nav.how
		},
		{
			href: "#app",
			label: t.nav.app
		},
		{
			href: "#lista",
			label: t.nav.list
		}
	];
	const [active] = useActiveSection(links.map((l) => l.href));
	(0, import_react.useEffect)(() => {
		const hero = document.getElementById("top");
		if (!hero) return;
		const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
			threshold: 0,
			rootMargin: "-10% 0px 0px 0px"
		});
		io.observe(hero);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200", onDark ? "bg-foam/90 text-cream shadow-nav-dark backdrop-blur-md" : "bg-blanco/90 text-ink shadow-nav backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-h-11 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "",
						className: "no-outline size-9 rounded-xs sm:size-10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-display text-lg font-extrabold uppercase tracking-tight sm:text-xl", onDark ? "text-cream" : "text-ink"),
						children: "Mira Ve"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MorphicNav, {
					links,
					onDark,
					className: "hidden md:flex"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex rounded-pill p-1", onDark ? "bg-cream/10" : "bg-sand"),
							role: "group",
							"aria-label": "Language",
							children: ["es", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLang(code),
								className: cn("inline-flex h-8 min-w-10 items-center justify-center rounded-pill px-2.5 text-caption1 font-semibold tracking-wide transition-colors", lang === code ? onDark ? "bg-cream text-foam" : "bg-foam text-cream" : onDark ? "text-cream/70 hover:text-cream" : "text-muted hover:text-ink"),
								"aria-pressed": lang === code,
								children: t.lang[code]
							}, code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: onDark ? "inverse" : "foam",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#lista",
								children: t.nav.cta
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("inline-flex size-11 items-center justify-center rounded-pill md:hidden", onDark ? "text-cream" : "text-ink"),
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t px-4 py-3 md:hidden", onDark ? "border-cream/10" : "border-line"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobile",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					"aria-current": active === link.href ? "location" : void 0,
					className: cn("inline-flex h-11 items-center rounded-sm px-3 text-headline font-medium", onDark ? "text-cream" : "text-ink", active === link.href && "font-semibold", active === link.href && (onDark ? "bg-cream/10" : "bg-sand")),
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: onDark ? "inverse" : "foam",
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#lista",
						onClick: () => setOpen(false),
						children: t.nav.cta
					})
				})]
			})
		}) : null]
	});
}
function clamp01(n) {
	return Math.max(0, Math.min(1, n));
}
function mapRange(v, in0, in1, out0, out1) {
	const t = clamp01((v - in0) / (in1 - in0));
	return out0 + (out1 - out0) * t;
}
function Hero() {
	const { t } = useLanguage();
	const containerRef = (0, import_react.useRef)(null);
	const imageWrapRef = (0, import_react.useRef)(null);
	const blurRef = (0, import_react.useRef)(null);
	const washRef = (0, import_react.useRef)(null);
	const contentRef = (0, import_react.useRef)(null);
	const zooming = useReducedMotion() !== true;
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"]
	});
	const imageScale = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		1,
		1.5,
		1.55
	]);
	const contentY = useTransform(scrollYProgress, [
		0,
		.22,
		.48
	], [
		0,
		0,
		-40
	]);
	const ghostScale = useTransform(scrollYProgress, [0, .5], [1, 1.28]);
	useMotionValueEvent(scrollYProgress, "change", (v) => {
		if (!zooming) return;
		if (blurRef.current) blurRef.current.style.opacity = String(mapRange(v, 0, .5, 0, 1));
		if (washRef.current) washRef.current.style.opacity = String(v < .35 ? mapRange(v, 0, .35, 0, .22) : mapRange(v, .35, .55, .22, .92));
		if (imageWrapRef.current) imageWrapRef.current.style.opacity = String(mapRange(v, .45, .85, 1, 0));
		if (contentRef.current) contentRef.current.style.opacity = String(v < .22 ? 1 : mapRange(v, .22, .48, 1, 0));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		ref: containerRef,
		className: "hero-pin relative bg-foam text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-pin-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute inset-0 will-change-transform",
					style: zooming ? { scale: imageScale } : void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: imageWrapRef,
						className: "absolute inset-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/cali.jpg",
							alt: "",
							className: "absolute inset-0 size-full object-cover no-outline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: blurRef,
							src: "/cali.jpg",
							alt: "",
							className: "absolute inset-0 size-full object-cover no-outline blur-md opacity-0"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: washRef,
					className: "pointer-events-none absolute inset-0 bg-foam opacity-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-foam via-foam/70 to-foam/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grain pointer-events-none absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute top-1/2 left-0 hidden -translate-y-1/2 sm:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "ghost-mark display text-ghost origin-left whitespace-nowrap select-none",
						"aria-hidden": "true",
						style: zooming ? { scale: ghostScale } : void 0,
						children: "MIRA VE"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "relative min-h-dvh",
					style: zooming ? { y: contentY } : void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: contentRef,
						className: "mx-auto grid min-h-dvh max-w-6xl items-center gap-4 px-4 pt-20 pb-4 sm:gap-10 sm:px-6 sm:pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "stagger-item label-caps mb-6 inline-flex items-center gap-3 text-cream/55",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-cream/30" }), t.hero.kicker]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "stagger-item display max-w-xl text-display-page text-cream",
								children: t.hero.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stagger-item mt-6 max-w-md text-body leading-relaxed text-cream/65",
								children: t.hero.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "stagger-item mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "inverse",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#lista",
										children: t.hero.cta
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "inverseOutline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#como",
										children: [t.hero.secondary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stagger-item mt-8 flex flex-wrap gap-2",
								children: t.hero.chips.map((chip, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex h-10 items-center gap-2 rounded-pill border border-cream/15 bg-cream/10 px-3.5 text-subheadline text-cream",
									children: [i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-signal" }) : null, chip]
								}, chip))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stagger-item relative mx-auto w-full max-w-xs lg:max-w-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/screens/discover.png",
									alt: t.hero.title,
									className: "phone-shot no-outline mx-auto h-auto max-h-56 w-auto max-w-full sm:max-h-80 lg:max-h-phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-8 -left-3 hidden rounded-md border border-cream/15 bg-foam/80 px-3 py-2 text-caption1 font-semibold tracking-wide text-cream uppercase backdrop-blur-sm sm:block",
									children: t.hero.floatLocal
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-1/2 -right-3 hidden -translate-y-1/2 rounded-md border border-cream/15 bg-foam/80 px-3 py-2 text-caption1 font-semibold tracking-wide text-cream uppercase backdrop-blur-sm sm:block lg:-right-6",
									children: t.hero.floatFair
								})
							]
						})]
					})
				})
			]
		})
	});
}
function Marquee() {
	const { t } = useLanguage();
	const items = [...neighborhoods, ...t.marquee];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee-track overflow-hidden border-y border-mango/25 bg-arena py-3 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-marquee flex w-max whitespace-nowrap",
			children: [0, 1].map((copyIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-5 px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-caps text-ink/75",
						children: item
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 shrink-0 rounded-full bg-clay/50" })]
				}, `${copyIndex}-${item}`))
			}, copyIndex))
		})
	});
}
function Principles() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "como",
		className: "scroll-mt-20 border-b border-line bg-blanco",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-24 lg:self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "label-caps text-muted",
						children: [
							t.principles.index,
							" — ",
							t.principles.eyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-md text-section font-bold tracking-tight text-ink",
						children: t.principles.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-body leading-relaxed text-muted",
						children: t.principles.lede
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "overflow-hidden rounded-md bg-paper shadow-card",
				children: t.principles.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-b border-line px-5 py-6 last:border-b-0 sm:gap-5 sm:px-7 sm:py-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display mt-0.5 w-8 shrink-0 text-display-tile text-control",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-title3 font-semibold tracking-tight text-ink",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-subheadline leading-relaxed text-muted sm:text-body",
						children: item.body
					})] })]
				}, item.title))
			})]
		})
	});
}
function Rotation() {
	const { t, lang } = useLanguage();
	const rotation = rotatePlaces(places);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hoy",
		className: "scroll-mt-20 border-b border-line bg-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "label-caps text-muted",
						children: [
							t.rotation.index,
							" — ",
							t.rotation.eyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-section font-bold tracking-tight text-ink",
						children: t.rotation.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-body leading-relaxed text-muted",
						children: t.rotation.lede
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: rotation.map((place, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative rounded-lg bg-paper p-5 shadow-card transition-[box-shadow] duration-150 hover:shadow-card-hover sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-caps text-control",
									children: String(i + 1).padStart(2, "0")
								}), place.rare ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-pill bg-palma-tint px-2.5 py-1 text-caption1 font-semibold text-palma",
									children: t.rotation.rare
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-display-card text-ink",
								children: place.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-footnote text-muted",
								children: [
									place.closed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-carbon",
											children: t.rotation.closed
										}),
										place.cash ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-mango",
											children: t.rotation.cash
										})] }) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
									] }) : null,
									lang === "es" ? place.cuisineEs : place.cuisineEn,
									" · ",
									place.barrio,
									" · ",
									place.price
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-clay",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-5 fill-clay" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-sm bg-sand text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-subheadline font-medium text-ink",
								children: lang === "es" ? place.dishEs : place.dishEn
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-caption1 text-muted",
								children: t.rotation.known
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-sm bg-sand text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-subheadline text-muted",
								children: t.rotation.noReviews
							})]
						})]
					})]
				}, place.name))
			})]
		})
	});
}
var screens = {
	discover: "/screens/discover.png",
	map: "/screens/map.png",
	saved: "/screens/saved.png",
	how: "/screens/how.png"
};
function Showcase() {
	const { t } = useLanguage();
	const [active, setActive] = (0, import_react.useState)("discover");
	const current = t.showcase.tabs.find((tab) => tab.id === active) ?? t.showcase.tabs[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "app",
		className: "scroll-mt-20 border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-caps text-muted",
					children: [
						t.showcase.index,
						" — ",
						t.showcase.eyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-section font-bold tracking-tight text-ink",
					children: t.showcase.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-body leading-relaxed text-muted",
					children: t.showcase.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-col gap-1",
					role: "tablist",
					"aria-label": t.showcase.eyebrow,
					children: t.showcase.tabs.map((tab, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": active === tab.id,
						onClick: () => setActive(tab.id),
						className: cn("flex min-h-11 items-start gap-4 rounded-md px-4 py-3 text-left transition-colors", active === tab.id ? "bg-foam text-cream" : "text-ink hover:bg-sand"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("label-caps mt-0.5", active === tab.id ? "text-cream/55" : "text-control"),
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-headline font-semibold",
							children: tab.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 block text-footnote", active === tab.id ? "text-cream/70" : "text-muted"),
							children: tab.caption
						})] })]
					}, tab.id))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center lg:justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: screens[active],
					alt: current?.label,
					className: "phone-shot no-outline mx-auto h-auto max-h-phone w-auto max-w-full"
				}, active)
			})]
		})
	});
}
function Strip() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0",
				children: t.strip.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display mt-0.5 shrink-0 text-display-tile text-control",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-headline font-semibold text-ink",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-footnote leading-relaxed text-muted",
						children: item.body
					})] })]
				}, item.title))
			})
		})
	});
}
var STORAGE_KEY = "mira-ve-waitlist";
function validEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function readList() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
var fieldClass = "mt-2 h-14 w-full rounded-sm bg-sand px-4 text-body text-ink outline-none placeholder:text-control focus:outline-2 focus:outline-offset-2 focus:outline-foam";
function Waitlist() {
	const { t } = useLanguage();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [barrio, setBarrio] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (!validEmail(email.trim())) {
			setError(true);
			return;
		}
		setError(false);
		setSending(true);
		const entry = {
			name: name.trim(),
			email: email.trim().toLowerCase(),
			barrio,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...readList(), entry]));
		window.setTimeout(() => {
			setSending(false);
			setDone(true);
		}, 400);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lista",
		className: "scroll-mt-20 bg-foam text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grain pointer-events-none absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-cream/55",
						children: t.waitlist.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-section font-bold tracking-tight text-cream",
						children: t.waitlist.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-body leading-relaxed text-cream/65",
						children: t.waitlist.lede
					})
				] }), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-paper p-8 text-ink shadow-card",
					role: "status",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-12 items-center justify-center rounded-full bg-foam text-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-title1 font-bold tracking-tight text-ink",
							children: t.waitlist.successTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: t.waitlist.successBody
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-6",
							onClick: () => {
								setDone(false);
								setName("");
								setEmail("");
								setBarrio("");
							},
							children: t.waitlist.another
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "rounded-lg bg-paper p-6 text-ink shadow-card sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-footnote font-medium text-muted",
							children: [t.waitlist.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: t.waitlist.namePh,
								autoComplete: "name",
								className: fieldClass
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-footnote font-medium text-muted",
							children: [t.waitlist.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: email,
								onChange: (e) => {
									setEmail(e.target.value);
									setError(false);
								},
								placeholder: t.waitlist.emailPh,
								type: "email",
								required: true,
								autoComplete: "email",
								className: cn(fieldClass, error && "outline-2 outline-alert")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-footnote font-medium text-muted",
							children: [t.waitlist.barrio, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: barrio,
								onChange: (e) => setBarrio(e.target.value),
								className: fieldClass,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: t.waitlist.barrioPh
								}), neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: n,
									children: n
								}, n))]
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-footnote text-alert",
							children: t.waitlist.error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-6 w-full",
							disabled: sending,
							children: sending ? t.waitlist.sending : t.waitlist.submit
						})
					]
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rotation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Principles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badges, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(City, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waitlist, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
