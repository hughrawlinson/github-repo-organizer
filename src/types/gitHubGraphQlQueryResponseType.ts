// To parse this data:
//
//   import { Convert, GitHubRepoQueryResponseType } from "./file";
//
//   const gitHubRepoQueryResponseType = Convert.toGitHubRepoQueryResponseType(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface GitHubRepoQueryResponseType {
  data: Data;
  errors: Error[];
}

export interface Data {
  viewer: Viewer;
}

export interface Viewer {
  repositories: Repositories;
}

export interface Repositories {
  pageInfo: PageInfo;
  totalCount: number;
  nodes: RepositoriesNode[];
}

export interface RepositoriesNode {
  id: string;
  description: null | string;
  name: string;
  createdAt: Date;
  repositoryTopics: RepositoryTopics;
  stargazers: Issues;
  primaryLanguage: Age | null;
  isPrivate: boolean;
  isArchived: boolean;
  issues: Issues;
  pullRequests: Issues;
  owner: Owner;
  nameWithOwner: string;
  url: string;
  isFork: boolean;
  licenseInfo: LicenseInfo | null;
  vulnerabilityAlerts: VulnerabilityAlerts;
  collaborators: Collaborators | null;
}

export interface Collaborators {
  nodes: CollaboratorsNode[];
}

export interface CollaboratorsNode {
  name: string | null;
  login: string;
}

export interface Issues {
  totalCount: number;
}

export interface LicenseInfo {
  name: string;
  nickname: null | string;
}

export interface Owner {
  login: string;
}

export interface Age {
  name: string;
}

export interface RepositoryTopics {
  nodes: RepositoryTopicsNode[];
}

export interface RepositoryTopicsNode {
  topic: Topic;
}

export interface Topic {
  id: string;
  name: string;
}

export interface VulnerabilityAlerts {
  nodes: VulnerabilityAlertsNode[];
}

export interface VulnerabilityAlertsNode {
  securityVulnerability: SecurityVulnerability;
}

export interface SecurityVulnerability {
  package: Age;
  advisory: Advisory;
}

export interface Advisory {
  description: string;
  summary: string;
}

export interface PageInfo {
  endCursor: string;
}

export interface Error {
  type: Type;
  path: Array<string | number>;
  locations: Location[];
  message: ErrorMessage;
}

export interface Location {
  line: number;
  column: number;
}

export type ErrorMessage = string;

export enum Type {
  Forbidden = "FORBIDDEN",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  static toGitHubRepoQueryResponseType(
    json: string
  ): GitHubRepoQueryResponseType {
    return cast(JSON.parse(json), r("GitHubRepoQueryResponseType"));
  }

