---
title: Raycast 体验
date: 2023-01-03T23:54:03
tags: [APP]
categories: []
image: 'http://img.atksoto.com/2022/202301040034085.png'
slug: '20230103235403'
---

## Raycast

前几天在一篇文章 [你的 2022，藏在这些数字里](https://sspai.com/post/77519) 中偶然看到了 Raycast 这个软件也有年终报告，当时就猜到是一个类似 Alfred 的代替原生 Spotlight 的软件。

> Raycast：2022 Wrapped
> Mac 平台著名的启动器  [Raycast](https://sspai.com/link?target=https%3A%2F%2Fwww.raycast.com%2F)  也推出了年度总结报告。这份报告分为四个部分，分别是应用的使用情况、调用拓展情况、通过 Raycast 启动应用的情况，以及最后的总结。
> ![](https://cdn.sspai.com/2022/12/29/ec9a0b96ca3e8d732a6bd0d0caa3b248.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

之前一直没有尝试过此类软件是因为元老 [Alfred](https://www.alfredapp.com) 实在是长得不好看，让我觉得没法融入系统，今天在思索怎么样能省事地运行 hugo server 的时候想到可以用这类软件来实现，于是下载了 Alfred 发现脚本功能是付费的，正在研究有无必要的时候发现了 Raycast 这个软件，一眼爱上 UI，而且免费，于是下了一个来折腾，发现确实是个好东西。

## 自定义脚本

这个软件自定义脚本也是非常方便，为了实现刚才考虑的功能又特意研究了一下 AppleScript，最后搞定了这个脚本。

```applescript
#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Run Hugo Server
# @raycast.mode compact

# Optional parameters:
# @raycast.icon images/hugo-logo.png

# Documentation:
# @raycast.description Run Hugo Server

tell application "Terminal"
	set newTab to do script "cd /Users/soto/Code/soto-blog && hugo server"
end tell

delay 1

do shell script "open http://localhost:1313"
```

美观好用，非常让人满意。

![](http://img.atksoto.com/2022/202301040009617.png)

## 社区脚本

![](http://img.atksoto.com/2022/202301040014993.png)

安装插件很方便，除此以外一些简单的脚本可以在官方维护的这个库里找到 [raycast
/script-commands](https://github.com/raycast/script-commands) 例如这个从当前文件夹打开终端就很方便，省的右键点击目录再打开了。

![](http://img.atksoto.com/2022/202301040015940.png)

这个图标太丑了，可以自己改一下。

![](http://img.atksoto.com/2022/202301040015673.png)

## 其他功能

<table>
<tr>
  <td className="text-center">剪切板历史</td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301040017318.png)</td>
</tr>
<tr>
  <td className="text-center">计算器</td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301040018234.png)</td>
</tr>
<tr>
  <td className="text-center">内置字典</td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301042158529.png)</td>
</tr>
</table>

另外还有可以替换著名付费软件的分屏，但是我不用。

## 其他插件

![](http://img.atksoto.com/2022/202301042151560.png)

装了几个很方便的社区插件

<table>
<tr>
  <td className="text-center">[AppleMusic](https://www.raycast.com/fedevitaledev/music) 可以快速播放歌单/加入资料库/喜欢</td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301040039801.png)</td>
</tr>
<tr>
  <td className="text-center">[Safari](https://www.raycast.com/loris/safari) 这个直接搜历史记录</td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301040038775.png)</td>
</tr>
<tr>
  <td className="text-center">[Quick Event](https://www.raycast.com/mblode/quick-event) 速建日程(可惜不支持汉语) </td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301042159601.png)</td>
</tr>
<tr>
  <td className="text-center">[GitHub Repository Search](https://www.raycast.com/thomas/github-repository-search) 快速去仓库，另外还有快速 Git 操作的插件。 </td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301042149577.png) </td>
</tr>
<tr>
  <td className="text-center">[JetBrains Toolbox Recent Projects](https://www.raycast.com/gdsmith/jetbrains) 这个也很方便，可以快速打开某个项目 </td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301042155859.png) </td>
</tr>
<tr>
  <td className="text-center"> [Obsidian](https://www.raycast.com/marcjulian/obsidian) 可以快速搜笔记/开仓库</td>
  <td className="w-3/4">![](http://img.atksoto.com/2022/202301042246261.png)</td>
</tr>
</table>

## 彩蛋

confetti!

![](http://img.atksoto.com/2022/202301042141088.gif)

[Rayso](https://www.ray.so)

突然发现之前收藏的一个好看的代码截图工具网站也是 Raycast 维护的。同样的，右下角可以获取这个脚本。

![](http://img.atksoto.com/2022/202301042143074.png)

## End

总之就是如果用习惯了能省不少事儿，配置起来也很方便基本就是装插件，重要的是好看好玩，已经把默认的 ⌘ + Space 换掉了，就唯一不满意的是这个软件图标太难看了。

几篇很好的介绍:

- [快捷启动器中的「潜力股」，它想成为你的 Mac 默认搜索工具：Raycast](https://sspai.com/post/63521)
- [能少一个是一个：我用 Raycast 替代了这些应用](https://sspai.com/post/72540)
- [Raycast 小技巧之 Quicklink 二三事](https://sspai.com/post/72951)
