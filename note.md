# BFF

MVC

## 目录改造

## 搭建

### 技术栈

Koa 一些列配套的依赖
nodemon
pm2
@koa/router (koa-router)
koa-swig + co 2.x
koa-static 静态资源服务器
log4.js
时间
级别
分类

### 真假路由

/about -> 后端/about-> 404 -> fallback -> 后端 / -> vue 页面 -> url /about -> vur-router -> /about

https://github.com/samthor/html-modules-polyfill

### 函数式编程

两个基本特点

- 通过函数对数据进行转换
- 通过串联多个函数来求结果

## 第三周 多页应用

模板 swig
vue/react
js,css webpack

1. 用户-> nodejs 路由(pages 目录找到对应的页面，)-> 吐出 html
2. 页面 继承自 layOuts -> 引入组件
3. js,css webpack ->自动注入到页面中

swig 多页应用
js,css
vue/react 编译 spa

### webcomponents

- https://blog.csdn.net/meikidd/article/details/44628915

### 工具推荐

#### scripty

YII - bin
node/webpack - scripts

集群编译
主服务器 其它编译服务器(多个)
免密登录 scp

#### npm-run-all

#### jscpd 检查代码重复率

### 项目目录改造

### webpack 多入口处理

- 区分打包环境，开发环境，生产环境
  - prod dev
- 多入口文件处理

### 编写 webpack 插件




### travis,jenkins

编写代码 提交代码 触发 ci 构建(执行 build)
scp dist 到指定的服务器，完成上线

不用 scp
docker build 构建一个镜像，上传到 dockerhub
在服务器上 docker pull images

监控平台

https://prepack.io/ prepack