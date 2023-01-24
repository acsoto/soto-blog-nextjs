import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'

const PostCard = ({ post }) => {
  const { slug, date, title, summary, tags, image } = post
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mx-auto overflow-hidden rounded-xl shadow-md hover:bg-gray-100 dark:hover:bg-gray-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} className="aspect-video object-cover" alt="" />
        <div className="p-3">
          <h2 className="text-xl font-bold">{title || slug}</h2>
          <section className="text-gray-500">
            <p>{summary}</p>
          </section>
          <span className="text-sm text-gray-600">
            <time dateTime={date}>{formatDate(date)}</time>
          </span>
          <p className="mt-3 flex flex-row space-x-3">
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
          </p>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
