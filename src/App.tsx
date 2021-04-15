import { Theme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./features/Routes";
import { RootState, useAppDispatch } from ".";
import {
  DrawerMenuToggleButton,
  DrawerMenuWrapper,
  DrawerMenu,
} from "./components/DrawerMenu";
import { refresh } from "./reducers";
import LoginButton from "./features/UserLogin/LoginButton";
import LoginStateSwitch from "./features/UserLogin/LoginStateSwitch";

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
  const dispatch = useAppDispatch();
  return (
    <DrawerMenuWrapper>
      <CssBaseline />
      <Router>
        <div className="App">
          <AppBar>
            <Toolbar>
              <LoginStateSwitch selectedLoginState={true}>
                <DrawerMenuToggleButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                />
              </LoginStateSwitch>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                GitHub Repo Organizer
              </Typography>
              <LoginButton color="inherit" />
              <LoginStateSwitch selectedLoginState={true}>
                <Button onClick={() => dispatch(refresh())} color="inherit">
                  Refresh
                </Button>
              </LoginStateSwitch>
            </Toolbar>
          </AppBar>
          <DrawerMenu />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Routes />
          </main>
        </div>
      </Router>
    </DrawerMenuWrapper>
  );
}

export default withStyles(styles)(App);
