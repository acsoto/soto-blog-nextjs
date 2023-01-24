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
          <div key={year} className="mx-auto flex flex-col lg:w-3/4">
            <Divider />
            <div className="text-center text-2xl font-bold">{year}</div>
            {Array.from(timeMap.get(year).keys()).map((month) => (
              <div key={month} className="container my-3 rounded-xl p-5 shadow-xl">
                <div>
                  <div className="mb-2 text-2xl font-bold text-soto-100">{month}</div>
                  <div>
                    {timeMap
                      .get(year)
                      .get(month)
                      .map((post) => {
                        return (
                          <Link
                            key={post.slug}
                            className={'text-md hover:text-lg'}
                            href={`/blog/${post.slug}`}
                          >
                            <span className={'mr-3 text-gray-400'}>{post.date.split('T')[0]}</span>
                            <span className={'text-soto-200'}>{post.title}</span>
                            <br />
                          </Link>
                        )
                      })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
