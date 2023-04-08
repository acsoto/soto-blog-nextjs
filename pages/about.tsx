import Divider from '@/components/Divider'
import Link from 'next/link'
import GitHubCard from '@/components/GitHubCard'
import CPU from '../components/icons/CPU.svg'
import Java from '../components/icons/java.svg'
import Takeaway from '../components/icons/takeaway.svg'
import Pet from '../components/icons/pets.svg'
import Swift from '../components/icons/swift.svg'
import NextJS from '../components/icons/nextjs.svg'
import TailWindCSS from '../components/icons/tailwindcss.svg'
import ReactIcon from '../components/icons/react.svg'
import MySQL from '../components/icons/mysql.svg'
import Django from '../components/icons/django.svg'
import Nginx from '../components/icons/nginx.svg'
import TypeScript from '../components/icons/typescript.svg'
import PageTitle from '@/components/PageTitle'
import { siteMetadata } from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo title={`About - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>About</PageTitle>
      <Divider />
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <p>
          Hi, my name is <b>Zhou Zihang</b>. I'm a computer science student now.
        </p>
        <p>
          Since I was a child, I was crazy about Minecraft. Whenever I found repetitive work, I
          would rather solve it by coding, and it was then that I realized how much I enjoy solving
          problems through code. I decided to pursue a degree in computer science and have been
          learning and growing in this field ever since. In my college years, I have had the
          opportunity to work on various projects, from developing simple programs to building
          websites. I am always eager to learn more and expand my skills, and I believe that
          technology and coding can significantly impact our world.
        </p>
        <h2>Technical Skills</h2>
        <div>
          <b>Programming Languages:</b> C, Java, Python, HTML, JavaScript, Swift, Verilog...
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
        <h2>Projects</h2>
        <ul>
          <li>
            <i className="inline-block">
              <CPU className="h-6 w-6" />
            </i>
            <a
              className="mx-2 font-bold"
              href="https://github.com/acsoto/BUAA-Computer-Organization"
            >
              MIPS-CPU
            </a>
            <span>Pipeline CPU based on verilog</span>
          </li>
          <li>
            <i className="inline-block">
              <Java className="h-6 w-6" />
            </i>
            <a className="mx-2 font-bold" href="https://github.com/acsoto/BUAA-Compiler">
              Alxa-Compiler
            </a>
            <span>SysY to PCODE Compiler based on Java</span>
          </li>
          <li>
            <i className="inline-block">
              <Takeaway className="h-6 w-6" />
            </i>
            <a className="mx-2 font-bold" href="https://github.com/acsoto/TakeawayDelivery">
              TakeawayDelivery
            </a>
            <span>Takeaway delivery platform based on Django, Vue, Flutter</span>
          </li>
          <li>
            <i className="inline-block">
              <Pet className="h-6 w-6" />
            </i>
            <a className="mx-2 font-bold" href="https://github.com/PetCharm/petcharm_server">
              PetCharm
            </a>
            <span>Pet platform server based on Django</span>
          </li>
          <li>
            <i className="inline-block">
              <Swift className="h-6 w-6" />
            </i>
            <a className="mx-2 font-bold" href="https://github.com/acsoto/Memo">
              Memo
            </a>
            &
            <a className="mx-2 font-bold" href="https://github.com/acsoto/IoTMonitor">
              IoTMonitor
            </a>
            <span>2 apps based on swift</span>
          </li>
        </ul>

        <h2>About This Site</h2>
        <div>
          <GitHubCard repo="acsoto/soto-blog-nextjs" />
          <div>
            It's hosted on <a href="https://vercel.com">Vercel</a> and built with{' '}
            <a href="https://nextjs.org">
              <i className="inline-block">
                <NextJS className="h-6 w-6" />
              </i>
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com">
              <i className="inline-block">
                <TailWindCSS className="h-6 w-6" />
              </i>
            </a>
            <br />I started it with my previous{' '}
            <a href="https://github.com/acsoto/soto-blog-gatsby">Gatsby version</a> and{' '}
            <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
              Tailwind Nextjs Starter Blog
            </a>
            .
            <br />
            If you are finding inspiration, you can see my these 2 posts about this site.
            <ul>
              <li>
                <Link href="blog/202301/front-end-learning-and-gatsby">
                  前端的一些学习和 Gatsby 的使用
                </Link>
              </li>
              <li>
                <Link href="blog/202301/moving-to-nextjs">Moving to NextJS</Link>
              </li>
            </ul>
          </div>
        </div>

        <h2>Podcast</h2>

        {/*<div className="lg:flex lg:flex-row">*/}
        {/*  <Image*/}
        {/*    className="rounded lg:basis-1/4"*/}
        {/*    src={PodcastCover}*/}
        {/*    alt="Podcast"*/}
        {/*    width="256"*/}
        {/*    height="256"*/}
        {/*    quality="100"*/}
        {/*    placeholder="blur"*/}
        {/*  />*/}
        {/*  <div className="lg:basis-3/4 lg:p-8">*/}
        {/*    I and my friends have a mandarin conversation podcast talking about books and movies.*/}
        {/*    <br />*/}
        {/*    You can access it with{' '}*/}
        {/*    <a href="https://podcasts.apple.com/us/podcast/就是奇谈/id1670887501">Apple Podcast</a>*/}
        {/*    {` `}and{` `}*/}
        {/*    <a href="https://open.spotify.com/show/7L3SZKRRb0LgBm90PgY6Xd">Spotify</a>.<br />*/}
        {/*    RSS feed:{` `}*/}
        {/*    <a href="https://feed.xyzfm.space/f8fvn3qbq4y3">小宇宙</a>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <h2>My Favorite</h2>
        <h3>Books & Movies</h3>
        <div>
          I watch and read all kinds of stuff.
          <br />
          You can see what I'm watching or reading recently at{` `}
          <Link href="/library">Library Page</Link>
        </div>
        <h3>Music</h3>
        <p>
          Music has always been a significant part of my life, and I enjoy a wide range of genres. I
          am particularly drawn to Chinese folk music, Japanese pop, rock, and some Western pop
          music. I love discovering new artists and albums, and I frequently listen to new music
          through various streaming platforms and live performances.
        </p>
        <p>
          In addition to contemporary music, I also have a deep appreciation for classical music. I
          find that classical music has a timeless quality that provides a sense of calm and balance
          in my life. I enjoy listening to well-known composers such as Vivaldi, Bach, and Chopin,
          as well as lesser-known works.
        </p>
        <h2>Future Plans</h2>
        <p>
          After graduation, I plan to move to Canada to pursue a career in software development. I
          am eager to work with a team of experienced software developers and contribute my skills
          to develop innovative software solutions. In my free time, I would like to live a
          relatively free lifestyle, traveling to different parts of the world and exploring new
          cultures. If conditions permit, I also hope to become a digital nomad and work remotely
          while traveling.
        </p>
        <p>
          In conclusion, I am excited about my future in the world of technology and cannot wait to
          see where this path takes me. I hope that this blog post has given you a glimpse into my
          background and interests. If you have any questions or comments, feel free to reach out to
          me!
        </p>
      </div>
    </>
  )
}
