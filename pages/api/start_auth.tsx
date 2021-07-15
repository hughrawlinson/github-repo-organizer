import { NextApiRequest, NextApiResponse } from "next";

const URL =
  process.env.REDIRECT_URL || "https://github-repo-organizer.vercel.app";
const REDIRECT_URI = `${URL}/api/redirect_intercept`;

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (typeof request.query.redirect_uri !== "string") {
    throw new Error("Missing redirect_uri");
  }
  if (Array.isArray(request.query.redirect_uri)) {
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
    state: Buffer.from(request.query.redirect_uri, "binary").toString("base64"),
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const githubAuthURL = `${GITHUB_AUTHORIZE_URL}?${queryString}`;
  console.log(githubAuthURL);
  response.redirect(githubAuthURL);
}
