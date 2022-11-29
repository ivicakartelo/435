import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'

  export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value) 
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content))
      setTitle('')
      setContent('')
    }
  }
  
  const canSave = Boolean(title) && Boolean(content)

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label>Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label>Author:</label>
        
        <label>Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
        </button>
      </form>
    </section>
  )
}