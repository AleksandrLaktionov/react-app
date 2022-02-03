import './PostForm.scss'

const PostForm = ({ post, handleChange, setPost }) => {
  return (
    <form className='post-form' onSubmit={setPost} method='POST'>
      <label htmlFor="title">title
        <input
          type="text"
          name="title"
          id="title"
          value={post.title}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="body">text
        <input
          type="text"
          name="body"
          id="body"
          value={post.body}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>submit</button>
    </form>)
};

export default PostForm;