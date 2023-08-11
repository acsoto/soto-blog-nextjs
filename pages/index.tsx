import { PageSeo } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'

import Greetings from '@/components/Greetings'

export default function Home() {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <Greetings />
    </>
  )
}
