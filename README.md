# admin-v2-fe
mmall商城-前端页面

一些安装命令：例如：yarn add css-loader@[版本号，默认为最新] --dev

打包命令：
  1、频繁操作[本地访问]：node_modules/.bin/webpack -p [-p是线上项目发布时使用]
  2、一次操作[通过localhost+端口号 来访问]：node_modules/.bin/webpack-dev-server [前提是要安装webpack-dev-server插件]
  
简化命令：【在package.json文件中添加如下配置】
  "scripts": {
    "dev" : "node_modules/.bin/webpack-dev-server",    【使用：yarn run dev】
    "dist" : "node_modules/.bin/webpack -p"   【使用：yarn run dist】
  },
