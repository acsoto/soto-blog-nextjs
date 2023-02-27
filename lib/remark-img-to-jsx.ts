import { visit } from 'unist-util-visit'
import { Node } from 'unist'
import { UnistImageNode, UnistNodeType } from '@/types/node'
import { getImgProps } from '@/lib/get-img-props'

async function addProps(imageNode: UnistImageNode): Promise<void> {
  if (
    imageNode.url.startsWith('https://pic.mcac.cc/') &&
    (imageNode.url.toLowerCase().endsWith('.png') ||
      imageNode.url.toLowerCase().endsWith('.jpg') ||
      imageNode.url.toLowerCase().endsWith('.jpeg'))
  ) {
    const imgProps = await getImgProps(imageNode.url)

    ;(imageNode.type = 'mdxJsxFlowElement'),
      (imageNode.name = 'Image'),
      (imageNode.attributes = [
        { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
        { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
        { type: 'mdxJsxAttribute', name: 'width', value: imgProps.width },
        { type: 'mdxJsxAttribute', name: 'height', value: imgProps.height },
        { type: 'mdxJsxAttribute', name: 'quality', value: 100 },
        { type: 'mdxJsxAttribute', name: 'placeholder', value: 'blur' },
        {
          type: 'mdxJsxAttribute',
          name: 'blurDataURL',
          value: imgProps.blurDataURL,
        },
      ])
  }
}

const remarkImgToJsx = () => {
  // @ts-ignore
  return async function transformer(tree: Node): Promise<Node> {
    const images: UnistImageNode[] = []

    visit(
      tree,
      (node: UnistNodeType) =>
        node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node: UnistNodeType) => {
        const imageNode = node.children.find((n) => n.type === 'image') as UnistImageNode
        images.push(imageNode)
        // Change node types from p to div to avoid nesting error
        node.type = 'div'
        node.children = [imageNode]
      }
    )

    for (const image of images) {
      await addProps(image)
    }
  }
}

export default remarkImgToJsx
