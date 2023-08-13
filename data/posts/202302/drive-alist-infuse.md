---
title: Web Drive as the source of Infuse
date: 2023-02-05T16:21:03
tags: [TV]
image: 'http://img.atksoto.com/2022/202302051711158.png'
summary: ''
---

I'm gonna leave home for school. Before that, I used my own mobile hard drives and my MacBook as the source of Infuse running on Apple TV at home. Now, After I leave, there's no device at home serving as a server. It will be hard for my parents to watch things easily on Apple TV. Therefore, It's time to set out a web drive service.

Aliyun Drive is a good choice in China, which doesn't limit speeds. But we need a server to bridge the web drive and Infuse. There's one awesome software for that.

## Deploy Alist

<GitHubCard repo={'alist-org/alist'} />

We can deploy it on a free web service like [replit](http://replit.com). There's one-click [replit deployment](https://github.com/alist-org/alist-replit) by alist. Click `Run on Replit`. Wait till it is finished and click `Run`. Url and password will be shown in the Console.

![](http://img.atksoto.com/2022/202302051655349.png)

Open it and login. The UI desgin is pretty good.

![](http://img.atksoto.com/2022/202302051700141.png)

## Add Drive

Follow the [offical docs](https://alist.nn.ci/guide/drivers/aliyundrive.html). I add [Aliyun Drive](https://www.aliyundrive.com/) here.

![](http://img.atksoto.com/2022/202302051704260.png)

I add a movie here as an example.

## As Infuse Source

![](http://img.atksoto.com/2022/202302051707431.png)

![](http://img.atksoto.com/2022/202302051707321.png)

## End

The speed is very impressive. But uploading to the web drive is an extra step if we'd like to use PT. If we use sources from the Internet, the quality of the content is hard to secure. At the same time, the web drive content may be removed anytime in China. Also, the speed of the drive may one day be limited. There may be so many unexpected situations. This is a temporary solution. So conditions permitting, the best way is still to use PT and NAS.

In China, most streaming media are inaccessible. This is not an official way to access sources. This is for learning and communication purposes only. If it violates any copyright laws, please let me know and I will promptly remove it.

Reference:

- https://qust.me/post/infuse-alist/
