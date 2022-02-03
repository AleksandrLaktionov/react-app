import './PostItem.scss'

const PostItem = ({ post }) => {
  return (
    <div className='posts-item'>
      <h1><span>{post.userId}.</span> {post.title}</h1>
      <h3>{post.body}</h3>
      <hr />
    </div>
  );
}

export default PostItem