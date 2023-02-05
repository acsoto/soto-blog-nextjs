import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { FrontMatter } from '@/types/md'
import Script from 'next/script'
import Emoji from '@/components/twemoji'
import Icon from '@/components/icons'
import GitHubCard from '@/components/GitHubCard'

export const MDXComponents = {
  Image,
  Script,
  TOCInline,
  GitHubCard,
  a: CustomLink,
  pre: Pre,
  Emoji,
  Icon,
}

interface MdxLayoutRendererProps {
  mdxSource: string
  frontMatter: FrontMatter
  [key: string]: any
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }: MdxLayoutRendererProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
