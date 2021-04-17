exports.ids = [11];
exports.modules = {

/***/ "5aTT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useRepositories; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./features/UserLogin/index.tsx + 3 modules
var UserLogin = __webpack_require__("5lTQ");

// EXTERNAL MODULE: external "@octokit/graphql"
var graphql_ = __webpack_require__("UpDW");

// CONCATENATED MODULE: ./features/useRepositories/gitHubGraphQlQuery.tsx
const query = endCursor => `query {
    viewer {
      repositories (first:40${endCursor ? ', after:"' + endCursor + '"' : ""}) {
        pageInfo {
          endCursor
        }
        totalCount
        nodes {
          id
          name
          description
          createdAt
          stargazers {
            totalCount
          }
          primaryLanguage {
            name
          }
          isPrivate
          isArchived
          issues (states: OPEN) {
            totalCount
          }
          pullRequests (states: OPEN) {
            totalCount
          }
          owner {
            login
          }
          nameWithOwner
          url
          isFork
          licenseInfo {
            name
            nickname
          }
          vulnerabilityAlerts (first:50){
            nodes {
              securityVulnerability {
                package {
                  name
                }
                advisory {
                  description
                  summary
                }
              }
            }
          }
          collaborators (first: 50){
            nodes {
              name
              login
            }
          }
        repositoryTopics(first:100) {
          nodes {
            topic {
              id
              name
            }
          }
        }
      }
    }
  }
}
`;

/* harmony default export */ var gitHubGraphQlQuery = (query);
// CONCATENATED MODULE: ./features/useRepositories/gitHubGraphQlQueryResponseType.ts
// To parse this data:
//
//   import { Convert, GitHubRepoQueryResponseType } from "./file";
//
//   const gitHubRepoQueryResponseType = Convert.toGitHubRepoQueryResponseType(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
let Type; // Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime

(function (Type) {
  Type["Forbidden"] = "FORBIDDEN";
})(Type || (Type = {}));

class Convert {
  static toGitHubRepoQueryResponseType(json) {
    return cast(JSON.parse(json), r("GitHubRepoQueryResponseType"));
  }

  static gitHubRepoQueryResponseTypeToJson(value) {
    return JSON.stringify(uncast(value, r("GitHubRepoQueryResponseType")), null, 2);
  }

}

function invalidValue(typ, val, key = "") {
  if (key) {
    throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }

  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ) {
  if (typ.jsonToJS === undefined) {
    const map = {};
    typ.props.forEach(p => map[p.json] = {
      key: p.js,
      typ: p.typ
    });
    typ.jsonToJS = map;
  }

  return typ.jsonToJS;
}

function jsToJSONProps(typ) {
  if (typ.jsToJSON === undefined) {
    const map = {};
    typ.props.forEach(p => map[p.js] = {
      key: p.json,
      typ: p.typ
    });
    typ.jsToJSON = map;
  }

  return typ.jsToJSON;
}

function transform(val, typ, getProps, key = "") {
  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs, val) {
    // val must validate against one typ in typs
    const l = typs.length;

    for (let i = 0; i < l; i++) {
      const typ = typs[i];

      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }

    return invalidValue(typs, val);
  }

  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val) {
    if (val === null) {
      return null;
    }

    const d = new Date(val);

    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }

    return d;
  }

  function transformObject(props, additional, val) {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }

    const result = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;

  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }

  if (typ === false) return invalidValue(typ, val);

  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }

  if (Array.isArray(typ)) return transformEnum(typ, val);

  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val) : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val) : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val) : invalidValue(typ, val);
  } // Numbers can be parsed by Date but shouldn't be.


  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast(val, typ) {
  return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps);
}

function a(typ) {
  return {
    arrayItems: typ
  };
}

function u(...typs) {
  return {
    unionMembers: typs
  };
}

function o(props, additional) {
  return {
    props,
    additional
  };
}

function m(additional) {
  return {
    props: [],
    additional
  };
}

