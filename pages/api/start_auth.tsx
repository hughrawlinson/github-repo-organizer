import { NextApiRequest, NextApiResponse } from "next";

const URL =
  process.env.REDIRECT_URL || "https://github-repo-organizer.vercel.app";
const REDIRECT_URI = `${URL}/api/redirect_intercept`;

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { redirect_uri } = request.query;
  const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;

  // // I have the sads because typescript doesn't believe in switch(true)
  // switch (true) {
  //   case typeof redirect_uri === "string" && redirect_uri.length === 0:
  //     redirect_uri;
  //     throw new Error("Please provide a redirect URI");
  //   case Array.isArray(redirect_uri):
  //     throw new Error("Please provide only one redirect URI");
  //   case typeof GITHUB_CLIENT_ID === "undefined":
  //     throw new Error(
  //       "Please provide a GITHUB_CLIENT_ID as an environment variable"
  //     );
  // }
  if (typeof redirect_uri !== "string") {
    throw new Error("Missing redirect_uri");
  }
  if (Array.isArray(redirect_uri)) {
    throw new Error("Please provide only one redirect_uri");
  }
  if (!process.env.GITHUB_CLIENT_ID) {
    throw new Error("Missing GITHUB_CLIENT_ID");
  }

  const queryParams = {
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: Array.isArray(request.query.scope)
      ? request.query.scope.join(",")
      : request.query.scope || "",
    state: Buffer.from(redirect_uri, "binary").toString("base64"),
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const githubAuthURL = `${GITHUB_AUTHORIZE_URL}?${queryString}`;
  console.log(githubAuthURL);
  response.redirect(githubAuthURL);
}
