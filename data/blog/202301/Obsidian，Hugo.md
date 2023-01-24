---
title: Obsidian，Hugo
date: 2023-01-04T18:07:41
tags: [APP, Hugo, Obsidian]
image: 'https://pic.mcac.cc/202301042234833.png'
slug: '20230104180741'
---

上一篇相关文章: [[Obsidian体验与新工作流]](/obsidian1)

用 vscode 写这种大量的 md 文件还是不方便，想看实时渲染效果，因为博客图太多对照起来非常麻烦，Obsidian 相比起来体验会好很多，现在版本升到 1.0 以上了，原生的实时预览也找到了之前 Typora 的熟悉感，我做了下面几个配置来让博客 Vault 更好地适应 hugo。

## 插入模板

首先是一个方便的 metadata 插入模板，这比起运行 hugo 指令要方便多了。

```yaml
---
title: {{title}}
date: {{date}}T{{time}}+08:00
tags: []
categories: []
cover:
    image: ""
slug: {{date:YYYYMMDD}}{{time:HHmmss}}
---
```

在以前我是用社区插件插入模板的，但是现在发现 Obsidian 自带的模板就完全够用了

- `title: {{title}}` 直接复用文件名
- `date: {{date}}T{{time}}` 即是符合 hugo 要求的时间样式，时区 +08:00
- `slug: {{date:YYYYMMDD}}{{time:HHmmss}}` 这个比较有意思，具体说一下

slug 就是自定义 hugo 生成的链接，因为 hugo 自动生成的链接是直接复用标题的，导致我分享链接的出现中文被微信识别为不属于链接的部分，导致链接没法点，就算用 Safari 直接分享出去也会把链接显示为一大堆 unicode ，非常不美观，因此我想到直接用自带模板的时间格式化一串数字，这肯定是不会重名并且不影响分享的，当然这里也可以用 Templater 之类的社区插件生成一个更短的随机字符串。

效果:

```yaml
---
title: Obsidian，Hugo
date: 2023-01-04T18:07:41+08:00
tags: []
categories: []
cover:
  image: ''
slug: 20230104180741
---
```

这样生成的链接是这样的: https://zzhgo.com/posts/2023-1/20230104180741/ 就不存在非法字符的问题了。

记得在 hugo config 忽略模板。

```yaml
ignoreFiles: ['Templates.md']
```

## 链接问题

Obsidian 默认是用双链联系文件的，这也是 Obsidian 早期最大的卖点，这个功能的存在导致 markdown 本来的链接格式在这个软件里没什么存在感，链接图片和其他 markdown 文件就和 hugo 完全不一致。于是我用了一个妥协二者的办法，在引用其他文件的时候使用这样的格式：

![](https://pic.mcac.cc/202301041905120.png)

其中双括号建立了 Obsidian 的双链，后者是 hugo 的链接语法，最后呈现在网页上的效果是这样的: `[[Obsidian体验与新工作流]]({{<ref "Obsidian体验与新工作流">}})`

当然这在移动文件的时候 ref 的链接会失效，Obsidian 会自动调整双链，可以根据 Obsidian 的提示让自己想起来还有个 ref 没调整。

## Git

[obsidian-git](https://github.com/denolehov/obsidian-git) 用这个插件来快速提交更新

⌘ + P

| 查看 source control view                     | 一键提交                                     |
| -------------------------------------------- | -------------------------------------------- |
| ![](https://pic.mcac.cc/202301042207707.png) | ![](https://pic.mcac.cc/202301042209616.png) |

加上 GitHub Actions 自动化 [[Hugo部署]](/20221215153138)

## 关于 Notion 的题外话

用了一段时间 Notion ，也是折腾了好久，建了很多页面，最后发现真的想找一个文件的时候他的搜索真的很慢，而且有时候会出现同步功能失效的情况，记笔记还是为了找起来快，所以 Obsidian 本地文件极快的搜索和双链还是更适合存笔记。而且这次从 Notion 迁移东西出来发现这个东西真的好进不好出，有条件还是把文件都按照原生 markdown 存起来。Notion 的数据库是真的方便，非常喜欢的功能，我的一些数据仍然放在 Notion 里面。

顺带一提，Obsidian 新出的 [Canvas](https://obsidian.md/canvas) 值得一试。
