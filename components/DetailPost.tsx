import { Post } from '../interfaces'
// import { FacebookProvider, LoginButton } from 'react-facebook';

type ListDetailProps = {
  item: Post;
}
const DetailPost = ({ item: post }: ListDetailProps) => {


  return (
    <>
      <p>{post.fields.body}</p>
      <p>{post.fields.tags}</p>
      <p>{post.fields.category}</p>
      {/* <FacebookProvider appId="1088597931155576">
        <LoginButton
          scope="email"
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider> */}
    </>
  )
}

export default DetailPost