function r(name) {
  return {
    ref: name
  };
}

const typeMap = {
  GitHubRepoQueryResponseType: o([{
    json: "data",
    js: "data",
    typ: r("Data")
  }, {
    json: "errors",
    js: "errors",
    typ: a(r("Error"))
  }], false),
  Data: o([{
    json: "viewer",
    js: "viewer",
    typ: r("Viewer")
  }], false),
  Viewer: o([{
    json: "repositories",
    js: "repositories",
    typ: r("Repositories")
  }], false),
  Repositories: o([{
    json: "pageInfo",
    js: "pageInfo",
    typ: r("PageInfo")
  }, {
    json: "totalCount",
    js: "totalCount",
    typ: 0
  }, {
    json: "nodes",
    js: "nodes",
    typ: a(r("RepositoriesNode"))
  }], false),
  RepositoriesNode: o([{
    json: "id",
    js: "id",
    typ: ""
  }, {
    json: "description",
    js: "description",
    typ: u(null, "")
  }, {
    json: "name",
    js: "name",
    typ: ""
  }, {
    json: "createdAt",
    js: "createdAt",
    typ: Date
  }, {
    json: "repositoryTopics",
    js: "repositoryTopics",
    typ: r("RepositoryTopics")
  }, {
    json: "stargazers",
    js: "stargazers",
    typ: r("Issues")
  }, {
    json: "primaryLanguage",
    js: "primaryLanguage",
    typ: u(r("Age"), null)
  }, {
    json: "isPrivate",
    js: "isPrivate",
    typ: true
  }, {
    json: "isArchived",
    js: "isArchived",
    typ: true
  }, {
    json: "issues",
    js: "issues",
    typ: r("Issues")
  }, {
    json: "pullRequests",
    js: "pullRequests",
    typ: r("Issues")
  }, {
    json: "owner",
    js: "owner",
    typ: r("Owner")
  }, {
    json: "nameWithOwner",
    js: "nameWithOwner",
    typ: ""
  }, {
    json: "url",
    js: "url",
    typ: ""
  }, {
    json: "isFork",
    js: "isFork",
    typ: true
  }, {
    json: "licenseInfo",
    js: "licenseInfo",
    typ: u(r("LicenseInfo"), null)
  }, {
    json: "vulnerabilityAlerts",
    js: "vulnerabilityAlerts",
    typ: r("VulnerabilityAlerts")
  }, {
    json: "collaborators",
    js: "collaborators",
    typ: u(r("Collaborators"), null)
  }], false),
  Collaborators: o([{
    json: "nodes",
    js: "nodes",
    typ: a(r("CollaboratorsNode"))
  }], false),
  CollaboratorsNode: o([{
    json: "name",
    js: "name",
    typ: u(r("Name"), null)
  }, {
    json: "login",
    js: "login",
    typ: ""
  }], false),
  Issues: o([{
    json: "totalCount",
    js: "totalCount",
    typ: 0
  }], false),
  LicenseInfo: o([{
    json: "name",
    js: "name",
    typ: ""
  }, {
    json: "nickname",
    js: "nickname",
    typ: u(null, "")
  }], false),
  Owner: o([{
    json: "login",
    js: "login",
    typ: r("Login")
  }], false),
  Age: o([{
    json: "name",
    js: "name",
    typ: ""
  }], false),
  RepositoryTopics: o([{
    json: "nodes",
    js: "nodes",
    typ: a(r("RepositoryTopicsNode"))
  }], false),
  RepositoryTopicsNode: o([{
    json: "topic",
    js: "topic",
    typ: r("Topic")
  }], false),
  Topic: o([{
    json: "id",
    js: "id",
    typ: ""
  }, {
    json: "name",
    js: "name",
    typ: ""
  }], false),
  VulnerabilityAlerts: o([{
    json: "nodes",
    js: "nodes",
    typ: a(r("VulnerabilityAlertsNode"))
  }], false),
  VulnerabilityAlertsNode: o([{
    json: "securityVulnerability",
    js: "securityVulnerability",
    typ: r("SecurityVulnerability")
  }], false),
  SecurityVulnerability: o([{
    json: "package",
    js: "package",
    typ: r("Age")
  }, {
    json: "advisory",
    js: "advisory",
    typ: r("Advisory")
  }], false),
  Advisory: o([{
    json: "description",
    js: "description",
    typ: ""
  }, {
    json: "summary",
    js: "summary",
    typ: ""
  }], false),
  PageInfo: o([{
    json: "endCursor",
    js: "endCursor",
    typ: ""
  }], false),
  Error: o([{
    json: "type",
    js: "type",
    typ: r("Type")
  }, {
    json: "path",
    js: "path",
    typ: a(u(r("PathEnum"), 0))
  }, {
    json: "locations",
    js: "locations",
    typ: a(r("Location"))
  }, {
    json: "message",
    js: "message",
    typ: r("Message")
  }], false),
  Location: o([{
    json: "line",
    js: "line",
    typ: 0
  }, {
    json: "column",
    js: "column",
    typ: 0
  }], false),
  Name: ["Axel Samuelsson", "Edward Knapp", "Hugh Rawlinson", "Joe ", "Lonney", "Maria Katsourani", "Max Sandelin", "Naomi Pentrel", "Nevo Segal"],
  Login: ["hughrawlinson", "joenash", "limbero", "meyda", "nevosegal", "spotify", "themaxsandelin"],
  Message: ["Must have push access to view repository collaborators."],
  PathEnum: ["collaborators", "nodes", "repositories", "viewer"],
  Type: ["FORBIDDEN"]
};
// CONCATENATED MODULE: ./features/useRepositories/index.tsx






