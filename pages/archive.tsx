import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSeo } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'
import Link from '@/components/Link'
import Divider from '@/components/Divider'
import { FrontMatter } from '@/types/md'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Archive({ posts }) {
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

  return (
    <>
      <PageSeo title={`Archive - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        {Array.from(timeMap.keys()).map((year) => {
          return (
            <div key={year}>
              <Divider>{year}</Divider>
              <ol className="relative ml-3 border-l border-gray-200 dark:border-gray-700">
                {Array.from(timeMap.get(year).keys()).map((month) => (
                  <li key={month} className="mb-10 ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-soto-100 ring-8 ring-white dark:ring-dark">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 text-soto-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {month}
                    </h3>
                    <div>
                      {timeMap
                        .get(year)
                        .get(month)
                        .map((post) => {
                          return (
                            <div className="text-lg font-bold" key={post.slug}>
                              <span className={'mr-3 text-gray-300 dark:text-opacity-50'}>
                                {post.date.split('T')[0]}
                              </span>
                              <Link href={`/blog/${post.slug}`}>
                                <span
                                  className={
                                    'text-soto-100 hover:text-soto-200 dark:text-opacity-80'
                                  }
                                >
                                  {post.title}
                                </span>
                              </Link>
                            </div>
                          )
                        })}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>
    </>
  )
}
