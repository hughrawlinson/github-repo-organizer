import { DrawerMenuWrapper, DrawerMenu } from "../features/DrawerMenu";
import TopNav from "../features/TopNav";
import {
  createMuiTheme,
  CssBaseline,
  Theme,
  ThemeProvider,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { useEffect } from "react";
import type { AppProps } from "next/app";

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflow: "auto",
  },
});

const theme = createMuiTheme({});

function App({
  classes,
  Component,
  pageProps,
}: WithStyles<typeof styles> & AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerMenuWrapper>
        <div className="App">
          <TopNav />
          <DrawerMenu />
          <main className={classes.content}>
            <div className={classes.appBarSpacer}></div>
            <Component {...pageProps} />
          </main>
        </div>
      </DrawerMenuWrapper>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
