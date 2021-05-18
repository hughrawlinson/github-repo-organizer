import dynamic from "next/dynamic";
import LoginPage from "../../features/LoginPage";
import { LoginStateSwitch } from "../../features/UserLogin";

const DynamicPage = dynamic(() => import("../../features/LanguagesPage"), {
  ssr: false,
});

export default function MyLanguages() {
  <>
    <LoginStateSwitch selectedLoginState={false}>
      <LoginPage />
    </LoginStateSwitch>
    <LoginStateSwitch selectedLoginState={true}>
      <DynamicPage />
    </LoginStateSwitch>
  </>;
}

export {};
