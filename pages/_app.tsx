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
import { LoginStateSwitch } from "../features/UserLogin";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";

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
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerMenuWrapper>
        <div className="App">
          <TopNav />
          <DrawerMenu />
          <main className={classes.content}>
            <div className={classes.appBarSpacer}>
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </DrawerMenuWrapper>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
