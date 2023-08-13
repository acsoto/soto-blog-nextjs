---
title: Obsidian体验与新工作流
date: 2021-12-07 12:11:00
tags: [APP, Obsidian]
image: http://img.atksoto.com/2022/soto-pictures/2021-12/XmECh3.png
slug: obsidian1
---

最近在玩[Hexo](https://hexo.io/)，加上很多零散的笔记和文档也是 markdown 写的，发现自己用 markdown 的频率高了很多。本来就在计划换一个效率更高的 markdown 编辑器，毕竟确实有很多 markdown 的场景是单个编辑器没法覆盖的，[Typora](https://www.typora.io)现在也收费了，趁着这个契机，打算换一个软件用。

听说 all in one 的 [Notion](https://www.notion.so) 很好使，身边也有人在用，于是先试了一下，发现首先这个东西已经不是传统的 markdown 了，有点趋近于 word 那种富文本，并且云端依赖太高了，我要求得有一套本地可以用来渲染的 md 文件，所以没法用这个。

另外就是一直感觉很神秘但是不会用的[Obsidian](https://obsidian.md)。由于习惯停留在 Typora，刚下载下来 Obsidian 感觉非常不习惯，没法直接打开一个 md，而且没法实时预览。

但是经过一番研究之后，发现 Obsidian 确实是很适合我的需求。

## 主题

首先 Obsidian 的社区非常丰富，有很多非常好看的主题，换上之后感觉比之前 typora 的打字体验好了很多。

![社区主题](http://img.atksoto.com/2022/soto-pictures/2021-12/MIXxm6.png)

推荐一个 [主题 YIN & YANG](https://github.com/chetachiezikeuzor/Yin-and-Yang-Theme) 我现在在用，很好看。

而且主题，包括插件加完之后就是多端同步的，连手机上也有。

## 插件

还是因为社区文化好，插件也很多，但是目前我没什么需要的，唯一装了一个模板插件，可以用快捷键生成我预置的内容，这个和 Hexo 配合起来非常舒服，之前为了让 md 生成 Md，必须手动 hexo n，现在只要提前设置好 Hexo 的 Md，设置好快捷键，即可一键生成需要的内容，包括时间这种变量。

如下，我设置好模板后，只需 `command+T` 即可生成下面的内容

```
---
title: <% tp.file.title %>
date: <% tp.file.creation_date() %>:00
tags: []
cover:
    image:
---
```

```
---
title: Obsidian体验——新工作流
date: 2021-12-07 12:11:00
tags: []
cover:
    image:
---
```

插件名：[Templater](https://silentvoid13.github.io/Templater/)

## 双链

这个双向链接，指的就是你的一个 md 对象可以指向另一个对象，然后目标对象也会知道有哪个对象指向了自己。我理解这个东西就是类似于一个图，模拟你的神经网络，形成一种你的第二大脑的感觉，但其实到现在我也没感觉到有多强大，没有 get 到他的点。

这是他给我的仓库生成的图谱，因为没怎么建双链，所以边比较少，倒是挺好玩

![关系图谱](http://img.atksoto.com/2022/soto-pictures/2021-12/eam3iK.png)

不过标签和查找功能倒是感觉很好用，我之前给 hexo 写的标签他也很好的解析下来了，在我真正写笔记的时候，可以非常方便的查到我需要的东西。

![我写笔记的时候](http://img.atksoto.com/2022/soto-pictures/2021-12/XmECh3.png)

## 同步

Obsidian 很好的一点是可以用 iCloud 同步，这是我之前的需求：云同步编辑 markdowndo 的最好的解决方案。

Obsidian 有 iOS 端，而且非常轻量，此时此刻这段话就是我在手机上打下的（但是汉字输入法适配不太好）

在这个情况下，我把所有的笔记都放到一个仓库里，标签和双链让他们相互关联，在任何设备上都可以看到，很好的保证了整体性，而我又可以分开哪些是要发布的哪些是不发布的。

## 图片处理

Obsidian 不同于 Typora 的一点是图片不是很好处理，Obsidian 的方法是把你放进来的图片复制到库目录下，然后加上双链。其实这也不是软件的问题，md 格式本身就对图片本地加载不是很友好，加上我要上传到博客，整个目录会非常凌乱。同时我想要遵循数据方便转移的原则，以便在之后出现任何问题，我的原数据都整齐保留，于是我用阿里云对象存储 OSS 建了一个图床，同时使用 CDN 加速。

同时使用[uPic](https://github.com/gee1k/uPic)（[picgo](https://github.com/Molunerfinn/PicGo)也很好）这个软件，在写笔记的时候，只需要用快捷键上传图片，即可马上拿到图片的链接，以后就不会再在笔记里放上一堆杂乱的图片了，发布到 Github Pages 的时候也会快很多。

## 日记

这个东西甚至可以记日记，有专门的日记系统，还有配套的日历插件，尝试了一下体验确实不错，这是我曾经有过的需求。

官方介绍：

> 正如其名，当你使用日记功能时，Obsidian 会为你创建一篇以当天日期命名的空白笔记。当然，如果这篇笔记已经存在了的话，Obsidian 则会为你打开它。日记功能就是为了让你更方便地记录日常生活而设计的，你可以在每天的日记中写下你的生活记录、待办事项，抑或是当天的笔记总结，等等。日记功能允许你为日记指定模板，这样你就不需要重复调整日记的格式。

![日记效果](http://img.atksoto.com/2022/soto/202112142314916.png)

用双链和以前的自己对话，也是很有趣的一件事情。

用双链看那年今日，也是个非常好的选择（加上双链到电影和书籍，完爆某 Memo（？））

## 新的工作流

倒也谈不上什么工作流，可能是少数派看多了，只是觉得折腾好玩。

以下是我现在发布博客的过程，非常简单

1. 打开 Obsidian，新建文件，输入标题，cmd+T 生成 Md
2. 写
3. 打开控制台，输入 hexos

解释一下最后一步
我在本地建立了一个全局脚本 hexos

内容如下

```bash
  1 #!/bin/bash
  2 rm -rf /Users/soto/Documents/HexoBlog/source/_posts
  3 cp -r /Users/soto/Page/Mobile\ Documents/iCloud\~md\~obsidian/Documents/>
    笔记/HexoBlog /Users/soto/Documents/HexoBlog/source/_posts
  4 cd /Users/soto/Documents/HexoBlog
  5 hexo g
  6 hexo d
```

其过程为

1. 删除 hexo 下的 posts
2. 把 obsidian 目录下的文件夹复制到 hexo 的 posts
3. 生成，部署

这样做的好处是分离 hexo 目录和真正的笔记，我把笔记目录放到了 iCloud 上，以便在任何设备上直接用 obsidian 打开仓库，不需要把 hexo 上传到 iCloud，就不用担心 Obsidian 只能打开整个 hexo 目录的问题
