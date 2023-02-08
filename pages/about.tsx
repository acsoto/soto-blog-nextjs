import Divider from '@/components/Divider'
import Link from 'next/link'
import GitHubCard from '@/components/GitHubCard'

export default function About() {
  return (
    <>
      <h1 className="text-5xl font-bold">About</h1>
      <Divider />
      <div className="prose dark:prose-dark lg:prose-lg">
        <p>Hi, my name is Zhou Zihang. I'm a computer science student now.</p>
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
        <p>
          Programming Languages: C, Java, Python, SQL, Swift, Verilog, Latex...
          <br />
          Frameworks & Tools: Numpy, Pandas, Matplotlib, Seaborn, Django, Git, Vim, Tensorflow...
        </p>
        <h2>About This Site</h2>
        <div>
          It's hosted on <a href="https://vercel.com">Vercel</a> and built with{' '}
          <a href="https://nextjs.org">NextJS</a> and{' '}
          <a href="https://tailwindcss.com">TailwindCSS</a>.<br />I started it with{' '}
          <a href="https://github.com/acsoto/soto-blog-gatsby">my previous gatsby version</a> and{' '}
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
          The repository is shown below.
          <GitHubCard repo="acsoto/soto-blog-nextjs" />
        </div>
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
