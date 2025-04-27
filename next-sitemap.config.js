const { config } = require("./lib/server/config");

module.exports = {
  siteUrl: config.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,

  exclude: ["/search"],

  // 自定义机器人规则
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/search"] },
    ],
    additionalSitemaps: [
      `${config.link}/feed`, // 添加RSS订阅到robots.txt
    ],
  },

  // 自定义站点地图中各页面的属性
  transform: async (config, path) => {
    // 为不同类型的页面设置不同的优先级和更新频率
    let priority = 0.7;
    let changefreq = "weekly";

    // 首页配置
    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    }
    // 关于页面配置
    else if (path === "/about") {
      priority = 0.8;
      changefreq = "monthly";
    }
    // 博客文章配置 - 修改为匹配根目录下的URL，排除已知的非博客页面
    else if (
      path !== "/search" &&
      path !== "/feed" &&
      path !== "/about" &&
      path !== "/"
    ) {
      priority = 0.9;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      // images: [],
    };
  },
};
