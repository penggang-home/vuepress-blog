const private = require('./private/private')
// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  title: "bookbook.cc",
  description: "分享一些前端路上的学习心得",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.svg" }],
    ['meta', { name: 'Keywords', content: '彭先生,彭先生的主页,bookbook,BookBook,bookbook.cc,BookBook.cc' }],
    // 作者
    ['meta', { name: 'author', content: '彭先生,彭先生的主页,bookbook,BookBook,bookbook.cc,BookBook.cc' }],
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?cd767ed69c727fb711285ff9f162347e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具箱",
        items: [
          {
            text: "在线工具",
            items: [
              { text: "在线PS", link: "https://www.uupoop.com/" },
              { text: "奶牛快传", link: "https://cowtransfer.com/" },
              { text: "更多~", link: "/views/utools/on-line/" }
            ]
          },
          {
            text: "实用软件",
            items: [
              { text: "IObit Uninstaller", link: "/views/utools/software/IObitUninstaller" },
              { text: "更多~", link: "/views/utools/software/IObitUninstaller" }
            ]
          }
        ]
      },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/views/About/author",
            icon: "reco-account"
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/weixin_43742708",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com/penggang-home",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/penggang-home",
            icon: "reco-mayun",
          },
        ]
      }
    ],
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "BookBook.cc",
    authorAvatar: "/images/avatar.svg",
    mode: "light", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    record: "蜀ICP备20019955号",
    recordLink: "https://icp.chinaz.com/home/info?host=pengsir.top",
    smooth: "true", //平滑滚动
    // 评论设置 
    valineConfig: {
      appId: private.appId,
      appKey: private.appKey,
    },
    lastUpdated: '最后更新于',
  },
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页 ！',
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  plugins: {
    //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-code-copy": true,
    // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
    "reading-progress": true,
    // 分享插件: "vuepress-plugin-social-share": "^1.0.0"
    "social-share": {
      networks: ["qq", "weibo", "email"], //分享类型
      qq: "2845486124",
      email: "2845486124@gmail.com", //email地址
    },
    // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return moment(timestamp).format('LLLL')
      }
    },
  }
}