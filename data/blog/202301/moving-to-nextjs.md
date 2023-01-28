---
title: Moving to NextJS
date: 2023-01-28T15:40:54
tags: [NextJS, React]
image: 'https://pic.mcac.cc/202301281557064.png'
slug: 20230128154054
---

Still learning JS and TS and solving blog problems, I moved the blog from Gatsby to NextJS.

Now the blog is hosted on vercel, built with NextJS and TailwindCSS.

I encountered so many difficulties before in [the Gatsby version](https://github.com/acsoto/soto-blog-gatsby).

Thanks to [timlrx's starter](https://github.com/timlrx/tailwind-nextjs-starter-blog), I don't need to manage data and typography from scratch like in Gatsby. (I struggled with dark mode, markup list gap, and prism.js bad style)

## Modifications

I modified something else except for changing designs from the starter to my last version.

- **Dark Mode**: Changed background `#22272E` and text color `ADBAC7` in dark mode with Github dark dimmed style. Changed cards and buttons hovering color to `bg-opacity-10`
- **Images**: Using `NextJS Images` in `PostCard` and the cover of posts. It helped minified the size of the original images. However, because it requires me to offer width and depth in advance, It is a little challenging to apply it in markdown files. Maybe I would use `mdx` but I still don't want to break pure markdown files.
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

<Image src="https://pic.mcac.cc/202301281627025.png" alt="" width={200} height={50}/>

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

## Using MarkdownX

Despite `mdx`, we can use its features in `md` files without the need to change the filename extension. But it is a bit annoying to edit JSX code in `md` files without auto-completion.

With this starter and React framework, It's easy to use JSX in a markdown file directly. For example:

<div className="grid grid-cols-2 gap-3 ">
<div>![](https://pic.mcac.cc/202301281557064.png)</div>
<div>![](https://pic.mcac.cc/202301242342680.png)</div>
</div>

source code:

```tsx
<div className="grid grid-cols-2 gap-3 ">
  <div>![](https://pic.mcac.cc/202301281557064.png)</div>
  <div>![](https://pic.mcac.cc/202301242342680.png)</div>
</div>
```

The problem is my previous embedded Spotify and Apple Music iframe doesn't work.

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

## Domain Blocked

In China, the domain `vercel.app` is banned. But I found that a guy's website totally on Vercel can work perfectly. I tested it and find that in most areas of China, the website is accessible. But mine breaks(I set A and CNAME with my domain). Without VPN, I can not even access it. I spent two hours checking why. I even sent an email to the guy to ask if there is something to be managed that I haven't mentioned. It turned out that my domain `zzhgo.com` is banned by GFW in China. It is so depressing. So I can only change my domain to `atksoto.com`.
