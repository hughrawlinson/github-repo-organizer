import { DrawerMenuWrapper, DrawerMenu } from "../features/DrawerMenu";
import TopNav from "../features/TopNav";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { createEmotionCache, theme } from "../features/MuiSupport";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export function App(
  props: AppProps & { emotionCache: typeof clientSideEmotionCache }
) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerMenuWrapper>
          <div className="App">
            <TopNav />
            <DrawerMenu />
            <main
              style={{
                flexGrow: 1,
                padding: theme.spacing(3),
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Component {...pageProps} />
            </main>
          </div>
        </DrawerMenuWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
