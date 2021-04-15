import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../..";

export default function LoginStateSwitch({
  children,
  selectedLoginState,
}: {
  children: ReactNode;
  selectedLoginState: boolean;
}) {
  const loggedIn = useSelector(
    (state: RootState) => state.userLoginReducer.login
  );

  if (loggedIn === selectedLoginState) {
    return <>{children}</>;
  }
  return null;
}
