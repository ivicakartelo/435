import { useSelector } from 'react-redux'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <TimeAgo timestamp={post.date} />
      <p>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  ))

return (
  <section>
    <h2>Posts</h2>
    {renderedPosts}    
  </section>
)
}