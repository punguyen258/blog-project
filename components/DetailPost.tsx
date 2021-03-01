import { Post } from '../interfaces'
import { FacebookProvider, LoginButton, Comments, EmbeddedPost, Like, ShareButton } from 'react-facebook';

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
        <Comments href="http://www.facebook.com" width="500" height="1000" />
        <EmbeddedPost href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    </>
  )
}

export default DetailPost