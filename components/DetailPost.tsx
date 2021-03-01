import { Post } from '../interfaces'
import { FacebookProvider, Comments, EmbeddedPost } from 'react-facebook';

type ListDetailProps = {
  item: Post;
}
const DetailPost = ({ item: post }: ListDetailProps) => {


  return (
    <>
      <p>{post.fields.body}</p>
      <p>{post.fields.tags}</p>
      <p>{post.fields.category}</p>
      <FacebookProvider appId="3879627655456478">
        <Comments href={`https://blog-project-inky.vercel.app/post/${post.fields.slug}`} width="500" height="1000" />
      </FacebookProvider>
    </>
  )
}

export default DetailPost