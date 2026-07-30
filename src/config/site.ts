/**
 * 站点基础配置
 * 包含站点名称、作者、URL、头像、社交账号、外部服务等
 */

export const siteConfig = {
  /** 站点标题（显示在导航栏和浏览器标题中） */
  title: "Ker ZJZ",
  /** 站点副标题（用 "/" 分隔多句，首页打字动画会轮流展示） */
  subtitle: "你好👋 我是Ker ZJZ~ 技术[Web/AI]・艺术与文化[钢琴/设计]・游戏[Minecraft]・经济 现在关注，就是老粉啦~ 感谢关注！",
  /** 站点描述（用于 SEO 和社交分享） */
  description: "Ker ZJZ",
  /** 作者名 */
  author: "Ker ZJZ",
  /** 站点 URL（影响 Canonical、Sitemap、OG、RSS 等所有绝对链接） */
  url: "https://kerzjz.qzz.io", // Base URL of the site
  /** 作者头像 URL（导航栏、关于页、AuthorCard 等处使用） */
  avatar: "https://cdn-us.imgs.moe/2026/01/17/a88d8365565406c0202ca8bad0560bd4.png",
  /** 作者签名/座右铭（显示在 AuthorCard 侧边栏） */
  signature: "Stay hungry, stay foolish. ",

  /** 社交链接（AuthorCard、关于页、页脚等处使用） */
  socials: {
    github: "https://github.com/kerzjz",
    /** GitHub 用户名（关于页拉取仓库列表用，大写） */
    githubUser: "KERZJZ",
    bilibili: "https://space.bilibili.com/",
    /** Bilibili mid（关于页拉取视频列表用） */
    bilibiliMid: "3546746017810685",
    /** AuthorCard 上显示的 Bilibili 文字 */
    bilibiliDisplayName: "Ker_ZJZ",
    email: "kerzjz@outlook.com",
    website: "https://kerzjz.qzz.io",
    /** 关于页额外社交链接 */
    twitter: "https://x.com/IMUPXUU",
    youtube: "https://youtube.com/@UpXuu",
    wechat: "@imljxu",
    qq: "3869843633",
    /** QQ群链接（欢迎提示中使用） */
    qqGroup: "",
    /** 订阅链接（欢迎提示中的"订阅"按钮，指向 GitHub Issues 等） */
    subscribe: "https://github.com/kerzjz/kerzjz.github.io/issues",
  },

  /** 评论系统配置 */
  waline: {
    /** Waline 服务端地址 */
    serverURL: 'https://',
  },

  /** 访问统计 — Umami（可配多个实例，留空数组则不加载） */
  analytics: {
    umami: [
      { src: "https://", id: "xxx" },
    ],
    /** 站点统计 API（页脚访问量/在线人数、欢迎提示调用） */
    statsApi: {
      alltime: 'https://blogapi.476543.xyz/statsapi/alltime',
      active: 'https://blogapi.476543.xyz/api/active',
    },
  },

  /** 图片 CDN / 默认封面 */
  assets: {
    /** 文章列表缺省封面图（为空时使用随机图） */
    defaultPostCover: "",
    /** 随机图服务地址（当文章无封面时 fallback 使用） */
    randomImage: "https://bing.img.run/rand.php",
    /** 站点 favicon 路径（相对站点根目录） */
    favicon: "/images/me.jpg",
  },

  /** 站点运行起始时间（页脚"已在互联网中航行"计时器用） */
  startTime: new Date(2026, 7, 30, 16, 0, 0),

  /** 外部链接安全配置 — 可信域名（点击这些域名的外链不弹确认框） */
  trustedDomains: [
    'github.com',
    'bilibili.com',
    'space.bilibili.com',
    'icp.gov.moe',
  ],
};

/**
 * 导航栏菜单项配置
 * - desktop: 桌面端导航栏直接显示的项
 * - mobileMore: 移动端汉堡菜单中的额外项
 * - external: 外链项（桌面端"更多"下拉 + 移动端汉堡菜单底部）
 */