async function load(accessToken, login, endCursor) {
  let data;

  try {
    const result = await Object(graphql_["graphql"])({
      query: gitHubGraphQlQuery(endCursor !== null && endCursor !== void 0 ? endCursor : ""),
      headers: {
        authorization: `token ${accessToken}`,
        accept: "application/vnd.github.vixen-preview+json"
      }
    });
    data = Convert.toGitHubRepoQueryResponseType(`{ data: ${result} }`).data;
  } catch (error) {
    console.log(error);
    data = error.data;
  }

  const repos = data.viewer.repositories.nodes.map(repo => ({
    id: repo.id,
    name: repo.name,
    nameWithOwner: repo.nameWithOwner,
    description: repo.description,
    createdAt: repo.createdAt,
    topics: repo.repositoryTopics.nodes.map(node => node.topic.name),
    stars: repo.stargazers.totalCount,
    language: (l => l && l.name)(repo.primaryLanguage),
    isPrivate: repo.isPrivate,
    isArchived: repo.isArchived,
    url: repo.url,
    owner: repo.owner.login,
    isFork: repo.isFork,
    licenseNickname: repo.licenseInfo && (repo.licenseInfo.nickname || repo.licenseInfo.name),
    vulnerabilityAlerts: repo.vulnerabilityAlerts.nodes,
    collaborators: repo.collaborators && repo.collaborators.nodes.filter(a => a.login !== login).map(collaborator => collaborator.login),
    issueCount: repo.issues.totalCount,
    pullRequestCount: repo.pullRequests.totalCount
  }));
  return [repos, data.viewer.repositories.totalCount, data.viewer.repositories.pageInfo.endCursor];
}

async function recurseLoad(accessToken, login, repos, setRepositories, endCursor) {
  const [loadedRepos, totalCount, newEndCursor] = await load(accessToken, login, endCursor);
  const newRepos = [...repos, ...loadedRepos];

  if (newRepos.length < totalCount) {
    recurseLoad(accessToken, login, newRepos, setRepositories, newEndCursor);
  }

  setRepositories(newRepos);
}

