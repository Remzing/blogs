---
title: Docker 使用
tags:
  - Docker
categories:
  - DevOps
toc: true
recommend: 1
keywords: css
uniqueId: '2020-05-28 05:51:57/"Docker-使用".html'
abbrlink: be9543fe
date: 2020-05-28 13:51:57
---

什么是Docker?根据官网描述，我们可以得知，[Docker](https://link.zhihu.com/?target=https%3A//www.docker.com/what-docker)是一个软件/容器平台，使用了虚拟化技术(cgroups，namespaces)来实现操作系统的资源隔离和限制，对于开发人员来说，容器技术为应用的部署提供了沙盒环境，我们可以在独立的容器运行和管理应用程序进程，Docker提供的抽象层使得开发人员之间可以保持开发环境相对的一致，避免了冲突。

下面是在CentOS7下Docker的使用经验记录：

使用下面的shell命令安装Docker

```bash
$ curl -sSL https://get.docker.com/ | sh
```

安装成功后，使用下面的命令应该能显示Docker的版本信息，说明Docker已经被安装了

```bash
$ docker -v
Docker version 19.03.12, build 48a66213fe
```

之后运行`docker images`可查看现有镜像 ，如果命令报错：  

`Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? `

需要重启docker进程，在CentOS7下执行命令：

```
systemctl restart docker.service
```

接着我们使用Docker创建一个nginx的容器:

```bash
$ docker run -d --name=web -p 8080:80 nginx:latest
```

这条命令表示Docker基于nginx:alpine这个Docker镜像，创建一个名称为web的容器，并把容器内部的80端口与宿主机上的8080端口做映射，使得通过宿主机8080端口的流量转发到容器内部的80端口上。

如果安装的时候提示 `Unable to find image 'nginx:latest' locally`，这是本地没有这个镜像，它会自动下载，但是没有配置过镜像源的话，默认国外镜像源地址，长时间下载不下来就需要翻墙或者配置镜像源地址， 需要我们为docker设置国内阿里云的镜像加速器或选择其他镜像加速器；

 需要修改配置文件  /etc/docker/daemon.json  如下（没有daemon.json文件就创建）：

```shell
{ 
	"registry-mirrors": ["https://alzgoonw.mirror.aliyuncs.com"] 
}
```

之后重启docker, 使用`docker info`即可查看镜像仓库源地址是否改变 

```
Registry Mirrors:
  https://alzgoonw.mirror.aliyuncs.com/  
```

使用`docker ps`命令，可以列出正在运行的容器，可以看到，刚才基于nginx镜像创建的容器已经处于运行状态了

现在访问宿主机地址的8080端口，看到nginx的欢迎页面

