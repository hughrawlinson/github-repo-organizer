import { Theme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Repository } from "./sagas";
var qs = require("query-string");

import LogIn from "./pages/LogIn";
import Repos from "./pages/Repos";
import Topics from "./pages/Topics";
import Licenses from "./pages/Licenses";
import Languages from "./pages/Languages";
import { GridState } from "./reducers";
import { Dispatch } from "redux";
import { RootState } from ".";
import {
  DrawerMenuToggleButton,
  DrawerMenuWrapper,
  DrawerMenu,
} from "./components/DrawerMenu";
import { ReactNode } from "react";

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
  repositories?: Repository[];
  loggedIn: boolean;
  startLogIn: () => {};
  refresh: () => {};
  setGridState: (v: GridState) => {};
};

function App({
  classes,
  startLogIn,
  refresh,
  setGridState,
  repositories,
  loggedIn,
}: AppProps) {
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
                <Button onClick={startLogIn} color="inherit">
                  Login
                </Button>
              )}
              {ifLoggedIn(
                <Button onClick={refresh} color="inherit">
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
                  component={(props: { location: Location }) => {
                    const queryParams = qs.parse(props.location.search);
                    if (queryParams.gridState) {
                      setGridState(JSON.parse(queryParams.gridState));
                    }
                    return (
                      <Repos
                        queryParams={queryParams}
                        repositories={repositories || []}
                      />
                    );
                  }}
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

const mapStateToProps = (state: RootState) => ({
  loggedIn: state.loggedIn,
  repositories: state.repositories,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startLogIn: () => dispatch({ type: "START_LOG_IN" }),
  refresh: () => dispatch({ type: "REFRESH_REPOSITORIES" }),
  loadRepositories: () => dispatch({ type: "START_LOAD_REPOSITORIES" }),
  loadUser: () => dispatch({ type: "START_LOAD_USER" }),
  setGridState: (gridState: GridState) =>
    dispatch({
      type: "SET_GRID_STATE",
      gridState,
    }),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
const stylist = withStyles(styles);

export default stylist(connector(App));
