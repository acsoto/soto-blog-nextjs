import React from 'react'
import Typed from 'typed.js'
import SocialIcon from '@/components/social-icons'
import { siteMetadata } from '@/data/siteMetadata'
import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'I was raised in Alxa, Inner Mongolia.',
        'I like 🏊‍♂️ / 🏃 / 🏸.',
        'I like 進撃の巨人.',
        'I like Minecraft.',
        'I like LOL 🎮.',
        'I like J-POP/Chinese folk music 🎵.',
        '...',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    // @ts-ignore
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      // @ts-ignore
      typed.current.destroy()
    }
  }, [])

  return (
    <div className="lg:mt-10 lg:mb-40">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className={'my-3 leading-6 text-gray-500 dark:text-soto-400 lg:w-3/5'}>
        Welcome! I’m <b>Zhou Zihang</b>. <Emoji kind="partyingFace" />
        <br />
        SOTO is a convenient way to refer to me on social media.
        <br />
        This is a place where I share my life, thoughts, and other stuff that might be interesting.
        <br />
        <br />I am now living in China <Emoji kind={'chinaFlag'} />.{` `}
        and am a senior at Beihang University, studying computer science and technology, and I plan
        to go abroad next year for my master's degree.
        <br />
        <br />I am running a Minecraft server from 2014 to now, which is probably the origin of my
        interest in programming. If you are interested, feel free to type{' '}
        <a className="text-blue-300 hover:text-blue-400" href="https://www.mcac.cc/">
          mcac.cc
        </a>{' '}
        in Minecraft and have fun.
        <br />
        <br />I have a Shiba Inu <Emoji kind={'dog'} /> named doudou. You can see him{' '}
        <a
          className="text-blue-300 hover:text-blue-400"
          href="https://www.instagram.com/puppydoudou/"
        >
          here
        </a>
        .
        <br />
        <br />
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <Link className="text-blue-300 hover:text-blue-400" href="/about">
            See more about me
          </Link>
        </div>
        <br />
        Happy reading!
        <br />
        <br />
        <div className="flex flex-row gap-2">
          <span>Contact me:</span>
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        </div>
      </div>
    </div>
  )
}

export default Greetings
