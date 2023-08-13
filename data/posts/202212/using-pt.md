---
title: 'PT站使用'
date: 2022-12-31T11:02:00
tags: [TV]
image: 'http://img.atksoto.com/2022/202212311135000.png'
---

在不考虑版权问题的情况下，使用 PT 站可以快速可靠高质量地下载到想要的资源。

## 如何下载

一般各大高校有自己的 pt 站，我用过的有 byr 和 tju，这里以 tju 为例(可以在 ipv4 条件下使用)。在校园网环境下(ipv6)访问注册后，可以在官方的新手教程里下载到一个 torrent 软件，如 windows 的 utorrent，mac 的 qbittorrent，这里 mac 为例，校园网环境下走 ipv6 通道一般可以不走流量，在下载前可以按照官方说明配置一下软件。

找到需要的资源

![](http://img.atksoto.com/2022/202212311118173.png)

点击下载种子或者复制链接

![](http://img.atksoto.com/2022/202212311118174.png)

在 qbittorrent 中添加种子

![](http://img.atksoto.com/2022/202212311118175.png)

选好下载路径，开始下载

![](http://img.atksoto.com/2022/202212311118176.png)

注意，由于 pt 站基于用户之间相互传输文件，因此一般站点会对做种(你下载完毕之后放着供别人下载)有一定的要求，如 tjupt 要求做种一定的时间完成考核，byr 是要求上传和下载的比例。

等待下载完毕就是资源的源文件了，部分资源系统自带软件打不开，在 Windows 可以使用 potplayer，在 mac 可以使用 infuse，以 mac 为例。

## Infuse

将刚才的下载到的位置加入 infuse 的文件来源。

![](http://img.atksoto.com/2022/202212311123526.png)

infuse 会自动识别影视资源进行整理。

![](http://img.atksoto.com/2022/202212311127641.png)

![](http://img.atksoto.com/2022/202212311134610.png)

对于一些识别失败的可以右键点击编辑信息手动选择

![](http://img.atksoto.com/2022/202212311128108.png)

对于一些剧集，源文件的命名可能会导致 infuse 将其识别为电影，这种情况可以修改原文件的名字，按照 infuse 的要求，电视剧应当命名带 S01E01 这样的字样来表示第几季第几集，为了不影响做种，可以在 qbtitorrent 中修改文件名。

![](http://img.atksoto.com/2022/202212311129712.png)

如果需要多端观看，如在 appleTV 上看，可以建 NAS，也可以在一个 Wi-Fi 环境下打开电脑的文件夹共享，通过 smb 等协议让其他设备访问。
