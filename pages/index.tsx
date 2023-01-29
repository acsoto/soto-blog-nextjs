import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import PostCard from '@/components/PostCard'
import Greetings from '@/components/Greetings'
import Divider from '@/components/Divider'
import { FrontMatter } from '@/types/md'
import { addImgMetadata } from '@/lib/add-img-metadata'

const MAX_DISPLAY = 10

export async function getStaticProps() {
  const posts: FrontMatter[] = await getAllFilesFrontMatter('blog')
  const showingPosts = posts.slice(0, MAX_DISPLAY)

  await addImgMetadata(showingPosts)

  return { props: { showingPosts } }
}

export default function Home({ showingPosts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <Greetings />
      <Divider />
      <ul className={'grid gap-6 lg:grid-cols-2'} style={{ listStyle: `none` }}>
        {showingPosts.map((post) => {
          const { slug } = post
          return (
            <li key={slug}>
              <PostCard post={post} />
            </li>
          )
        })}
      </ul>
      <Divider className="mt-4">
        <Link href="/archive" className="text-soto-100 hover:text-soto-200" aria-label="More">
          More
        </Link>
      </Divider>
    </>
  )
}
