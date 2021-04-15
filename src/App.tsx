import { Theme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LogIn from "./pages/LogIn";
import ReposPage from "./pages/Repos";
import Topics from "./pages/Topics";
import Licenses from "./pages/Licenses";
import Languages from "./pages/Languages";
import { RootState, useAppDispatch } from ".";
import {
  DrawerMenuToggleButton,
  DrawerMenuWrapper,
  DrawerMenu,
} from "./components/DrawerMenu";
import { ReactNode } from "react";
import { refresh, startLogin } from "./reducers";

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflow: "auto",
  },
});

type AppProps = {
  classes: {
    [key: string]: string;
  };
};

function App({ classes }: AppProps) {
  const repositories = useSelector(
    (state: RootState) => state.reducer.repositories
  );
  const loggedIn = useSelector((state: RootState) => state.reducer.loggedIn);
  const dispatch = useAppDispatch();

  function ifLoggedOut(child: ReactNode) {
    if (!loggedIn) {
      return child;
    }
    return null;
  }

  function ifLoggedIn(child: ReactNode) {
    if (loggedIn) {
      return child;
    }
    return null;
  }

  return (
    <DrawerMenuWrapper>
      <CssBaseline />
      <Router>
        <div className="App">
          <AppBar>
            <Toolbar>
              {ifLoggedIn(
                <DrawerMenuToggleButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                />
              )}
              <Typography variant="h6" color="inherit" className={classes.grow}>
                GitHub Repo Organizer
              </Typography>
              {ifLoggedOut(
                <Button
                  onClick={() => {
                    dispatch(startLogin());
                  }}
                  color="inherit"
                >
                  Login
                </Button>
              )}
              {ifLoggedIn(
                <Button onClick={() => dispatch(refresh())} color="inherit">
                  Refresh
                </Button>
              )}
            </Toolbar>
          </AppBar>
          <DrawerMenu />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {ifLoggedOut(<LogIn />)}
            {ifLoggedIn(
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={ReposPage}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/topics"}
                  component={() => <Topics repositories={repositories} />}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/licenses"}
                  component={() => <Licenses repositories={repositories} />}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/languages"}
                  component={() => <Languages repositories={repositories} />}
                />
              </Switch>
            )}
          </main>
        </div>
      </Router>
    </DrawerMenuWrapper>
  );
}

export default withStyles(styles)(App);
