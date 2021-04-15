import { Theme, WithStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./features/Routes";
import { RootState, useAppDispatch } from ".";
import { DrawerMenuWrapper, DrawerMenu } from "./components/DrawerMenu";
import TopNav from "./features/TopNav";

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

function App({ classes }: WithStyles<typeof styles>) {
  const repositories = useSelector(
    (state: RootState) => state.reducer.repositories
  );
  const dispatch = useAppDispatch();
  return (
    <DrawerMenuWrapper>
      <CssBaseline />
      <Router>
        <div className="App">
          <TopNav />
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
