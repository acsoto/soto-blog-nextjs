import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import { FrontMatter } from '@/types/md'

const PostCard = ({ post }: { post: FrontMatter }) => {
  const { slug, date, title, summary, tags, image, imgProps } = post
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mx-auto overflow-hidden rounded-xl shadow-md duration-300 hover:scale-105 dark:bg-dark-100">
        <Image
          src={image}
          className="aspect-video w-full object-cover"
          width={imgProps.width}
          height={(imgProps.width * 9) / 16}
          alt=""
          placeholder="blur"
          blurDataURL={imgProps.blurDataURL}
        />
        <div className="p-3">
          <h2 className="text-xl font-bold">{title || slug}</h2>
          <section className="text-gray-500">
            <p>{summary}</p>
          </section>
          <span className="text-sm text-gray-600">
            <time dateTime={date}>{formatDate(date)}</time>
          </span>
          <div className="mt-3 flex flex-row space-x-3">
            {tags &&
              tags.map((tag) => (
                <div
                  key={tag}
                  className={
                    'rounded-md border-2 bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text px-2 text-sm font-bold text-transparent'
                  }
                >
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
