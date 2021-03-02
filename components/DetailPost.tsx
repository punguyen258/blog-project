import { Post } from '../interfaces'
import { FacebookProvider, Comments, EmbeddedPost } from 'react-facebook';
import React from 'react';
import Layout from './Layout';
import { Container } from 'react-bootstrap';

type ListDetailProps = {
  item: Post;
}
const DetailPost = ({ item: post }: ListDetailProps) => {
  const urlImage = post.fields.heroImage.fields.file.url
  return (
    <Layout>
      <Container>
        <img src={urlImage} style={{ width: '100%' }} />
        <p>{post.fields.body}</p>
        <p>{post.fields.tags}</p>
        <p>{post.fields.category}</p>
        <FacebookProvider appId="3879627655456478">
          <Comments href={`https://blog-project-inky.vercel.app/post/${post.fields.slug}`} width="500" height="1000" />
        </FacebookProvider>
      </Container>
    </Layout>
  )
}

export default DetailPost