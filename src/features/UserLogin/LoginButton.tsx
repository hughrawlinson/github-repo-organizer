import { Button } from "@material-ui/core";
import { ComponentProps } from "react";
import { useAppDispatch } from "../..";
import LoginStateSwitch from "./LoginStateSwitch";
import { startLogin } from "./userLoginSlice";

export default function LoginButton(props: ComponentProps<typeof Button>) {
  const dispatch = useAppDispatch();
  return (
    <LoginStateSwitch selectedLoginState={false}>
      <Button
        onClick={() => {
          dispatch(startLogin());
        }}
        {...props}
      >
        Login
      </Button>
    </LoginStateSwitch>
  );
}
