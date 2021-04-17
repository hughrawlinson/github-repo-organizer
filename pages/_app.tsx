import { DrawerMenuWrapper, DrawerMenu } from "../features/DrawerMenu";
import LoginPage from "../features/LoginPage";
import TopNav from "../features/TopNav";
import { CssBaseline, Theme, withStyles, WithStyles } from "@material-ui/core";
import { LoginStateSwitch } from "../features/UserLogin";
import { AppProps } from "next/dist/next-server/lib/router/router";

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

function App({
  classes,
  Component,
  pageProps,
}: WithStyles<typeof styles> & AppProps) {
  return (
    <DrawerMenuWrapper>
      <CssBaseline />
      <div className="App">
        <TopNav />
        <DrawerMenu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
            <LoginStateSwitch selectedLoginState={false}>
              <LoginPage />
            </LoginStateSwitch>
            <LoginStateSwitch selectedLoginState={true}>
              <Component {...pageProps} />
            </LoginStateSwitch>
          </div>
        </main>
      </div>
    </DrawerMenuWrapper>
  );
}

export default withStyles(styles)(App);
