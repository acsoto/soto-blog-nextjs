import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import Divider from '@/components/Divider'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <Divider />
      <div className="flex flex-wrap gap-4">
        {sortedTags.map((t) => {
          return (
            <div key={t} className="btn-outline btn-primary btn gap-2 text-lg font-bold">
              <Link href={`/tags/${kebabCase(t)}`}>
                {t}
                <div className="badge ml-2">{tags[t]}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
