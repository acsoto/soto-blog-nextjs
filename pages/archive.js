import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Divider from '@/components/Divider'
import PostCard from '@/components/PostCard'
import Link from '@/components/Link'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const timeMap = new Map()
  for (const post of posts) {
    if (post.date !== null) {
      const year = new Date(post.date).getFullYear()
      const month = new Date(post.date).toDateString().split(' ')[1]
      if (!timeMap.has(year)) {
        timeMap.set(year, new Map())
      }
      if (!timeMap.get(year).has(month)) {
        timeMap.get(year).set(month, [])
      }
      timeMap.get(year).get(month).push(post)
    }
  }

  return (
    <>
      <PageSEO title={`Archive - ${siteMetadata.author}`} description={siteMetadata.description} />
      {Array.from(timeMap.keys()).map((year) => {
        return (
          <div key={year} className="flex w-full flex-col border-opacity-50">
            <div className="divider text-xl font-bold">{year}</div>
            {Array.from(timeMap.get(year).keys()).map((month) => (
              <div key={month} className="card my-3 bg-base-100 shadow-xl">
                <div className="card-body">
                  <span className={'text-primary text-3xl font-bold'}>{month}</span>
                  {timeMap
                    .get(year)
                    .get(month)
                    .map((post) => {
                      return (
                        <Link
                          key={post.slug}
                          className={'text-lg hover:text-xl'}
                          href={`/blog/${post.slug}`}
                        >
                          <span className={'mr-3 text-primary-content/25'}>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className={'text-primary-content/75'}>{post.title}</span>
                        </Link>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
