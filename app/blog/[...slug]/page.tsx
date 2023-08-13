import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPosts, Post } from 'contentlayer/generated'
import PostLayout from '@/layouts/PostLayout'

export const generateStaticParams = async () => {
  const paths = allPosts.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const sortedPosts = sortPosts(allPosts) as Post[]
  const post = sortedPosts.find((p) => p.slug === slug) as Post
  const mainContent = coreContent(post)

  return (
    <>
      {post.draft !== true ? (
        <PostLayout content={mainContent}>
          <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
        </PostLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
