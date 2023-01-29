import { FrontMatter } from '@/types/md'
import imageSize from 'image-size'
import { getPlaiceholder } from 'plaiceholder'

export async function addImgMetadata(posts: FrontMatter[]) {
  for (const post of posts) {
    if (post.image) {
      const imageRes = await fetch(post.image)
      const arrayBuffer = await imageRes.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const res = await imageSize(buffer)
      const height = res.height || 1600
      const width = res.width || 900
      const blur64 = (await getPlaiceholder(buffer)).base64 || ''
      post.imageMetadata = {
        height: height,
        width: width,
        blurDataURL: blur64,
      }
    }
  }
}
