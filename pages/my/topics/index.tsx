import dynamic from "next/dynamic";
import { LoginStateSwitch } from "../../../features/UserLogin";
import LoginPage from "../../../features/LoginPage";

const DynamicPage = dynamic(() => import("../../../features/TopicsPage"), {
  ssr: false,
});

export default function MyTopics() {
  return (
    <>
      <LoginStateSwitch selectedLoginState={false}>
        <LoginPage />
      </LoginStateSwitch>
      <LoginStateSwitch selectedLoginState={true}>
        <DynamicPage />
      </LoginStateSwitch>
    </>
  );
}

export {};
