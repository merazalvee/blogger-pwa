/** @type {import("./types").Config} */
const config = {
  version: "1.0",
  name: "BlogSeba - The best Blogging Platform in Bangladesh",
  shortName: "BlogSeba",
  description: "Here you will find all the articles you need which you can access for free. You can earn money by sharing your articles with everyone by becoming a contributor to this website.",
  direction: "auto",
  language: "en-US",
  backgroundColor: "#fff",
  themeColor: "#fff",
  display: "standalone",
  orientation: "any",
  scope: "/",
  startUrl: "/?utm_source=homescreen",
  screenshotSize: "540x720",
  appleStatusBarStyle: "black-translucent",
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: "BlogSeba - The best Blogging Platform in Bangladesh",
      shortName: "BlogSeba",
      description: "Here you will find all the articles you need which you can access for free. You can earn money by sharing your articles with everyone by becoming a contributor to this website.",
      url: "/search/label/my-shortcut-1?utm_source=homescreen"
    },
    {
      name: "BlogSeba - The best Blogging Platform in Bangladesh",
      shortName: "BlogSeba",
      description: "Here you will find all the articles you need which you can access for free. You can earn money by sharing your articles with everyone by becoming a contributor to this website.",
      url: "/search/label/my-shortcut-2?utm_source=homescreen"
    }
  ],
  pwa: {
    consoleLogs: true,
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: "********-****-****-****-************",
      allowLocalhostAsSecureOrigin: true
    }
  }
};

module.exports = config;
