import { Route, Switch } from "react-router-dom";
import { LoginStateSwitch } from "../UserLogin";
import LogInPage from "../../pages/LogIn";
import ReposPage from "../../pages/Repos";
import TopicsPage from "../../pages/Topics";
import LicensesPage from "../../pages/Licenses";
import LanguagesPage from "../../pages/Languages";

export default function Router() {
  return (
    <>
      <LoginStateSwitch selectedLoginState={false}>
        <LogInPage />
      </LoginStateSwitch>
      <LoginStateSwitch selectedLoginState={true}>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={ReposPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/topics"}
            component={TopicsPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/licenses"}
            component={LicensesPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/languages"}
            component={LanguagesPage}
          />
        </Switch>
      </LoginStateSwitch>
    </>
  );
}
