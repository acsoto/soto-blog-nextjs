import { visit } from 'unist-util-visit'
import imageSize from 'image-size'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'
import { Node } from 'unist'
import { UnistImageNode, UnistNodeType } from '@/types/node'
import { getPlaiceholder } from 'plaiceholder'

async function addProps(imageNode: UnistImageNode): Promise<void> {
  let res: ISizeCalculationResult
  let blur64: string
  if (imageNode.url.startsWith('http') && !imageNode.url.endsWith('svg')) {
    const imageRes = await fetch(imageNode.url)
    const arrayBuffer = await imageRes.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    res = await imageSize(buffer)
    blur64 = (await getPlaiceholder(buffer)).base64
    ;(imageNode.type = 'mdxJsxFlowElement'),
      (imageNode.name = 'Image'),
      (imageNode.attributes = [
        { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
        { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
        { type: 'mdxJsxAttribute', name: 'width', value: res.width },
        { type: 'mdxJsxAttribute', name: 'height', value: res.height },
        { type: 'mdxJsxAttribute', name: 'quality', value: 100 },
        { type: 'mdxJsxAttribute', name: 'placeholder', value: 'blur' },
        { type: 'mdxJsxAttribute', name: 'blurDataURL', value: blur64 },
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
