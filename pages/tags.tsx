import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import Divider from '@/components/Divider'
import PageTitle from '@/components/PageTitle'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSeo title={`Tags - ${siteMetadata.author}`} description="SOTO-BLOG Tags" />
      <PageTitle>Tags</PageTitle>
      <Divider />
      <div className="flex flex-wrap gap-4">
        {sortedTags.map((t) => {
          return (
            <span
              key={t}
              className="overflow-hidden rounded-md border-2 text-2xl font-bold duration-300 hover:scale-110"
            >
              <Link href={`/tags/${kebabCase(t)}`}>
                <span className="p-2 text-soto-100">{t.toUpperCase()}</span>
                <span className="bg-gray-100 p-2 text-gray-500 dark:bg-gray-700 dark:text-soto-400">
                  {tags[t]}
                </span>
              </Link>
            </span>
          )
        })}
      </div>
    </>
  )
}
