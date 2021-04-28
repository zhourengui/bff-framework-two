# 搭建 BFF 架构（服务于前端的后端）2

## 好用的工具

### scripty

主动找 scripts 目录

集群编译

preTest 在 test 之前触发，只需要添加 pre 就能实现

### jscpd 检查代码重复率

## WebComponent

## 多页应用(MAP)

### 模板

swig

### 区分打包环境

### 多入口文件处理

使用 glob 匹配文件

多入口配置，通过遍历文件动态配置入口

1. 用户 --> Controller --> 找到对应模板
2. 通过 webpack 自动引入 js、css 自动注入到页面中

### 问题

#### 模版的 js、css 需要通过 plugins 插入

## 编写 Plugin

## 持续集成

编写代码 提交代码 触发 ci 构建
scp dist 到执行服务器 完成上线

不同 scp
docker build 构建一个镜像，上传到 dockerhub
在服务器中 docker pull images

监控平台
