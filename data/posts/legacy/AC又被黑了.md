---
title: AC又被黑了
tags: []
image: 'http://img.atksoto.com/2022/202212310105241.png'
date: 2021-11-28 16:17:36
---

下午突然看到服务器有人发

![](http://img.atksoto.com/2022/202212310104240.png)

仔细一看

![](http://img.atksoto.com/2022/202212310104990.png)

打开链接一看：

![](http://img.atksoto.com/2022/202212310105241.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

很无语，一开始以为是国外作案，黑进数据库了，一看我数据库根本没对外网开放

查来查去发现是有人盗了一个用来处理封禁的账号，进去之后一通乱封

把数据库恢复了一下备份，玩家还是进不去，我能进去，查了一下 litebans 的官网，是用了一个封锁服务器进入权限的指令，打了个指令就解决了。

很低级的手段，很无聊的恶趣味

---

#### 后续

原本晚上前往教学楼复习数分，没有带电脑。

没想到，在傍晚又被黑了，因为只是还有管理号没有停掉，仅凭手机暂时解决了问题，在仔细推敲后，认为其是通过非法调用我部署在 web 服务器的 litebans 端的 api 来实现用拥有权限的玩家账号去封禁其他玩家。

结果在稍晚一点又一次被黑，终于意识到，事情根本没有那么复杂，只是因为 litebans 是 BC 插件，Authme 没办法限制登陆前对指令使用权限，任意一个有 litebans 权限的账号都在未登陆的情况下可以随意使用指令。其实早就应该发现我留了这种低级漏洞的，也没想道竟然这么久了才有人发现了这个这么简单的漏洞。
