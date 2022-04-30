import { LoginStateSwitch } from "../../../features/UserLogin";
import LoginPage from "../../../features/LoginPage";
import { lazy } from "react";

// const DynamicRepos = dynamic(() => import("../../../features/ReposPage"), {
//   ssr: false,
// });
const DynamicRepos = lazy(() => import("../../../features/ReposPage"));

export default function MyRepositories() {
  return (
    <>
      <LoginStateSwitch selectedLoginState={false}>
        <LoginPage />
      </LoginStateSwitch>
      <LoginStateSwitch selectedLoginState={true}>
        <DynamicRepos />
      </LoginStateSwitch>
    </>
  );
}

export {};
