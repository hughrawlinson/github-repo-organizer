const URL =
  process.env.REDIRECT_URL || "https://github-repo-organizer.vercel.app";
const REDIRECT_URI = `${URL}/api/redirect_intercept`;

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";

export default function handler(request, response) {
  const queryParams = {
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: request.query.scope || null,
    state: Buffer.from(request.query.redirect_uri, "binary").toString("base64"),
  };
  const queryString = new URLSearchParams(queryParams).toString();
  const githubAuthURL = `${GITHUB_AUTHORIZE_URL}?${queryString}`;
  console.log(githubAuthURL);
  response.redirect(githubAuthURL);
}
