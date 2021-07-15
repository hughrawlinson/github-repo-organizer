import { NextApiRequest, NextApiResponse } from "next";

const URL =
  process.env.REDIRECT_URL || "https://github-repo-organizer.vercel.app";
const REDIRECT_URI = `${URL}/api/redirect_intercept`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { code, state } = request.query;

  if (Array.isArray(state) || Array.isArray(code)) {
    throw new Error("Please provide only one state or code");
  }

  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error("Please provide GitHub client id and secret");
  }

  const params = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    code,
    state,
  };
  const originUri = decodeURIComponent(
    Buffer.from(state, "base64").toString("binary")
  );

  const result = await fetch(
    `https://github.com/login/oauth/access_token?${new URLSearchParams(
      params
    ).toString()}`,
    {
      method: "POST",
      body: new URLSearchParams(params).toString(),
    }
  );
  const text = await result.text();
  response.redirect(`${originUri}?${text}`);
}
