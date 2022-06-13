import { Octokit } from "@octokit/rest";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import createLocalStorageStateHook from "use-local-storage-state";

const authURL = "/api/start_auth";

export type UnauthorizedUseLogin = {
  startLogin: () => any;
};

export function isUnauthorizedUseLogin(
  login: unknown
): login is UnauthorizedUseLogin {
  return (login as UnauthorizedUseLogin).startLogin !== undefined;
}

const octokit_outside = new Octokit();

type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

type LoginDetails = {
  accessToken: string;
  user: Await<
    ReturnType<typeof octokit_outside.users.getAuthenticated>
  >["data"];
};

export type AuthorizedUseLogin = LoginDetails & {
  invalidateStoredLogin: () => any;
};

export function isAuthorizedUseLogin(
  login: unknown
): login is AuthorizedUseLogin {
  return typeof (login as AuthorizedUseLogin).accessToken === "string";
}

export type UseLogin = UnauthorizedUseLogin | AuthorizedUseLogin;

const startLoginResult = {
  startLogin: function startLogin() {
    const query = {
      redirect_uri: encodeURIComponent(
        window.location.origin + "/my/repositories"
      ),
      scope: "repo",
    };

    const authProxyUrl = `${authURL}?${new URLSearchParams(query)}`;

    window.location.assign(authProxyUrl);
  },
};

export function useLogin(): UseLogin {
  const [storedLoginDetails, setStoredLoginDetails] =
    useLocalStorageState<LoginDetails | null>("LoginDetails", {
      defaultValue: null,
    });

  useEffect(() => {
    if (!storedLoginDetails) {
      const query = new URLSearchParams(window.location.search);
      const accessToken = query.get("access_token");
      if (accessToken) {
        let cancelled = false;
        (async () => {
          const octokit = new Octokit({
            auth: `token ${accessToken}`,
          });
          const user = (await octokit.users.getAuthenticated()).data;
          if (!cancelled) {
            setStoredLoginDetails({
              accessToken,
              user,
            });
          }
        })();
        return () => {
          cancelled = true;
        };
      }
    }
  }, [setStoredLoginDetails, Octokit]);

  if (storedLoginDetails) {
    return {
      ...storedLoginDetails,
      invalidateStoredLogin: function () {
        setStoredLoginDetails(null);
      },
    };
  }

  return startLoginResult;
}
