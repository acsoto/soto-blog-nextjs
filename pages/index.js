import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import PostCard from '@/components/PostCard'
import Greetings from '@/components/Greetings'
import Divider from '@/components/Divider'

const MAX_DISPLAY = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Greetings />
      <h1 className="mt-10 text-2xl font-bold">Recent Posts</h1>
      <Divider />
      <ul className={'grid gap-6 lg:grid-cols-2'} style={{ listStyle: `none` }}>
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug } = post
          return (
            <li key={slug}>
              <PostCard post={post} />
            </li>
          )
        })}
      </ul>

      {posts.length > MAX_DISPLAY && (
        <div className="my-4 flex justify-center">
          <Link href="/archive" className="text-soto-100 hover:text-soto-200" aria-label="More">
            More &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
