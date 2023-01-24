---
title: SwiftUI 图表库 ChartView
date: 2021-12-27 01:16:00
tags: []
image: ''
---

突然很想推荐一下这个库，真的很好看，至少很符合我的审美。

当时第一次试图在 SwiftUI 画图，搜遍全网没找到几个能用的，而且能用的也相当丑，踩了不少坑，终于跟着一个 demo 追根溯源找到了这个库，救我于水火之中。

(说起来也是，写第一个 SwiftUI APP 的时候也一样，在网上找资料真的太艰难了，国内几乎没有多少人写这些东西)

地址 https://github.com/AppPear/ChartView

官方图例

<img src="https://user-images.githubusercontent.com/2826764/130787802-9aa619ee-05de-4343-ba3c-1796e4d05e08.gif" width="26%"></img> <img src="https://user-images.githubusercontent.com/2826764/130787814-283f3d26-6c9d-448b-b2c7-879e60a3b05d.gif" width="26%"></img>

<img src="https://user-images.githubusercontent.com/2826764/130785262-010d6791-16cf-485d-b920-29e4086477e2.png" width="45%"></img>

<img src="https://user-images.githubusercontent.com/2826764/130785266-94a08622-2963-4177-8777-8bd3ad463809.png" width="45%"></img>

<img src="https://user-images.githubusercontent.com/2826764/130785268-284314de-ba96-4fb7-a1e5-8a46578e1f0e.png" width="45%"></img>

<img src="https://user-images.githubusercontent.com/2826764/131211993-5d33312b-09af-44b4-a32e-ffaad739adfe.gif" width="45%"></img>

<img src="https://user-images.githubusercontent.com/2826764/131211994-48c9ce4e-2e67-40a0-b727-c88bdbd22cd0.gif" width="45%"></img>

好看就完了，另外使用也相当简单，两个例子：

```swift
MultiLineChartView(data: [([8,32,11,23,40,28], GradientColors.green), ([90,99,78,111,70,60,77], GradientColors.purple), ([34,56,72,38,43,100,50], GradientColors.orngPink)], title: "Title")
```

<img src="https://user-images.githubusercontent.com/2826764/131211991-eca64276-cf05-423f-a78a-697c55e44bbc.gif" width="50%"></img>

```swift
 PieChartView(data: [8,23,54,32], title: "Title", legend: "Legendary") // legend is optional
```

![](https://user-images.githubusercontent.com/2826764/131211998-e142657d-0ebc-43b7-aeda-07cae4d9e34b.png)

而且这些卡片样式都是可以自己重新修订的，不用担心和自己的风格不一样。比如我之前的这个直接搬了两个卡片上去，它的阴影和我其他没有阴影的卡片是很不和谐的，于是我稍作修改，把他改成了和我其他卡片样式风格一致的样子。

![](https://pic.mcac.cc/202212310108165.png)

因为之前开发仓促，使用的时候没有仔细修改样式，但是可以肯定这个库还有更多的发挥空间。总之这个库真的很不错，封装程度高又不失自定义的空间，推荐。
