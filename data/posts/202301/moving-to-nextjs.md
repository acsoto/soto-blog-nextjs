---
title: Moving to NextJS
date: 2023-01-28T15:40:54
tags: [React]
image: 'http://img.atksoto.com/2022/202301281557064.png'
---

Still learning JS and TS and solving blog problems, I moved the blog from Gatsby to NextJS.

Now the blog is hosted on vercel, built with NextJS and TailwindCSS.

I encountered so many difficulties before in [the Gatsby version](https://github.com/acsoto/soto-blog-gatsby).

Thanks to [timlrx's starter](https://github.com/timlrx/tailwind-nextjs-starter-blog), I don't need to manage data and typography from scratch like in Gatsby. (I struggled with dark mode, markup list gap, and prism.js bad style)

## Modifications

I modified something else except for changing designs from the starter to my last version.

- **Dark Mode**: Changed background `#22272E` and text color `ADBAC7` in dark mode with Github dark dimmed style. Changed cards and buttons hovering color to `bg-opacity-10`
- **Images**: Using `NextJS Images` in `PostCard` and the cover of posts. It helped minified the size of the original images. However, because it requires me to offer width and depth in advance, It is a little challenging to apply it in markdown files. Maybe I would use `mdx` but I still don't want to break pure markdown files. I will talk about this later.
- **Minor Modifications**
  - Greetings with gradient background color text and Twemoji. <i className="twa twa-partying-face inline-block" /> (Inspired by [Leo](https://www.leohuynh.dev))
  - Two columns post cards layout on the large screen.
  - Archive page layout: Using [Flowbite](https://flowbite.com), which is a great Tailwind components framework. With it, I removed the daisyUI I used before.

When I was trying to upgrade some dependencies, I found it difficult to solve some problems. For example, if I upgrade React to 18 and NextJS to 13, everything seems to be OK in dev mode. But some buttons don't work after officially building and running it.

- React 18 "Hydration failed because the initial UI does not match what was rendered on the server."
  https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
- Package subpath './jsx-runtime.js' is not defined by "exports"
  update pkg

## Migrate To TypeScript

<Image src="http://img.atksoto.com/2022/202301281627025.png" alt="" width={200} height={50}/>

As said in TypeScript Documents:

> Most programming languages would throw an error when these sorts of errors occur, some would do so during compilation — before any code is running. When writing small programs, such quirks are annoying but manageable; when writing applications with hundreds or thousands of lines of code, these constant surprises are a serious problem.

I think the problem I encountered may be solved if I can migrate to TypeScript. At least, I won't spend so much time searching google, stackoverflow, and GitHub to figure out why everything was OK but the buttons broke after building, which is totally a waste of energy and I can't find why.

References:

- [Official docs](https://www.typescriptlang.org/docs/)
- [NextJS docs](https://nextjs.org/docs/basic-features/typescript)

TypeScript has [so many features to learn](https://basarat.gitbook.io/typescript/). Now, I just moved from JavaScript in an unstrict way to make it work first.

it's like moving Python to Java😂:

```tsx {1}
const timeMap: Map<string, Map<string, Array<FrontMatter>>> = new Map()
for (const post of posts) {
  if (post.date !== null) {
    const year: string = new Date(post.date).getFullYear().toString()
    const month: string = new Date(post.date).toDateString().split(' ')[1]
    if (!timeMap.has(year)) {
      timeMap.set(year, new Map())
    }
    if (!timeMap.get(year).has(month)) {
      timeMap.get(year).set(month, [])
    }
    timeMap.get(year).get(month).push(post)
  }
}
```

There are so many files from the original starter I haven't added types. So bugs may still exist. I plan to upgrade React and NextJS after I fully migrate to TypeScript.

After migrating to TypeScript, I tried to upgrade React and Next again but it still had bugs in the client end. I finally figured out why. It's because the starter uses [Preact](https://preactjs.com) in the building process. However, Preact doesn't yet shim the new hooks in React 18. So I just removed it and the upgrade succeeded.

## Using MarkdownX

Despite `mdx`, we can use its features in `md` files without the need to change the filename extension. But it is a bit annoying to edit JSX code in `md` files without auto-completion.

With this starter and React framework, It's easy to use JSX in a markdown file directly. For example:

<div className="grid grid-cols-2 gap-3">
<div>![](http://img.atksoto.com/2022/202301281557064.png)</div>
<div>![](http://img.atksoto.com/2022/202301242342680.png)</div>
</div>

source code:

```tsx
<div className="grid grid-cols-2 gap-3">
  <div>![](http://img.atksoto.com/2022/202301281557064.png)</div>
  <div>![](http://img.atksoto.com/2022/202301242342680.png)</div>
</div>
```

The problem is my previous embedded Spotify and Apple Page iframe doesn't work.

If I directly copy the code Apple offers, it'll show:

> Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style=`{{marginRight: spacing + 'em'}}` when using JSX.

We need to observe JSX's style. At the same time, to use this, we need to disable **Content Security Policy** ([CSP](https://developer.mozilla.org/en-US/docs/Glossary/CSP)).

<iframe className="rounded-xl" src="https://embed.music.apple.com/us/album/celestial/1641565065?i=1641565456"></iframe>

Actually, we can just use third part API and JSX to design components and use them in mdx by ourselves. But too many components used in markdown files will break their migratability.

**Custom Components**

```tsx
<TOCInline toc={props.toc} asDisclosure />
```

<TOCInline toc={props.toc} asDisclosure />

## NextJS Images[^1]

[^1]: https://nextjs.org/docs/basic-features/image-optimization

The problem is that I use remote images that are hosted on Aliyun OSS. So when rendering markdown files, I can ~~not~~ (I find I can later) get `depth` and `height` in advance, which is necessary for NextJS Images. So If I want to change `img` to `NextImage`, I have to get images metadata before the rendering process. I use [image-size](https://www.npmjs.com/package/image-size?activeTab=readme) to get metadata and [plaiceholder](https://github.com/joe-bell/plaiceholder) to get `blur64` of the image (Referring [this post](https://nikolovlazar.com/blog/generating-blur-for-dynamic-images-nextjs))

Visit all nodes (We need to use [unist-util-visit](https://github.com/syntax-tree/unist-util-visit)) to get `img` nodes and `addProps` for them. `visit` lets us find the image nodes (in markdown, an image will be transferred to `p` node and `img` node). The first parameter is `tree`; the second is the function that filters nodes; the third parameter is the function that does something to nodes.[^2]

[^2]: Content as structured data https://unifiedjs.com

**Note**: Use `async`, `await`, `Promise`.

```ts:remark-img-to-jsx.ts {2} {24}
import { visit } from 'unist-util-visit'
import imageSize from 'image-size'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'

const remarkImgToJsx = () => {
  return async function transformer(tree: Node): Promise<Node> {
    const images: UnistImageNode[] = []

    visit(
      tree,
      (node: UnistNodeType) =>
        node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node: UnistNodeType) => {
        const imageNode = node.children.find((n) => n.type === 'image') as UnistImageNode
        images.push(imageNode)
        // Change node types from p to div to avoid nesting error
        node.type = 'div'
        node.children = [imageNode]
      }
    )

    for (const image of images) {
      await addProps(image)
    }
  }
}
```

`addProps` replaces the original attributes of image nodes with the NextJS Image attributes (blur placeholder is calculated by [plaiceholder](https://github.com/joe-bell/plaiceholder))

```ts:remark-img-to-jsx.ts {9,10}
async function addProps(imageNode: UnistImageNode): Promise<void> {
  let res: ISizeCalculationResult
  let blur64: string
  if (imageNode.url.startsWith('http') && !imageNode.url.endsWith('svg')) {
    const imageRes = await fetch(imageNode.url)
    const arrayBuffer = await imageRes.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    res = await imageSize(buffer)
    blur64 = (await getPlaiceholder(buffer)).base64
    ;(imageNode.type = 'mdxJsxFlowElement'),
      (imageNode.name = 'Image'),
      (imageNode.attributes = [
        { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
        { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
        { type: 'mdxJsxAttribute', name: 'width', value: res.width },
        { type: 'mdxJsxAttribute', name: 'height', value: res.height },
        { type: 'mdxJsxAttribute', name: 'quality', value: 100 },
        { type: 'mdxJsxAttribute', name: 'placeholder', value: 'blur' },
        { type: 'mdxJsxAttribute', name: 'blurDataURL', value: blur64 },
      ])
  }
}
```

Now, every original image has been changed from:

```html
<p><img src="..." /></p>
```

to NexJS Images, which is on-demand image resizing.

**Note**: fetching remote images means that the server gets data first and the building time of the site will be much longer.

After doing these, I find that the performance of the site on the cloud is good, but the local dev version takes a long time to refresh, which drives me crazy.

Then I find that my image hoster can offer `width` and `height` directly by calling API, which will help me save refreshing and building time.

For example, if I call an image with URL `?x-oss-process=image/info`, I can get:

```json
{
  "FileSize": { "value": "4152561" },
  "Format": { "value": "jpg" },
  "FrameCount": { "value": "1" },
  "ImageHeight": { "value": "3712" },
  "ImageWidth": { "value": "5568" },
  "ResolutionUnit": { "value": "2" },
  "XResolution": { "value": "72/1" },
  "YResolution": { "value": "72/1" }
}
```

The hoster can do some image processing but it can not offer `blur64` like what `plaiceholder` does. So I use this [website](https://png-pixel.com) offered by NextJS docs to get a fixed `blur64` and apply it.

```ts
const res = await fetch(post.image + '?x-oss-process=image/info')
const json = await res.json()

const height = json.ImageHeight.value
const width = json.ImageWidth.value
post.imageMetadata = {
  height: height,
  width: width,
  blurDataURL: `data:image/png;base64,${siteMetadata.blur64}`,
}
```

```ts:siteMetadata.js
blur64:   'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=',
```

## Domain Blocked

In China, the domain `vercel.app` is banned. But I found that a guy's website totally on Vercel can work perfectly. I tested it and find that in most areas of China, the website is accessible. But mine breaks(I set A and CNAME with my domain). Without VPN, I can not even access it. I spent two hours checking why. I even sent an email to the guy to ask if there is something to be managed that I haven't mentioned. It turned out that my domain `zzhgo.com` is banned by GFW in China. It is so depressing. So I can only change my domain to `atksoto.com`.
