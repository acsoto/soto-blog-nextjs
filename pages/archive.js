import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
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
      <div>
        {Array.from(timeMap.keys()).map((year) => {
          return (
            <div key={year} className="mx-auto flex flex-col">
              <div className="text- divider text-xl font-bold text-gray-500 dark:text-opacity-50">
                {year}
              </div>
              {Array.from(timeMap.get(year).keys()).map((month) => (
                <div key={month} className="container my-3 rounded-xl p-5 shadow-xl">
                  <div>
                    <div className="mb-2 text-2xl font-bold text-gray-600 dark:text-opacity-50 ">
                      {month}
                    </div>
                    <div>
                      {timeMap
                        .get(year)
                        .get(month)
                        .map((post) => {
                          return (
                            <Link
                              key={post.slug}
                              className={'text-lg font-bold hover:text-xl'}
                              href={`/blog/${post.slug}`}
                            >
                              <span className={'mr-3 text-gray-300 dark:text-opacity-50'}>
                                {post.date.split('T')[0]}
                              </span>
                              <span className={'text-soto-100 dark:text-opacity-80'}>
                                {post.title}
                              </span>
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
      </div>
    </>
  )
}
