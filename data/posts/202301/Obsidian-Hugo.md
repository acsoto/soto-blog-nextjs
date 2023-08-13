---
title: Obsidian，Hugo
date: 2023-01-04T18:07:41
tags: [Hugo, Obsidian]
image: 'http://img.atksoto.com/2022/202301042234833.png'
slug: '20230104180741'
---

上一篇相关文章: [Obsidian 体验与新工作流](/blog/legacy/Obsidian-0)

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

<div className="w-2/3">
![](http://img.atksoto.com/2022/202301041905120.png)
</div>

其中双括号建立了 Obsidian 的双链，后者是 hugo 的链接语法，最后呈现在网页上的效果是这样的: `[[Obsidian体验与新工作流]]({{<ref "Obsidian体验与新工作流">}})`

当然这在移动文件的时候 ref 的链接会失效，Obsidian 会自动调整双链，可以根据 Obsidian 的提示让自己想起来还有个 ref 没调整。

## Git

[obsidian-git](https://github.com/denolehov/obsidian-git) 用这个插件来快速提交更新

⌘ + P

| 查看 source control view                             | 一键提交                                             |
| ---------------------------------------------------- | ---------------------------------------------------- |
| ![](http://img.atksoto.com/2022/202301042207707.png) | ![](http://img.atksoto.com/2022/202301042209616.png) |

加上 GitHub Actions 自动化 [[Hugo部署]](/20221215153138)

## 部署

### 部署到 GitHub Pages

(指从 hugo 仓库部署到 xx.github.io 仓库)

在 hugo 仓库新建一个 action

```yaml
name: Deploy Hugo site to Pages

on:
  # push 触发
  push:
    branches: ['main']
  # 手动触发
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: recursive

      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        with:
          hugo-version: 'latest'

      - name: Build
        run: hugo

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          publish_dir: ./public
          external_repository: xxx/xxx.github.io
          publish_branch: master
```

其中，`external_repository`为你的`xxx.github.io`仓库地址，`publish_branch`为你的`xxx.github.io`仓库的分支。

需要在 Settings-Developer settings-Personal access tokens 中生成一个 token，权限选 workflow，然后在 hugo 仓库 Settings-Repository secrets 中设置`PERSONAL_TOKEN`为刚才的 token

### 部署到 Cloudflare Pages / Vercel

- https://dash.cloudflare.com/
- https://vercel.com/

Pages-新建-连接到 Git-选仓库-选 hugo

注意设置环境变量 `HUGO_VERSION = 0.105.0`

默认版本太老了

## 关于 Notion 的题外话

用了一段时间 Notion ，也是折腾了好久，建了很多页面，最后发现真的想找一个文件的时候他的搜索真的很慢，而且有时候会出现同步功能失效的情况，记笔记还是为了找起来快，所以 Obsidian 本地文件极快的搜索和双链还是更适合存笔记。而且这次从 Notion 迁移东西出来发现这个东西真的好进不好出，有条件还是把文件都按照原生 markdown 存起来。Notion 的数据库是真的方便，非常喜欢的功能，我的一些数据仍然放在 Notion 里面。

顺带一提，Obsidian 新出的 [Canvas](https://obsidian.md/canvas) 值得一试。