export interface NavItem {
  /** 显示名称 */
  name: string;
  /** 链接路径（站内以 / 开头，外链以 http 开头） */
  href: string;
  /** 是否在新标签打开 */
  external?: boolean;
}

export const navConfig: {
  desktop: NavItem[];
  mobileMore: NavItem[];
  external: NavItem[];
} = {
  /** 桌面端导航栏主项 */
  desktop: [
    { name: "首页", href: "/" },
    { name: "说说", href: "/talks" },
    { name: "友链", href: "/friends" },
    { name: "关于", href: "/about" },
    { name: "归档", href: "/archive" },
    { name: "统计", href: "/stats" },
    { name: "标签", href: "/tags" },
  ],
  /** 移动端汉堡菜单中的额外项 */
  mobileMore: [
    { name: "友链", href: "/friends" },
    { name: "关于", href: "/about" },
    { name: "归档页面", href: "/archive" },
    { name: "网站统计", href: "/stats" },
    { name: "标签", href: "/tags" },
  ],
  /** 外部链接项（桌面端"更多"下拉 + 移动端汉堡菜单底部） */
  external: [
    { name: "开往", href: "https://www.travellings.cn/go.html", external: true },
    { name: "服务状态", href: "https://up.upxuu.com/status/1", external: true },
    { name: "QQ群", href: siteConfig.socials.qqGroup, external: true },
  ],
};

/**
 * 页脚配置
 */
export const footerConfig = {
  /** 版权文字 */
  copyrightText: "© 2026 Ker ZJZ. All Rights Reserved. ",
  /** ICP 备案信息（留空则不显示） */
  icp: {
    text: "萌 ICP 备 20269996 号",
    link: "https://icp.gov.moe/?keyword=20259426",
  },
  /** 页脚底部链接列表 */
  links: [
    { name: "友情链接", path: "/friends", external: false },
    { name: "RSS", path: "/rss.xml", external: true },
    { name: "Sitemap", path: "/sitemap.xml", external: true },
    { name: "隐私政策", path: "/privacy", external: false },
  ],
  /** 页脚开源仓库文字 */
  repoText: "本站已开源 ",
  /** 页脚开源仓库链接 */
  repoUrl: "https://github.com/ImUpXuu/xuhome",
  /** 页脚开源仓库显示名 */
  repoDisplayName: "IMUPXUU/XUHOME",
};

/**
 * SEO 配置
 */
