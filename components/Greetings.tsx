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
        'I was born in 2000.',
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
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <div className="lg:mt-10 lg:mb-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <div>
          Welcome! I’m <b>Zhou Zihang</b>. <Emoji kind="partyingFace" />
          <br />
          SOTO is a convenient way to refer to me on social media.
          <br />
          This is a place where I share my life, thoughts, and other stuff that might be
          interesting.
        </div>
        <br />
        <div>
          I am now living in China <Emoji kind={'chinaFlag'} />.{` `}
          and am a senior at Beihang University, studying computer science and technology, and I
          plan to go abroad next year for my master's degree.
        </div>
        <br />
        <div>
          I am running a Minecraft server from 2014 to now, which is probably the origin of my
          interest in programming. If you are interested, feel free to type{' '}
          <a href="https://www.mcac.cc/">mcac.cc</a> in Minecraft and have fun.
          <br />
          <br />I have a Shiba Inu <Emoji kind={'dog'} /> named doudou. You can see him on his{' '}
          <a href="https://www.instagram.com/puppydoudou/">instagram</a>.
        </div>
        <br />
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <Link href="/about">See more about me</Link>
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
