import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  MetaArgs,
  MetaFunction,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useParams,
  useRouteError
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import { getLanguage, loadContent, supportedLanguages } from "./utils/Utils";

export async function loader({ request, params }: LoaderFunctionArgs) {

  const userAgent = request.headers.get("user-agent") || "";
  const acceptLanguage = request.headers.get("accept-language");
  const currentLanguage = getLanguage(params);

  const isBot = /Googlebot|bot|crawl|spider|slurp/i.test(userAgent) || acceptLanguage === null || acceptLanguage === "" || currentLanguage !== "en";

  if (isBot) {
    return null;
  }

  // Auto-redirect user to site matching their language, unless user set language themself to a supported language

  const languageIsSupported = currentLanguage in supportedLanguages;

  const referer = request.headers.get("referer");
  var isInternalNavigation = false;

  if (referer) {
    const refererUrl = new URL(referer);
    const currentUrl = new URL(request.url);
    isInternalNavigation = refererUrl.origin === currentUrl.origin;
  }

  if (isInternalNavigation && languageIsSupported) {
    return null;
  }

  // Check if language is appropriate
  var preferredLanguage = "en";

  // Split the header into an array of language preferences
  const languages = acceptLanguage.split(",");

  // Iterate over each language preference and extract the base language code
  for (var lang of languages) {
    // Extract the base language code (e.g., 'en' from 'en-US')
    const baseLang = lang.split("-")[0].split(";")[0];

    // Check if the base language code is one of the supported languages
    if (baseLang in supportedLanguages) {
      preferredLanguage = baseLang;
      break; // Stop once a supported language is found
    }
  }

  if (preferredLanguage === currentLanguage) {
    return null;
  }
  return redirect(`/${preferredLanguage === "en" ? "" : preferredLanguage}`);
}

/**
 * Helper function to get the page URL for the given language
 * @param lang the current language code
 * @returns the page URL as string
 */
function getUrlFromLanguage(lang: string) {
  return `https://www.ivynium.com${lang === "en" ? "" : `/${lang}`}`;
}

export const meta: MetaFunction = ({ params }: MetaArgs) => {
  const content = loadContent(getLanguage(params));

  return [
    { title: "Ivynium" },
    { name: "description", content: content.catchPhrase },
    { property: "og:title", content: "Ivynium" },
    { property: "og:description", content: content.catchPhrase },
    { property: "og:url", content: "https://www.ivynium.com" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Ivynium" },
    { property: "og:image", content: "https://www.ivynium.com/images/preview.png" },
  ]
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const language = getLanguage(useParams());
  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ivance Amovin" />
        <Meta />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" type="image/png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={getUrlFromLanguage(language)} />
        <link rel="alternate" hrefLang="en" href="https://www.ivynium.com" />
        <link rel="alternate" hrefLang="fr" href="https://www.ivynium.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.ivynium.com" />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col items-center justify-center bg-bgDark text-center text-slate-100">
        <ScrollRestoration />
        <Scripts />
        {children}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const backToSafety =
    <Link prefetch="viewport" className="underline hover:decoration-2 hover:font-bold" to={`/`} reloadDocument>
      Back to safety
    </Link >;
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} - {error.statusText}
        </h1>
        <p>{error.data}</p>
        {backToSafety}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        {backToSafety}
      </div>
    );
  }
  return (
    <div>
      <h1>Unknown Error</h1>
      {backToSafety}
    </div>
  );
}
