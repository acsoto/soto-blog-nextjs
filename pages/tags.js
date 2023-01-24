import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="SOTO-BLOG Tags" />
      <div className="divider"></div>
      <div className="flex flex-wrap gap-4">
        {sortedTags.map((t) => {
          return (
            <span key={t} className="overflow-hidden rounded-md text-lg font-bold shadow-sm">
              <Link href={`/tags/${kebabCase(t)}`}>
                <span className="bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                  {t}
                </span>
                <span className="bg-soto-100 p-2 dark:bg-soto-200">{tags[t]}</span>
              </Link>
            </span>
          )
        })}
      </div>
    </>
  )
}
