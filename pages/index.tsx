import { useState, useEffect } from 'react';
import { fetchEntries } from '../utils/contentfulPosts'
import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Typed from 'react-typed';
import { Container, Row } from 'react-bootstrap';
import { Pagination } from 'antd';
import Link from 'next/link';
import "antd/dist/antd.css";
interface AppProps {
  posts?: any;
}

const HomePage: React.FC<AppProps> = ({ posts }) => {
  const pageSize = 8;
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);
  const handleChangePage = (page) => {
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  }
  useEffect(() => {
    handleChangePage(1)
  }, [])

  return (
    <div className="homepage">
      <div className={styles.header}>
        <Link href="/">
          <img src="/logo.png" style={{ width: '300px' }} />
        </Link>
      </div>
      <div className="banner">
        <img src="/banner_2.jpg" style={{ width: '100%', height: '100vh' }} />
        <Typed
          className={styles.typing}
          strings={['Welcome to Photo Blog.']}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </div>

      <div className={styles.postList}>
        <Container>
          <Row>
            {posts.map((post, index) =>
              index >= minIndex && index < maxIndex && (
                <Post key={index}
                  publishDate={post.publishDate}
                  title={post.title}
                  description={post.description}
                  image={post.heroImage.fields.file.url}
                  author={post.author}
                  link={`/post/${post.slug}/`}
                />
              )
            )}
          </Row>
        </Container>
      </div>

      <Pagination className={styles.pagination}
        defaultCurrent={1}
        total={posts.length}
        pageSize={pageSize}
        onChange={handleChangePage}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetchEntries()
  const posts = await res!.map((post) => {
    return post.fields
  })

  return {
    props: {
      posts,
    },
  }
}

export default HomePage