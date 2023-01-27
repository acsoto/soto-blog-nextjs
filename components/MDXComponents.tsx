import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import { FrontMatter, PageLayout } from '@/types/md'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

interface MdxLayoutRendererProps {
  layout: PageLayout
  mdxSource: string
  frontMatter: FrontMatter
  [key: string]: any
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: MdxLayoutRendererProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
