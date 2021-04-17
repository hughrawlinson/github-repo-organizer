import { ReactNode } from "react";
import { useLogin } from "./useLogin";

type LoginStateSwitchProps = {
  children: ReactNode;
  selectedLoginState: boolean;
};

export default function LoginStateSwitch({
  children,
  selectedLoginState,
}: LoginStateSwitchProps) {
  const login: any = useLogin();

  // const loggedIn = isAuthorizedUseLogin(login);
  const loggedIn = login.hasOwnProperty("accessToken");

  if (loggedIn === selectedLoginState) {
    return <>{children}</>;
  }

  return null;
}
