import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ООО «Промсервис и обслуживание»" },
      {
        name: "description",
        content:
          "Промсервис и обслуживание: компрессоры, строительные машины, металлообработка, сервис и склады. Телефон +7 982 274-16-88.",
      },
      { name: "theme-color", content: "#0B3D5C" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-6 text-center text-fg">
      <div>
        <p className="text-sm font-semibold text-accent">404</p>
        <h1 className="mt-2 text-3xl font-extrabold">Такой страницы нет</h1>
        <p className="mt-2 text-muted">Проверьте адрес или вернитесь в каталог.</p>
        <Link
          to="/"
          className="btn mt-6 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-on-primary"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
