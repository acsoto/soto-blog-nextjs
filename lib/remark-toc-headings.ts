import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { RemarkTocHeadingOptions, UnistNodeType, UnistTreeType } from '@/types/node'

export default function remarkTocHeadings(options: RemarkTocHeadingOptions) {
  return (tree: UnistTreeType) =>
    visit(tree, 'heading', (node: UnistNodeType, index, parent) => {
      const textContent = toString(node)
      options.exportRef.push({
        value: textContent,
        url: '#' + slug(textContent),
        depth: node.depth,
      })
    })
}
