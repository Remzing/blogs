---
title: vue源码解析01
tags:
  - VUE
categories:
  - VUE
  - sourceCode
toc: true
recommend: 1
keywords: node
uniqueId: '2020-06-04 12:40:36/"vue源码解析01".html'
abbrlink: ca5f2882
date: 2020-06-04 12:40:36
---
# vue源码解析01

> 摘要
> - 源码学习步骤：
>
>   1. 全盘了解
>   2. 问题驱动
>   3. 主线优先
>   4. 可画流程图
>
> - 安装调试环境，入口文件切入
>
>   <!-- more -->

## Vue 源码下载

```shell
git clone https://github.com/vuejs/vue.git
```



## 输出文件夹 dist 文件解析

有多种模块类型：

+ cjs （commonjs）
+ es （es module）
+ umd

## 入口文件

通过查看package.json里面的script，命令dev

把dev命令 修改为

```json
"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"
```

加入参数 `--source-map ` 方便调试vue源码

从命令中看出 入口文件为`scripts/config.js` ，且带入环境变量 `TARGET:web-full-dev`









