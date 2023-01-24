import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import PostCard from '@/components/PostCard'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <p className={'my-3 text-gray-500'}>
        Welcome! I’m Zhou Zihang. 🥳
        <br />
        This is a place where I share my life, thoughts, and other stuff that might be interesting.
      </p>
      <div className="divider"></div>
      <ul className={'flex flex-col space-y-6'} style={{ listStyle: `none` }}>
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
