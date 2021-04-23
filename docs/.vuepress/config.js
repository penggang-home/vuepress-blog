const private = require('./private/private')
// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  title: "PengSir",
  description: "这个杀手不太冷",
  head: [
    ['meta', { name: "baidu_union_verify", content: "a0036ccf0b657813fb236f80f376c429" }],
    ["link", { rel: "icon", href: "/images/favicon.svg" }],
    ['meta', { name: 'Keywords', content: '彭先生,彭先生的主页,bookbook,BookBook,bookbook.cc,BookBook.cc' }],
    // 作者
    ['meta', { name: 'author', content: '彭先生,彭先生的主页,bookbook,BookBook,bookbook.cc,BookBook.cc' }],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?668842dc21c1b8f215b000531ec8f69e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`],
    // ['script', { src: "/utils/js/jq3.5.1.js" }, ``],
    // ['script', { src: "/utils/js/click.js" }, ``],
  ],
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/images/favicon.svg",
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
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "PrngSir",
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
      recordIP: true,
      placeholder: '填写邮箱地址可以及时收到回复噢...',
      visitor: true,
    },
    lastUpdated: '最后更新于', friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: '唐子涵的博客',
        desc: '至于未来会怎么样 反正路还长 天总会亮',
        link: 'https://www.zihanzy.com/'
      },
      {
        title: '李Sir的博客',
        desc: '活在当下',
        link: 'https://heroli.netlify.app/'
      },
      

      // ...
    ],
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://www.uupoop.com/" },
          { text: "奶牛快传", link: "https://cowtransfer.com/" },
          { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
        ]
      },
      {
        text: "项目",
        icon: 'iconfont icon-tools',
        items: [
          { text: 'CloudMusic\t|\t米奇妙妙屋', link: 'https://penggang-home.gitee.io/cloud-music/#/discovery', icon: "iconfont icon-wangyiyunyinle" },
          { text: '电商后台管理系统 V：1.3.0', link: 'http://120.53.120.229:1921/#/login', icon: "iconfont icon-vue" },
          { text: '电商后台管理系统 V：1.2.0', link: 'http://120.53.120.229:1920/#/login', icon: "iconfont icon-vue" },
          { text: "电商平台实时监控系统(Echarts)", link: "http://120.53.120.229:9989/#/home", icon: "iconfont icon-vue" },
          { text: "仿微信聊天", link: "http://120.53.120.229:8100", icon: "reco-wechat" },
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
            text: "简历",
            link: "/views/About/resume",
            icon: "reco-document"
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
  },
  // 项目开始时间
  // startYear: '2017',
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
    // "social-share": {
    //   networks: ["qq", "weibo", "email"], //分享类型
    //   qq: "2845486124",
    //   email: "2845486124@gmail.com", //email地址
    // },

    // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return moment(timestamp).format('LLLL')
      }
    },
    // BGM播放器 "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
    "@vuepress-reco/vuepress-plugin-bgm-player": {
      audios: [
        {
          name: "Faster Than Light",
          artist: "Andreas Waldetoft / Mia Stegmar",
          url:
            "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
          cover:
            "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
        },
        {
          name: "Dawn",
          artist: "DDRKirby(ISQ)",
          url:
            "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3",
          cover:
            "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
        },
        {
          name: "TRON Legacy (End Titles)",
          artist: "Daft Punk",
          url:
            "https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3",
          cover:
            "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
        },
        {
          name: "Reconfig",
          artist: "Shortwire",
          url:
            "https://cdn-image.tsanfer.xyz/music/Reconfig%20-%20Shortwire.mp3",
          cover:
            "https://p2.music.126.net/2oouVh_rHOv1nZXYapF41A==/109951163606358209.jpg",
        },
        {
          name: "Broken Boy",
          artist: "Tonspender",
          url:
            "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac",
          cover:
            "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
        },
        {
          name: "Iron Princess",
          artist: "Xomu,HYP3RLAPS3",
          url:
            "https://cdn-image.tsanfer.xyz/music/Xomu%2CHYP3RLAPS3%20-%20Iron%20Princess.flac",
          cover:
            "https://p2.music.126.net/INOnlEePWnMVO3D4U95B9g==/109951165031046695.jpg",
        },
        {
          name: "Rapid as Wildfires 疾如猛火",
          artist: "陈致逸,HOYO-MiX",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E9%99%88%E8%87%B4%E9%80%B8%2CHOYO-MiX%20-%20Rapid%20as%20Wildfires%20%E7%96%BE%E5%A6%82%E7%8C%9B%E7%81%AB.flac",
          cover:
            "https://p2.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg",
        },
        {
          name: "清平乐",
          artist: "张紫宁",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E7%81%AB%E7%AE%AD%E5%B0%91%E5%A5%B3101%E7%B4%AB%E5%AE%81%20-%20%E6%B8%85%E5%B9%B3%E4%B9%90.flac",
          cover:
            "https://p1.music.126.net/145FpHsLi2_RyjqCm9kEUQ==/109951164698991135.jpg",
        },
        {
          name: "この世界の頂で",
          artist: "森下弘生,金﨑猛,近藤嶺",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E6%A3%AE%E4%B8%8B%E5%BC%98%E7%94%9F%2C%E9%87%91%EF%A8%91%E7%8C%9B%2C%E8%BF%91%E8%97%A4%E5%B6%BA%20-%20%E3%81%93%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%AE%E9%A0%82%E3%81%A7.mp3",
          cover:
            "https://p2.music.126.net/PFojr1j6pdEj3uWrhpdytA==/109951164925376075.jpg",
        },
        {
          name: "終わりの世界から",
          artist: "やなぎなぎ,麻枝准",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%8B%E3%82%89%20-%20%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%2C%E9%BA%BB%E6%9E%9D%E5%87%86.mp3",
          cover:
            "https://p1.music.126.net/C7ruDdV5NhgfhhJ8_cQSzA==/2426622162519258.jpg",
        },
        {
          name: "寂しい夜",
          artist: "三輪学",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20%E5%AF%82%E3%81%97%E3%81%84%E5%A4%9C.flac",
          cover:
            "https://p2.music.126.net/RIOvUtQejxeI5S2sP_nmiw==/3434874333355654.jpg",
        },
        {
          name: "「軌跡」",
          artist: "小野友樹,KENN",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E5%B0%8F%E9%87%8E%E5%8F%8B%E6%A8%B9%2CKENN%20-%20%E3%80%8C%E8%BB%8C%E8%B7%A1%E3%80%8D.flac",
          cover:
            "https://p2.music.126.net/xY8qFdscge6rmeaw9aCc6A==/109951163168710796.jpg",
        },
        {
          name: "無人区-Vacuum Track#ADD8E6-",
          artist: "米缐p.",
          url:
            "https://cdn-image.tsanfer.xyz/music/%E7%B1%B3%E7%BC%90p.%20-%20%E7%84%A1%E4%BA%BA%E5%8C%BA-Vacuum%C2%A0Track%23ADD8E6-.mp3",
          cover:
            "https://p3.music.126.net/WXAAn_D-gfPB9iVcVZQwAw==/109951163037603327.jpg",
        },
        {
          name: "DARK SOULS Ⅲ",
          artist: "Yuka Kitamura",
          url:
            "https://cdn-image.tsanfer.xyz/music/DARK%20SOULS%20%E2%85%A2%20-%20Yuka%20Kitamura.mp3",
          cover:
            "https://p1.music.126.net/XS-n1XX9g_OBLFudoQrc5w==/1396379770845098.jpg",
        },
        {
          name: "Ezio's Family",
          artist: "Jesper Kyd",
          url:
            "https://cdn-image.tsanfer.xyz/music/Jesper%20Kyd%20-%20Ezio's%20Family.mp3",
          cover:
            "https://p1.music.126.net/BQ0oJHhx3bPdmYbg90WL1g==/2536573326661833.jpg",
        },
        {
          name: "Sea Of Voices (RAC Mix)",
          artist: "Porter Robinson",
          url:
            "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
          cover:
            "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
        },
        {
          name: "Superstar (feat. Linn)",
          artist: "Said The Sky & Dabin",
          url:
            "https://cdn-image.tsanfer.xyz/music/Said%20The%20Sky%20%26%20Dabin%20-%20Superstar%20(feat.%20Linn)%20-%20Said%20The%20Sky.mp3",
          cover:
            "https://p2.music.126.net/G105trvU6R2_vqgZWvncuQ==/109951163506191548.jpg",
        },
      ],
    },
    // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
    "@vuepress-reco/vuepress-plugin-kan-ban-niang":
    {
      theme: ['z16', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
      clean: false,
      messages: {
        welcome: '我是bookbook,欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
      },
      width: 150,
      height: 219,
    },
    // 点击爆炸的彩带效果
    "cursor-effects": {
      size: 3,                    // size of the particle, default: 2
      shape: ['circle'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    },
    //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
   // "@vuepress-yard/vuepress-plugin-window": {
    //  title: "疯狂的地球人@公告",
   //   contentInfo: {
    //    title: "毕设、项目、相关咨询加微信哦~🎉🎉",
     //   needImg: true,
    //    imgUrl: "images/bookbook.png",
     //   content: "",
      //  contentStyle: ""
    //  },
   //   bottomInfo: {
        // btnText: '关于',
        // linkTo: 'https://www.bookbook.cc/views/About/author.html'
    //  },
    // closeOnce: false,
    // hideRouteList
    // }
  }
}
