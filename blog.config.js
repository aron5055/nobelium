const BLOG = {
  title: "Aron's Blog",
  author: "Aron Yang",
  email: "impixelhu@gmail.com",
  link: "https://blog.aronyang.com",
  description: "Aron Yang 的个人博客，分享技术学习笔记、生活哲思和成长记录。",
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: "Asia/Shanghai", // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: "light", // ['light', 'dark', 'auto'],
  font: "sans-serif", // ['sans-serif', 'serif']
  lightBackground: "#f6f3ed", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#18181B", // use hex value, don't forget '#'
  path: "", // leave this empty unless you want to deploy Nobelium in a folder
  since: 2024, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true,
  showArchive: false,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: "https://og-image-craigary.vercel.app", // The link to generate OG image, don't end with a slash
  socialLink: "",
  seo: {
    keywords: ["编程博客", "AronYang", "Aron", "技术笔记", "哲学思考"],
    googleSiteVerification: "", // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: "ga", // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: "", // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: "", // e.g https://ackee.craigary.net , don't end with a slash
      domainId: "", // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: "G-Q6H0FDVND8", // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: "cusdis", // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: "", // The repository of store comments
      owner: "",
      admin: [],
      clientID: "",
      clientSecret: "",
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: "",
    },
    cusdisConfig: {
      appId: "cb3a445e-c5e6-4fa2-9ba6-fad7c1e9854f", // data-app-id
      host: "https://cusdis.com", // data-host, change this if you're using self-hosted version
      scriptSrc: "https://cusdis.com/js/cusdis.es.js", // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
