import { useSelector } from 'react-redux'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { PostAuthor } from './PostAuthor'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`}>
        View post
      </Link>
    </article>
  ))

return (
  <section>
    <h2>Posts</h2>
    {renderedPosts}    
  </section>
)
}