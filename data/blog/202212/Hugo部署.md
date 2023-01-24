---
title: 'Hugo部署'
date: 2022-12-15T15:31:38+08:00
tags: [APP, Hugo]
image: 'https://pic.mcac.cc/202301242342680.png'
slug: '20221215153138'
---

## 部署到 GitHub Pages

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

## 部署到 Cloudflare Pages / Vercel

- https://dash.cloudflare.com/
- https://vercel.com/

Pages-新建-连接到 Git-选仓库-选 hugo

注意设置环境变量 `HUGO_VERSION = 0.105.0`

默认版本太老了