function useRepositories() {
  const login = Object(UserLogin["c" /* useLogin */])();
  const {
    0: repositories,
    1: setRepositories
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    let cancelled = false;

    (async () => {
      if (login.hasOwnProperty("accessToken")) {
        recurseLoad(login.accessToken, login.user.login, repositories, setRepositories);
      }
    })();
  }, []);
  return [repositories, () => setRepositories([])];
}

/***/ }),

/***/ "5lTQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ LoginButton; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ LoginStateSwitch; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ useLogin; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@octokit/rest"
var rest_ = __webpack_require__("+jo5");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "use-local-storage-state"
var external_use_local_storage_state_ = __webpack_require__("oH3S");

// CONCATENATED MODULE: ./features/UserLogin/useLogin.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const authURL = "https://github-auth-backend-hugh.glitch.me/start_auth";
// function isUnauthorizedUseLogin(login: unknown): login is UnauthorizedUseLogin {
//   return (login as UnauthorizedUseLogin).startLogin !== undefined;
// }
const octokit_outside = new rest_["Octokit"](); // type Await<T> = T extends {
//   then(onfulfilled?: (value: infer U) => unknown): unknown;
// }
//   ? U
//   : T;

const startLoginResult = {
  startLogin: function startLogin() {
    const query = {
      redirect_uri: window.location.origin + window.location.pathname,
      scope: "repo"
    };
    const authProxyUrl = `${authURL}?${new URLSearchParams(query)}`;
    window.location.assign(authProxyUrl);
  }
};
const useLoginDetails = Object(external_use_local_storage_state_["createLocalStorageStateHook"])("LoginDetails", null);
function useLogin() {
  const [storedLoginDetails, setStoredLoginDetails] = useLoginDetails();
  Object(external_react_["useEffect"])(() => {
    if (!storedLoginDetails) {
      const query = new URLSearchParams(window.location.search);
      const accessToken = query.get("access_token");

      if (accessToken) {
        let cancelled = false;

        (async () => {
          const octokit = new rest_["Octokit"]({
            auth: `token ${accessToken}`
          });
          const user = await octokit.users.getAuthenticated();

          if (!cancelled) {
            setStoredLoginDetails({
              accessToken,
              user
            });
          }
        })();

        return () => {
          cancelled = true;
        };
      }
    }
  }, [setStoredLoginDetails, rest_["Octokit"]]);

  if (storedLoginDetails) {
    return _objectSpread(_objectSpread({}, storedLoginDetails), {}, {
      invalidateStoredLogin: function () {
        setStoredLoginDetails(null);
      }
    });
  }

  return startLoginResult;
} // export { isUnauthorizedUseLogin, isAuthorizedUseLogin };
// CONCATENATED MODULE: ./features/UserLogin/LoginStateSwitch.tsx



function LoginStateSwitch({
  children,
  selectedLoginState
}) {
  const login = useLogin(); // const loggedIn = isAuthorizedUseLogin(login);

  const loggedIn = login.hasOwnProperty("accessToken");

  if (loggedIn === selectedLoginState) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: children
    });
  }

  return null;
}
// CONCATENATED MODULE: ./features/UserLogin/LoginButton.tsx


function LoginButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LoginButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LoginButton_ownKeys(Object(source), true).forEach(function (key) { LoginButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LoginButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LoginButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function LoginButton(props) {
  const useLoginResult = useLogin(); // if (isAuthorizedUseLogin(useLoginResult)) {
  //   return null;
  // }

  if (useLoginResult.hasOwnProperty("accessToken")) {
    return null;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginStateSwitch, {
    selectedLoginState: false,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], LoginButton_objectSpread(LoginButton_objectSpread({
      onClick: () => useLoginResult.startLogin()
    }, props), {}, {
      children: "Login"
    }))
  });
}
// CONCATENATED MODULE: ./features/UserLogin/index.tsx





/***/ }),

/***/ "ullS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ReposPage; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@devexpress/dx-react-grid-material-ui"
var dx_react_grid_material_ui_ = __webpack_require__("HsXW");

