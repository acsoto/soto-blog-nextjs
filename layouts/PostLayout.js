import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import kebabCase from '@/lib/utils/kebabCase'
import Divider from '@/components/Divider'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, children }) {
  const { slug, date, title, image, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-5 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="flex flex-row justify-center space-x-3">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
                {tags &&
                  tags.map((tag) => (
                    <Link
                      key={tag}
                      className={
                        'rounded-md bg-gray-200 px-3 text-sm text-gray-700 hover:bg-gray-300'
                      }
                      href={`/tags/${kebabCase(tag)}`}
                    >
                      {tag}
                    </Link>
                  ))}
              </dl>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="rounded-xl" src={image} alt="" />
            </div>
          </header>
          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
          <Divider />
        </div>
      </article>
    </SectionContainer>
  )
}
