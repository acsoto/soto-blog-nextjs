import React from 'react'
import Typed from 'typed.js'
import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

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
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <p>
          Welcome! I’m <b>Zhou Zihang</b>. <Emoji kind="partyingFace" />
        </p>

        <p>
          "SOTO" is the abbreviation I use on social media. I currently live in China{` `}
          <Emoji kind={'chinaFlag'} /> and have just graduated from Beihang University with a
          bachelor's degree in Computer Science and Technology. I'm planning to study abroad in
          Canada and am currently waiting for my visa.
        </p>

        <p>
          I've been operating a Minecraft server since 2014, which is probably where my interest in
          programming began. If you're interested, feel free to join by entering{' '}
          <a href="https://www.mcac.cc/">mcac.cc</a> in client.
        </p>

        <p>
          I have an adorable Shiba Inu <Emoji kind={'dog'} /> named doudou. You can see him on his{' '}
          <a href="https://www.instagram.com/puppydoudou/">instagram</a>.
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />

          <p>
            This website is used to introduce myself, publish some regular blogs, document my travel
            diaries, as well as record books, movies, and music I've experienced. Feel free to{' '}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Greetings