  static gitHubRepoQueryResponseTypeToJson(
    value: GitHubRepoQueryResponseType
  ): string {
    return JSON.stringify(
      uncast(value, r("GitHubRepoQueryResponseType")),
      null,
      2
    );
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
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

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
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
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  GitHubRepoQueryResponseType: o(
    [
      { json: "data", js: "data", typ: r("Data") },
      { json: "errors", js: "errors", typ: a(r("Error")) },
    ],
    false
  ),
  Data: o([{ json: "viewer", js: "viewer", typ: r("Viewer") }], false),
  Viewer: o(
    [{ json: "repositories", js: "repositories", typ: r("Repositories") }],
    false
  ),
  Repositories: o(
    [
      { json: "pageInfo", js: "pageInfo", typ: r("PageInfo") },
      { json: "totalCount", js: "totalCount", typ: 0 },
      { json: "nodes", js: "nodes", typ: a(r("RepositoriesNode")) },
    ],
    false
  ),
  RepositoriesNode: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "description", js: "description", typ: u(null, "") },
      { json: "name", js: "name", typ: "" },
      { json: "createdAt", js: "createdAt", typ: Date },
      {
        json: "repositoryTopics",
        js: "repositoryTopics",
        typ: r("RepositoryTopics"),
      },
      { json: "stargazers", js: "stargazers", typ: r("Issues") },
      {
        json: "primaryLanguage",
        js: "primaryLanguage",
        typ: u(r("Age"), null),
      },
      { json: "isPrivate", js: "isPrivate", typ: true },
      { json: "isArchived", js: "isArchived", typ: true },
      { json: "issues", js: "issues", typ: r("Issues") },
      { json: "pullRequests", js: "pullRequests", typ: r("Issues") },
      { json: "owner", js: "owner", typ: r("Owner") },
      { json: "nameWithOwner", js: "nameWithOwner", typ: "" },
      { json: "url", js: "url", typ: "" },
      { json: "isFork", js: "isFork", typ: true },
      {
        json: "licenseInfo",
        js: "licenseInfo",
        typ: u(r("LicenseInfo"), null),
      },
      {
        json: "vulnerabilityAlerts",
        js: "vulnerabilityAlerts",
        typ: r("VulnerabilityAlerts"),
      },
      {
        json: "collaborators",
        js: "collaborators",
        typ: u(r("Collaborators"), null),
      },
    ],
    false
  ),
  Collaborators: o(
    [{ json: "nodes", js: "nodes", typ: a(r("CollaboratorsNode")) }],
    false
  ),
  CollaboratorsNode: o(
    [
      { json: "name", js: "name", typ: u(r("Name"), null) },
      { json: "login", js: "login", typ: "" },
    ],
    false
  ),
  Issues: o([{ json: "totalCount", js: "totalCount", typ: 0 }], false),
  LicenseInfo: o(
    [
      { json: "name", js: "name", typ: "" },
      { json: "nickname", js: "nickname", typ: u(null, "") },
    ],
    false
  ),
  Owner: o([{ json: "login", js: "login", typ: r("Login") }], false),
  Age: o([{ json: "name", js: "name", typ: "" }], false),
  RepositoryTopics: o(
    [{ json: "nodes", js: "nodes", typ: a(r("RepositoryTopicsNode")) }],
    false
  ),
  RepositoryTopicsNode: o(
    [{ json: "topic", js: "topic", typ: r("Topic") }],
    false
  ),
  Topic: o(
    [
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
    ],
    false
  ),
  VulnerabilityAlerts: o(
    [{ json: "nodes", js: "nodes", typ: a(r("VulnerabilityAlertsNode")) }],
    false
  ),
  VulnerabilityAlertsNode: o(
    [
      {
        json: "securityVulnerability",
        js: "securityVulnerability",
        typ: r("SecurityVulnerability"),
      },
    ],
    false
  ),
  SecurityVulnerability: o(
    [
      { json: "package", js: "package", typ: r("Age") },
      { json: "advisory", js: "advisory", typ: r("Advisory") },
    ],
    false
  ),
  Advisory: o(
    [
      { json: "description", js: "description", typ: "" },
      { json: "summary", js: "summary", typ: "" },
    ],
    false
  ),
  PageInfo: o([{ json: "endCursor", js: "endCursor", typ: "" }], false),
  Error: o(
    [
      { json: "type", js: "type", typ: r("Type") },
      { json: "path", js: "path", typ: a(u(r("PathEnum"), 0)) },
      { json: "locations", js: "locations", typ: a(r("Location")) },
      { json: "message", js: "message", typ: r("Message") },
    ],
    false
  ),
  Location: o(
    [
      { json: "line", js: "line", typ: 0 },
      { json: "column", js: "column", typ: 0 },
    ],
    false
  ),
  Name: [
    "Axel Samuelsson",
    "Edward Knapp",
    "Hugh Rawlinson",
    "Joe ",
    "Lonney",
    "Maria Katsourani",
    "Max Sandelin",
    "Naomi Pentrel",
    "Nevo Segal",
  ],
  Login: [
    "hughrawlinson",
    "joenash",
    "limbero",
    "meyda",
    "nevosegal",
    "spotify",
    "themaxsandelin",
  ],
  Message: ["Must have push access to view repository collaborators."],
  PathEnum: ["collaborators", "nodes", "repositories", "viewer"],
  Type: ["FORBIDDEN"],
};
