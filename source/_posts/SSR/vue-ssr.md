---
# thumbnail: '‘http://static.nodejs.cn/_static/img/logo.svg’'
title: nuxtjs test
tags:
  - SSR
categories:
  - SSR
toc: true
recommend: 1
keywords: node
uniqueId: '2020-05-31 08:53:30/"vue-ssr".html'
abbrlink: 80ae5e79
date: 2020-05-31 16:53:30
---
# SSR

> 摘要
> 
> <!-- more -->

- 1、SSR方案是否只优化了首屏渲染？

  ​	是的

- 2、SSR在服务端跑客户端代码，要初始化vue框架，要生成虚拟DOM，最后直出HTML，这个过程是否会对服务端的性能造成影响？

- 3、客户端代码开发完后，是不是需要在服务端中保留一份完整代码给服务端跑？假如服务端和客户端是分开的两个项目，那岂不是要在服务端安装客户端需要的npm依赖包？

- 4、根据每个页面的不同路径，都要做相应的直出？

- 5、前后端请求要一致，前端请求有携带session，后端请求要保证一致的情况下，还需要解决session的问题

- 6、后台直出html后，那JS、css依赖呢，由谁来填入？

- 7、后台本质仅仅直出的是HTML字符串，所以前端vue代码初始化的时候，需要接管后台吐出来的html，重新生成虚拟DOM，以及接管后台吐回来的store数据。