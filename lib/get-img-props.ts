import { getPlaiceholder } from 'plaiceholder'

export async function getImgProps(src: string) {
  const { base64, img } = await getPlaiceholder(src, { size: 10 })
  return {
    ...img,
    blurDataURL: base64,
  }
}
