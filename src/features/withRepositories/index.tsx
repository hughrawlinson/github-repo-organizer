import { ComponentProps, JSXElementConstructor } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../..";

type WithRepositoriesArgs = {
  Component: JSXElementConstructor<any>;
};

export default function withRepositories({ Component }: WithRepositoriesArgs) {
  const repositories = useSelector(
    (state: RootState) => state.reducer.repositories
  );

  return (props: ComponentProps<typeof Component>) => {
    <Component repositories={repositories} {...props} />;
  };
}
