import { useEffect, useState } from "react";
import { useLogin } from "../UserLogin";
import { Repository } from "./Repository";
import { isAuthorizedUseLogin } from "../UserLogin/useLogin";
import loadViaApolloClient from "./loadViaApolloClient";

async function recurseLoad(
  accessToken: string,
  login: string,
  repos: Repository[],
  setRepositories: (r: Repository[]) => any,
  endCursor?: string
) {
  const [loadedRepos, totalCount, newEndCursor] = await loadViaApolloClient(
    accessToken,
    login,
    endCursor
  );

  const newRepos = [...repos, ...loadedRepos];

  if (newRepos.length < totalCount) {
    recurseLoad(accessToken, login, newRepos, setRepositories, newEndCursor);
  }

  setRepositories(newRepos);
}

export function useRepositories(): [Repository[], () => any] {
  const login = useLogin();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    (async () => {
      if (isAuthorizedUseLogin(login)) {
        recurseLoad(
          login.accessToken,
          login.user.login,
          repositories,
          setRepositories
        );
      }
    })();
  }, []);
  return [repositories, () => setRepositories([])];
}
