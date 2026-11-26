import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3190",
    launchOptions: process.env.CHROMIUM_PATH
      ? {
          executablePath: process.env.CHROMIUM_PATH,
          args: ["--no-sandbox", "--disable-gpu"],
        }
      : {},
  },
  webServer: {
    command: "npm run start -- --hostname 127.0.0.1 --port 3190",
    url: "http://127.0.0.1:3190",
    reuseExistingServer: false,
  },
});
