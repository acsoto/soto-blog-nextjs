import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import kebabCase from '@/lib/utils/kebabCase'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

export default function PostLayout({ frontMatter, authorDetails, children }) {
  const { slug, date, title, image, tags, imageMetadata } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="mx-auto xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="my-3 flex flex-col justify-center gap-3 lg:flex-row">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(new Date(date))}</time>
                  </dd>
                </div>
                <div className="flex flex-row justify-center space-x-3">
                  {tags &&
                    tags.map((tag) => (
                      <Link
                        key={tag}
                        className={
                          'rounded-md border-2 bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text px-2 text-sm font-bold text-transparent hover:text-gray-500'
                        }
                        href={`/tags/${kebabCase(tag)}`}
                      >
                        {tag}
                      </Link>
                    ))}
                </div>
              </dl>
              <Image
                className="rounded-xl"
                src={image}
                width={imageMetadata.width}
                height={imageMetadata.height}
                alt=""
                placeholder="blur"
                blurDataURL={imageMetadata.blurDataURL}
              />
            </div>
          </header>
          <div className="prose max-w-none pt-10 pb-8 prose-img:rounded-xl dark:prose-dark lg:prose-lg">
            {children}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
