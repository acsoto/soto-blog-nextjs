import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'

const PostCard = ({ post }) => {
  const { slug, date, title, summary, tags, image } = post
  return (
    <Link href={`/blog/${slug}`}>
      <article className="container overflow-hidden rounded-3xl shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} className="" alt="" />
        <div className="p-5">
          <h2 className="text-xl font-bold">{title || slug}</h2>
          <section className="text-gray-500">
            <p>{summary}</p>
          </section>
          <p className="mt-3 flex flex-row space-x-3">
            <span className="text-sm text-gray-600">
              <time dateTime={date}>{formatDate(date)}</time>
            </span>
            {tags &&
              tags.map((tag) => (
                <div
                  key={tag}
                  className={
                    'rounded-md bg-gray-200 px-3 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-400'
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
