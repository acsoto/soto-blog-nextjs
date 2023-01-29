import { FrontMatter } from '@/types/md'
import { siteMetadata } from '@/data/siteMetadata'

export async function addImgMetadata(posts: FrontMatter[]) {
  for (const post of posts) {
    if (post.image) {
      const res = await fetch(post.image + '?x-oss-process=image/info')
      const json = await res.json()

      const height = json.ImageHeight.value
      const width = json.ImageWidth.value
      post.imageMetadata = {
        height: height,
        width: width,
        blurDataURL: `data:image/png;base64,${siteMetadata.blur64}`,
      }
    }
  }
}
