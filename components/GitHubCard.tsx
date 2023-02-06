import Image from 'next/image'
import Link from 'next/link'

const GitHubCard = ({ repo }: { repo: string }) => {
  const img = 'https://opengraph.githubassets.com/1/' + repo
  const link = 'https://github.com/' + repo
  return (
    <Link href={link}>
      <Image
        className="overflow-hidden rounded-xl shadow-2xl hover:scale-105 lg:w-2/3"
        src={img}
        alt={repo}
        width={1200}
        height={600}
      />
    </Link>
  )
}

export default GitHubCard
