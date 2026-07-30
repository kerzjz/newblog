/**
 * 站点基础配置
 * 包含站点名称、作者、链接、头像、社交账号、第三方服务等
 */

export const siteConfig = {
  /** 站点标题（导航栏、网页标题通用） */
  title: "Ker ZJZ",
  /** 首页副标题 / 简介 */
  subtitle: "你好👋 我是Ker ZJZ~ 技术｜投资｜生活随笔",
  /** 站点描述（用于SEO meta） */
  description: "Ker ZJZ 的个人博客",
  /** 博主名称 */
  author: "Ker ZJZ",
  /** 站点根域名，末尾不要带 / */
  url: "https://kerzjz.qzz.io",
  /** 头像地址 */
  avatar: "https://cdn-us.imgs.moe/2026/07/30/avatar.jpg",
  /** 个人签名 */
  signature: "Stay hungry, stay foolish.",

  /** 社交链接 */
  socials: {
    github: "https://github.com/kerzjz",
    twitter: "https://x.com/IMUPXUU",
    email: "kerzjz@outlook.com",
  },

  /** Waline 评论配置 */
  waline: {
    serverURL: "https://example.com",
  },

  /** 统计配置 Umami，未启用直接留空数组 */
  analytics: {
    umami: [],
  },

  /** 图片资源CDN */
  assets: {
    randomImage: "https://bing.img.run/rand.php",
    favicon: "/favicon.ico",
  },

  /** JS时间提醒：月份从0开始计数，6=7月 */
  startTime: new Date(2026, 6, 30, 16, 0, 0),

  /** 外链白名单，弹窗确认放行 */
  trustedDomains: [
    "github.com",
    "bilibili.com",
    "space.bilibili.com",
    "icp.gov.moe",
  ],
};

// ===================== 预处理Waline 避免对象内部直接运算引发Astro构建异常 =====================
let walineDnsPrefetch: string[] = [];
let walinePreconnect: Array<{ url: string; crossOrigin: string }> = [];
if (siteConfig.waline.serverURL && siteConfig.waline.serverURL.startsWith("http")) {
  const host = new URL(siteConfig.waline.serverURL).host;
  walineDnsPrefetch = [`//${host}`];
  walinePreconnect = [{ url: siteConfig.waline.serverURL, crossOrigin: "anonymous" }];
}

/**
 * SEO 全局配置
 */
export const seoConfig = {
  defaultTitle: "Ker ZJZ",
  titleTemplate: "%s - Ker ZJZ",
  defaultDescription: "Ker ZJZ 的个人博客",
  defaultImage: "https://upxuu.com/images/me.jpg",
  keywords: ["Ker ZJZ", "技术博客", "随笔"],
  dnsPrefetch: [
    "//f.xxu6.top",
    ...walineDnsPrefetch,
  ],
  preconnect: [
    { url: "https://f.xxu6.top", crossOrigin: "anonymous" },
    ...walinePreconnect,
  ],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

/**
 * 导航菜单类型定义
 */
export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export const navConfig: {
  desktop: NavItem[];
  mobile: NavItem[];
} = {
  desktop: [
    { name: "首页", href: "/" },
    { name: "说说", href: "/talks" },
    { name: "归档", href: "/archive" },
    { name: "友链", href: "/friends" },
    { name: "关于", href: "/about" },
  ],
  mobile: [
    { name: "首页", href: "/" },
    { name: "说说", href: "/talks" },
    { name: "归档", href: "/archive" },
    { name: "友链", href: "/friends" },
    { name: "关于", href: "/about" },
  ],
};

/**
 * 底部版权信息
 */
export const footerConfig = {
  copyright: "© 2026 Ker ZJZ. All Rights Reserved.",
  icp: "萌ICP备20269996号",
  icpLink: "https://icp.gov.moe/?keyword=20269996",
};

/**
 * 欢迎弹窗配置
 */
export const welcomeConfig = {
  enable: true,
  message: "欢迎来到我的博客🎉",
};

/**
 * 文章相关设置
 */
export const postConfig = {
  excerptLength: 120,
};
