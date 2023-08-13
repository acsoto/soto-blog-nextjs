import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPosts } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'

import BlogPage from './blog-page'

// async function getPosts() {
//   const posts = await getAllFilesFrontMatter('posts')
//   const tags = await getAllTags('posts')
//   const MAX_DISPLAY = 6
//   const showingPosts = posts.slice(0, MAX_DISPLAY)
//   return { props: { tags, posts, showingPosts } }
// }

export default async function Page() {
  const sortedPosts = sortPosts(allPosts)
  const posts = allCoreContent(sortedPosts)
  const tags = tagData as Record<string, number>
  return <BlogPage tags={tags} posts={posts} />
}
