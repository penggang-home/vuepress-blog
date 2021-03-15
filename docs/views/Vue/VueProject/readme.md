---
title: "如何将本地Vue项目部署到服务器"
date: 2020-11-11 12:43:00
sidebar: "auto"
categories:
  - Vue
tags:
  - Vue
  - VueProject
---

:::tip
在本地项目已经搭建完成的情况下，如何将项目发布到服务器？并做适当优化
:::

<!-- more -->

## 一、 通过node创建web服务器
:::tip 核心思路
创建node项目，并安装 express，通过 express 快速创建web服务器，将vue打包生成的dist文件夹
托管为静态资源即可，关键代码如下：
:::

```js

//创建web服务器
const app = require('express')();

//托管静态资源
app.use(express.static('./dist'))

//启动web服务器
app.listen(8080, () => {
  console.log("server StartUp: http:127.0.0.1:8080");
})
```

### 1.1 新建一个文件夹,这里我命名为:`vue_shop_server`,以后该目录即是我们的根目录。
![文件夹](../images/project/file.png)

进入该目录,打开终端 使用 `npm init -y` 初始化项目


## 二、打包项目

找到需要部署到服务器的项目，输入 `npm run build`,打包项目
打包好之后,把生成的 `dist`文件夹,复制一份放到我们刚刚新建的`vue_shop_server`目录下。

首先使用 `npm i express -S` 安装一个第三方的包
然后在我们的根目录下新建一个`app.js`文件 ,该文件是我们的项目入口文件。
在该文件中输入下例代码：

```js 
//创建web服务器
const app = express()

//托管静态资源
app.use(express.static('./dist'))

//启动web服务器
app.listen(8080, () => {
  console.log("server StartUp: http:127.0.0.1:8080");
})
```

接下来我们可以`node .\app.js` 运行一下看，能否打印出 server StartUp...
当终端中正常打印的话，则说明我们的服务启动成功,可以前往`http:127.0.0.1:8080`访问。


## 三、开启gzip文件压缩
:::tip gzip概述
HTTP协议上的GZIP编码是一种用来改进WEB应用程序性能的技术。大流量的WEB站点常常使用GZIP压缩技术来让用户感受更快的速度。这一般是指WWW服务器中安装的一个功能，当有人来访问这个服务器中的网站时，服务器中的这个功能就将网页内容压缩后传输到来访的电脑浏览器中显示出来.一般对纯文本内容可压缩到原大小的40%.这样传输就快了，效果就是你点击网址后会很快的显示出来
:::

### 3.1 首先安装和导入扩展包
安装：

`npm i compression -S`


安装完成后,我们需要导入这个包：
在我们的 `app.js`文件头部加入如下一句代码：
```js
const compression  = require("compression")
```

接下来在托管静态资源之前，注册中间件
```js
app.use(compression())
```

在浏览器当中，打开我们的项目,打开开发者选项，找到`Network`对比一下没有使用 gzip 和 使用gzip的效果，可以发现我们的数据大小确实有被压缩。