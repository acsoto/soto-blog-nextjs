import BUAA from '../components/icons/BUAA.svg'
import TailWindCSS from '../components/icons/tailwindcss.svg'
import ReactIcon from '../components/icons/react.svg'
import MySQL from '../components/icons/mysql.svg'
import Django from '../components/icons/django.svg'
import Nginx from '../components/icons/nginx.svg'
import TypeScript from '../components/icons/typescript.svg'
import { siteMetadata } from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Projects from '@/components/Projects'

export default function Resume() {
  return (
    <>
      <PageSeo title={`Resume - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2 className="text-center">Zhou Zihang</h2>
        <hr />

        <h2>Education</h2>
        <div className="flex flex-row gap-5">
          <div>
            <BUAA />
          </div>
          <div>
            <div className="text-2xl font-extrabold">Beihang University</div>
            <div className="text-lg">Bachelor | Computer Science & Technology</div>
            <div className="text-lg text-gray-500">2019 - 2023</div>
          </div>
        </div>

        <hr />

        <h2>Technical Skills</h2>
        <div>
          <b>Programming Languages:</b> C, Java, Python, HTML, JavaScript, Swift, Verilog...
          <br />
          <br />
          <b>Frameworks & Tools:</b>
          <span className="ml-2 space-x-2">
            <i className="inline-block">
              <ReactIcon className="h-6 w-6" />
            </i>
            <i className="inline-block">
              <Django className="h-6 w-6" />
            </i>
            <i className="inline-block">
              <MySQL className="h-6 w-6" />
            </i>
            <i className="inline-block">
              <Nginx className="h-6 w-6" />
            </i>
            <i className="inline-block">
              <TypeScript className="h-6 w-6" />
            </i>
            <i className="inline-block">
              <TailWindCSS className="h-6 w-6" />
            </i>
          </span>
        </div>

        <hr />

        <h2>Projects</h2>
        <Projects />
      </div>
    </>
  )
}
