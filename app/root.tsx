import React from "react";
import clsx from "clsx";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
  Theme,
} from "~/utils/theme-provider";
import { getThemeSession } from "./utils/theme.server";

import Layout, { links as layoutStyles } from "~/components/Layout";

import global from "~/styles/global/base.css";
import colors from "~/styles/global/colors.css";
import effects from "~/styles/global/effects.css";
import reset from "~/styles/global/reset.css";
import sizes from "~/styles/global/sizes.css";
import typography from "~/styles/global/typography.css";
import utils from "~/styles/global/utils.css";

import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tom Hendra • Personal Site",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: colors },
  { rel: "stylesheet", href: effects },
  { rel: "stylesheet", href: global },
  { rel: "stylesheet", href: reset },
  { rel: "stylesheet", href: sizes },
  { rel: "stylesheet", href: typography },
  { rel: "stylesheet", href: utils },
  ...layoutStyles(),
];

function App() {
  /* 
    vw units define the viewport width excluding the scrollbar. to use vw units
    without potential layout shift, we need to calculate the scrollbar width at 
    the earliest opportunity. 
  */
  React.useEffect((): void => {
    const viewportWidth = window.innerWidth;
    const viewportWidthWithoutScrollbar = document.documentElement.clientWidth;
    const scrollbarWidth = viewportWidth - viewportWidthWithoutScrollbar;

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      scrollbarWidth + "px"
    );
  }, []);

  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