// EXTERNAL MODULE: external "@devexpress/dx-react-grid"
var dx_react_grid_ = __webpack_require__("P2TT");

// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/DateTypeProvider.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function DateTypeProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], _objectSpread({
    formatterComponent: ({
      value
    }) => {
      // TODO: the type from quicktype should handle this, not sure why it's like this.
      const d = new Date(value);
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: d.toLocaleDateString()
      });
    },
    availableFilterOperations: ["contains", "greaterThan", "lessThan", "greaterThanOrEqual", "lessThanOrEqual"]
  }, props));
}
// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/LinkTypeProvider.tsx


function LinkTypeProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LinkTypeProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LinkTypeProvider_ownKeys(Object(source), true).forEach(function (key) { LinkTypeProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LinkTypeProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LinkTypeProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function LinkTypeProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], LinkTypeProvider_objectSpread({
    formatterComponent: ({
      value: {
        href,
        title
      }
    }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: href,
      children: title
    })
  }, props));
}
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/ChipListProvider.tsx



function ChipListProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ChipListProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ChipListProvider_ownKeys(Object(source), true).forEach(function (key) { ChipListProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ChipListProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ChipListProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ChipListProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], ChipListProvider_objectSpread({
    formatterComponent: ({
      value
    }) => value ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: value.map(v => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Chip"], {
        style: {
          margin: "3px"
        },
        label: v
      }, v))
    }) : null,
    availableFilterOperations: ['search', 'empty']
  }, props));
}
// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/ArrayLengthProvider.tsx


function ArrayLengthProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArrayLengthProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArrayLengthProvider_ownKeys(Object(source), true).forEach(function (key) { ArrayLengthProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArrayLengthProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArrayLengthProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function ArrayLengthProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], ArrayLengthProvider_objectSpread({
    formatterComponent: ({
      value
    }) => value.length
  }, props));
}
// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/BooleanTypeProvider.tsx


function BooleanTypeProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BooleanTypeProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BooleanTypeProvider_ownKeys(Object(source), true).forEach(function (key) { BooleanTypeProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BooleanTypeProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BooleanTypeProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function BooleanTypeProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], BooleanTypeProvider_objectSpread({
    formatterComponent: ({
      value
    }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Chip"], {
      label: value ? "True" : "False"
    })
  }, props));
}
// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/CheckBoxProvider.tsx


function CheckBoxProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CheckBoxProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CheckBoxProvider_ownKeys(Object(source), true).forEach(function (key) { CheckBoxProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CheckBoxProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CheckBoxProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function CheckBoxProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], CheckBoxProvider_objectSpread({
    formatterComponent: ({
      value
    }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "checkbox",
      value: value
    })
  }, props));
}
// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/index.tsx







// CONCATENATED MODULE: ./features/RepositoryTable/DataTypeProviders/NumberProvider.tsx


function NumberProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function NumberProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { NumberProvider_ownKeys(Object(source), true).forEach(function (key) { NumberProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { NumberProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NumberProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function NumberProvider(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["DataTypeProvider"], NumberProvider_objectSpread({
    availableFilterOperations: ["equal", "greaterThan", "lessThan", "greaterThanOrEqual", "lessThanOrEqual"]
  }, props));
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./features/useRepositories/index.tsx + 2 modules
var useRepositories = __webpack_require__("5aTT");

// CONCATENATED MODULE: ./features/RepositoryTable/RepositoryTable.tsx









const tableColumnExtensions = [{
  columnName: "topics",
  wordWrapEnabled: true
}, {
  columnName: "description",
  wordWrapEnabled: true
}];
const defaultVisibleColumns = ["isPrivate", "isArchived", "isFork", "owner", "licenseNickname", "vulnerabilityAlerts", "collaborators", "issueCount"];
function RepositoryTable() {
  const {
    0: filteringState,
    1: setFilteringState
  } = Object(external_react_["useState"])([]);
  const {
    0: sortingState,
    1: setSortingState
  } = Object(external_react_["useState"])([]);
  const {
    0: searchState,
    1: setSearchState
  } = Object(external_react_["useState"])("");
  const {
    0: columnVisibilityState,
    1: setColumnVisibilityState
  } = Object(external_react_["useState"])(defaultVisibleColumns);
  const [repositories] = Object(useRepositories["a" /* useRepositories */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paper_default.a, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(dx_react_grid_material_ui_["Grid"], {
      columns: [{
        name: "selected",
        title: "Selected",
        getCellValue: row => false
      }, {
        name: "name",
        title: "Name",
        getCellValue: row => ({
          href: row.url,
          title: row.name
        })
      }, {
        name: "description",
        title: "Description"
      }, {
        name: "createdAt",
        title: "Created At"
      }, {
        name: "topics",
        title: "Topics"
      }, {
        name: "stars",
        title: "Stars"
      }, {
        name: "language",
        title: "Language"
      }, {
        name: "owner",
        title: "Owner"
      }, {
        name: "isPrivate",
        title: "Private"
      }, {
        name: "isArchived",
        title: "Archived"
      }, {
        name: "isFork",
        title: "Fork"
      }, {
        name: "licenseNickname",
        title: "License"
      }, {
        name: "vulnerabilityAlerts",
        title: "Vulnerability Alerts"
      }, {
        name: "collaborators",
        title: "Collaborators"
      }, {
        name: "issueCount",
        title: "Open Issue Count"
      }, {
        name: "pullRequestCount",
        title: "Open Pull Request Count"
      }],
      rows: repositories,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DateTypeProvider, {
        for: ["createdAt"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkTypeProvider, {
        for: ["name"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChipListProvider, {
        for: ["topics", "collaborators"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BooleanTypeProvider, {
        for: ["isPrivate", "isArchived", "isFork"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrayLengthProvider, {
        for: ["vulnerabilityAlerts"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckBoxProvider, {
        for: ["selected"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NumberProvider, {
        for: ["stars", "pullRequestCount", "issueCount"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["FilteringState"], {
        defaultFilters: [],
        filters: filteringState,
        onFiltersChange: filters => setFilteringState(filters)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["SortingState"], {
        defaultSorting: [],
        sorting: sortingState,
        onSortingChange: sorting => setSortingState(sorting)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["PagingState"], {
        defaultCurrentPage: 0,
        pageSize: 40
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["SearchState"], {
        value: searchState,
        onValueChange: search => setSearchState(search)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["IntegratedFiltering"], {
        columnExtensions: [{
          columnName: "topics",
          predicate: (_, filter, row) => filter.operation === "empty" ? row.topics.length === 0 : row.topics.reduce((acc, el) => filter.value && el.includes(filter.value) || acc, false)
        }, {
          columnName: "collaborators",
          predicate: (_, filter, row) => {
            var _row$collaborators;

            return filter.operation === "empty" ? row.collaborators.length === 0 : (_row$collaborators = row.collaborators) === null || _row$collaborators === void 0 ? void 0 : _row$collaborators.reduce((acc, el) => filter.value && el.includes(filter.value) || acc, false);
          }
        }]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["IntegratedSorting"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_["IntegratedPaging"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["Table"], {
        columnExtensions: tableColumnExtensions
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["TableHeaderRow"], {
        showSortingControls: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["TableFilterRow"], {
        showFilterSelector: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["TableColumnVisibility"], {
        hiddenColumnNames: columnVisibilityState,
        onHiddenColumnNamesChange: columnVisibility => setColumnVisibilityState(columnVisibility)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["Toolbar"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["SearchPanel"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["ColumnChooser"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dx_react_grid_material_ui_["PagingPanel"], {})]
    })
  });
}
// CONCATENATED MODULE: ./features/RepositoryTable/index.tsx


// CONCATENATED MODULE: ./features/ReposPage/index.tsx



function ReposPage() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RepositoryTable, {})
  });
}

/***/ })

};;