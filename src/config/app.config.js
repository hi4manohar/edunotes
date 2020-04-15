export const appConfig = {
  // apiUrl: "http://localhost:3000";
  apiUrl: "https://edunotes.fresherscode.com"
};

export const appVersion = '1.0.1';

export const apiPath = "api/";

export const APP_HOST = process.env.APP_HOST || "localhost";
export const APP_PORT = process.env.APP_PORT || 8079;
export const HOST = `${APP_HOST}:${APP_PORT}/`;

export const API_URL = `http://${HOST}${apiPath}`;
// export const API_URL = `https://edunotes.fresherscode.com/${apiPath}`;