export const seoConfig = {
  /** 默认页面标题（无 title 时使用） */
  defaultTitle: "Ker ZJZ",
  /** 标题后缀（拼接到每个页面 title 之后） */
  titleTemplate: " - Ker ZJZ",
  /** 默认页面描述 */
  defaultDescription: "Ker ZJZ",
  /** 默认 OG 图片 URL */
  defaultImage: "https://upxuu.com/images/me.jpg",
  /** SEO 关键词 */
  keywords: ["Ker ZJZ", "xxx", "xxx", "xxx", "xxx", "xxx", "xxx"],
  /**
  Twitter Card 配置 
  twitter: {
    card: "summary_large_image",
    site: "@xxx",
    creator: "@xxx",
  },
  */
  /** DNS 预解析域名列表 */
  dnsPrefetch: [
    "//f.xxu6.top",
    "//" + new URL(siteConfig.waline.serverURL).host,
  ],
  /** 预连接资源列表 */
  preconnect: [
    { url: "https://f.xxu6.top", crossOrigin: "anonymous" },
    { url: siteConfig.waline.serverURL, crossOrigin: "anonymous" },
  ],
  /** robots meta 内容 */
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

/**
 * 页面横幅（PageBanner）配置
 */
export const bannerConfig = {
  /** Banner 主标题（一般等于站点标题） */
  title: "Ker ZJZ",
  /** 背景网格图案透明度（0-1） */
  gridPatternOpacity: 0.12,
  /** 各页面类型的标签文字 */
  labels: {
    category: "Category",
    tag: "Tag",
    post: "POST",
    talk: "TALK",
  },
  /** 说说页打字动画内容 */
  talkTicker: {
    sequence: [
      "xxx",
      2500,
      "xxx",
      2500,
    ],
  },
};

/**
 * 副标题打字动画配置（首页 Banner 左侧）
 */
export const subtitleConfig = {
  sequence: [
    "你好👋 我是Ker ZJZ~ 技术[Web/AI]・艺术与文化[钢琴/设计]・游戏[Minecraft]・经济 现在关注，就是老粉啦~ 感谢关注！",
    2500,
    "xxx",
    2500,
  ],
};

/**
 * 欢迎提示（WelcomeToast）配置
 */
export const welcomeConfig = {
  /** 是否启用欢迎提示 */
  enabled: true,
  /** 提示显示时长（毫秒） */
  duration: 5000,
  /** 天气 API 地址（用于显示访客位置和天气） */
  weatherApi: "https://uapis.cn/api/v1/misc/weather",
  /** 默认问候语（天气 API 失败时显示） */
  fallbackMessage: "Hi！远方的朋友",
  /** sessionStorage 键名（标记是否已展示过） */
  sessionKey: "xuhome_visit_flag",
  /** 提示中的快捷链接 */
  quickLinks: [
    { name: "QQ群", href: siteConfig.socials.qqGroup, color: "blue" },
    { name: "订阅", href: siteConfig.socials.subscribe, color: "green" },
    { name: "RSS", href: "", action: "copyRss", color: "orange" },
  ],
};

/**
 * 内容相关配置（文章/说说）
 */
export const contentConfig = {
  /** 文章列表每页数量 */
  postsPerPage: 10,
  /** 阅读速度（字/分钟，用于计算预计阅读时间） */
  readingSpeed: 400,
  /** 文章版权许可信息 */
  license: {
    /** 许可协议名称 */
    name: "All Rights Reserved",
    /** 许可协议链接 */
    url: "/about",
  },
  /** AI 摘要模型列表（url 为完整请求地址）[Todo：用cf 20260730] */
  aiSummaryModels: [
    { id: 'gpt-oss', name: 'GPT-OSS-120B', url: 'xxx', hasThinking: false },
    { id: 'gemma', name: 'Gemma-4-31b-it (OpenRouter)', url: 'xxx', hasThinking: true },
    { id: 'deepseek-r1', name: 'DeepSeek-R1', url: 'xxx', hasThinking: true },
  ],
  /** AI 对话模型列表（url 为完整请求地址） */
  aiChatModels: [
    { id: 'gpt-oss', name: 'GPT-OSS-120B', url: 'xxx', hasThinking: false },
    { id: 'gemma', name: 'Gemma-4-31b-it (OpenRouter)', url: 'xxx', hasThinking: true },
    { id: 'deepseek-r1', name: 'DeepSeek-R1', url: 'xxx', hasThinking: true },
  ],
};

/**
 * 关于页面配置
 */
export const aboutConfig = {
  /** 关于页浏览器标题 */
  title: "关于我",
  /** 关于页 SEO 描述 */
  description: "Ker ZJZ",
  /** 角色标签 */
  role: "前端开发者 / 独立创作者",
  /** 简介文字（{author} 会被替换为 siteConfig.author） */
  intro: `你好👋 我是Ker ZJZ~ 技术[Web/AI]・艺术与文化[钢琴/设计]・游戏[Minecraft]・经济 现在关注，就是老粉啦~ 感谢关注！`,
  /** 技能标签列表（累了 直接复制readme） */
  skills: [
    "React", "TypeScript", "Node.js", "Astro", "Tailwind CSS",
    "Next.js", "Vue", "Vite", "Git", "Figma",
  ],
  /** GitHub 介绍文字 */
  githubBio: "xxx",
  /** Bilibili 板块标题 */
  bilibiliTitle: "MY bilibili @Ker_ZJZ",
  /** GitHub 仓库链接（关于页"找到我"区块） */
  githubLink: "https://github.com/kerzjz",
  /** GitHub 显示文字（？我没看懂 先不改） */
  githubValue: "@ImUpXuu\nupxuu",
  /** 邮箱显示文字 */
  emailValue: "KERZJZ@OUTLOOK.COM",
  /** 邮箱链接 */
  emailLink: "mailto:KERZJZ@OUTLOOK.COM",
  /** 微信显示文字 
  wechatValue: "@xxx",
  */
  /** QQ 显示文字 */
  qqValue: "3869843633",
  /** GitHub Socials 区块的邮箱链接 */
  socialEmailLink: "mailto:kerzjz@outlook.com",
};

/**
 * 全站文案配置（i18n）
 * 所有页面中的固定文字都从这里读取，方便修改和未来国际化
 */
export const i18nConfig = {
  /** 404 页面 */
  notFound: {
    title: "页面未找到",
    bigText: "404",
    message: "这个页面好像不见了",
    backHome: "回到首页",
    browseArchive: "浏览归档",
  },
  /** 归档页面 */
  archive: {
    title: "文章归档",
    description: "博客文章时间轴归档",
    timelineTitle: "时间轴",
    emptyText: "暂无文章归档",
    emptySubtext: "还没有发布任何文章",
    /** 区块标题（Layout 中显示的栏目名，可与页面 title 不同） */
    sectionTitle: "归档",
  },
  /** 首页 */
  home: {
    /** 首页浏览器标题（传给 Layout 的 title） */
    title: "Ker ZJZ",
    /** 首页 SEO 描述 */
    description: "Ker ZJZ",
    /** 首页文章列表区块标题 */
    sectionTitle: "最新文章",
  },
  /** 说说页 */
  talks: {
    /** 说说页浏览器标题 */
    title: "说说",
    /** 说说页区块标题 */
    sectionTitle: "说说",
    /** 说说列表页 SEO 描述 */
    description: "说说",
  },
  /** 说说详情页 */
  talk: {
    /** 说说详情页标题缺失时的回退文案 */
    detailFallbackTitle: "说说详情",
  },
  /** 分类页 */
  category: {
    /** 分类页标题后缀（拼在分类名后） */
    titleSuffix: " 分类",
    /** 分类页描述模板（{name} 会被替换为分类名） */
    descriptionTemplate: "{name} 分类下的全部文章 - UpXuu的个人博客",
  },
  /** 标签页 */
  tag: {
    /** 标签页标题后缀（拼在标签名后） */
    titleSuffix: " 标签",
    /** 标签页描述模板（{name} 会被替换为标签名） */
    descriptionTemplate: "标签 {name} 下的全部文章 - UpXuu的个人博客",
  },
  /** 友链页面 */
  friends: {
    title: "友情链接",
    description: "友情链接",
  },
  /** 隐私政策页面（看着怪怪的） */
  privacy: {
    title: "隐私政策",
    description: "隐私政策——我们如何收集、使用和保护你的个人信息。",
    lastUpdated: "2026 年 x 月 x 日",
    effectiveDate: "2026 年 x 月 x 日",
    contactEmail: "kerzjz@outlook.com",
  },
  /** 统计页面 */
  stats: {
    title: "网站统计",
  },
  /** 文章详情页 */
  post: {
    readingTime: "预计阅读",
    readingTimeUnit: "分钟",
    copyrightTitle: "作者",
    publishedTitle: "发布于",
    licenseTitle: "许可协议",
    relatedPosts: "相关文章",
    prevPost: "上一篇",
    nextPost: "下一篇",
    noMorePrev: "没有更多上一篇了",
    noMoreNext: "没有更多下一篇了",
    tocTitle: "目录",
    tocEmpty: "无目录",
    /** 移动端浮动目录按钮的 aria-label */
    viewToc: "查看目录",
  },
  /** 搜索 */
  search: {
    placeholder: "搜索文章标题、简述、内容或标签...",
    clear: "清除",
    noResults: "哎呀，没有找到文章",
    jumpTo: "跳转...",
    go: "GO",
  },
  /** 通用 */
  common: {
    darkMode: "暗色",
    lightMode: "亮色",
    more: "更多",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleDarkMode: "切换暗色模式",
  },
};
