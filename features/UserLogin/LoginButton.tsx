import { Button } from "@material-ui/core";
import { ComponentProps } from "react";
import LoginStateSwitch from "./LoginStateSwitch";
import { useLogin } from "./useLogin";

export default function LoginButton(props: ComponentProps<typeof Button>) {
  const useLoginResult: any = useLogin();
  // if (isAuthorizedUseLogin(useLoginResult)) {
  //   return null;
  // }
  if (useLoginResult.hasOwnProperty("accessToken")) {
    return null;
  }
  return (
    <LoginStateSwitch selectedLoginState={false}>
      <Button onClick={() => useLoginResult.startLogin()} {...props}>
        Login
      </Button>
    </LoginStateSwitch>
  );
}
