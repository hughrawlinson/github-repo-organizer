import { useEffect, useState } from "react";
import { useLogin } from "../UserLogin";
import { Repository } from "./Repository";
import { isAuthorizedUseLogin } from "../UserLogin/useLogin";
import loadViaApolloClient from "./loadViaApolloClient";

type RecurseLoadParams = {
  accessToken: string;
  login: string;
  repos: Repository[];
  search?: string;
};

async function recurseLoad(
  { accessToken, login, repos, search }: RecurseLoadParams,
  setRepositories: (r: Repository[]) => any,
  endCursor?: string
) {
  const [loadedRepos, totalCount, newEndCursor] = await loadViaApolloClient(
    {
      accessToken,
      login,
      search,
    },
    endCursor
  );

  const newRepos = [...repos, ...loadedRepos];

  if (newRepos.length < totalCount) {
    recurseLoad(
      { accessToken, login, repos: newRepos, search },
      setRepositories,
      newEndCursor
    );
  }

  setRepositories(newRepos);
}

type UseRepositoriesProps = {
  search?: string;
};

export function useRepositories(
  props: UseRepositoriesProps
): [Repository[], () => any] {
  const login = useLogin();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    (async () => {
      if (isAuthorizedUseLogin(login)) {
        recurseLoad(
          {
            accessToken: login.accessToken,
            login: login.user.login,
            repos: repositories,
            search: props && props.search,
          },
          setRepositories
        );
      }
    })();
  }, []);
  return [repositories, () => setRepositories([])];
}
