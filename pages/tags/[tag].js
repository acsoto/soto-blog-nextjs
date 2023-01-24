import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'
import Divider from '@/components/Divider'
import PostCard from '@/components/PostCard'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', params.tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <span className="overflow-hidden rounded-md text-lg font-bold shadow-sm">
        <span className="bg-gray-100 px-2 py-1 dark:bg-gray-700">{title}</span>
        <span className="bg-soto-100 px-2 py-1 dark:bg-soto-200">{posts.length}</span>
      </span>
      <Divider />
      {/*<ListLayout posts={posts} title={title} />*/}
      <ol className={'flex flex-col space-y-6'} style={{ listStyle: `none` }}>
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ol>
    </>
  )
}
