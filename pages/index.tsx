import { useState, useEffect } from 'react';
import { fetchEntries } from '../utils/contentfulPosts'
import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Typed from 'react-typed';
import { Container, Row } from 'react-bootstrap';
import { Pagination } from 'antd';
import Link from 'next/link';
import Footer from '../components/Layout/Footer';
interface AppProps {
  posts?: any;
}

const HomePage = ({ posts }: AppProps) => {
  const pageSize = 9;
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

      <div className={styles.wrapper}>
        <div className={styles.blockquote}>
          Welcome to Hanoi, the capital of Vietnam.
          Anyone who has ever visited Hanoi will probably tell you that it may be the most beautiful city in Asia.
          Hanoi is famous over the world for its fantastic beauty, long history and unique culture.
          If you come to Hanoi, don’t forget to visit Ho Chi Minh Mausoleum, Hoan Kiem Lake, Temple of Literature, the Old Quarter and so on.
          You should also try its delicious street foods such as: “Pho“, “Bun Cha”, “Banh Mi Pate” or “Cha ca”. The weather in Hanoi is pleasant.
          I really like the spring and the autumn so much because of good weather and beautiful color of trees.
          More and more foreigners visit Hanoi every year, so what are you waiting for? Join us and discover it now!
          </div>
      </div>

      <div className={styles.postList}>
        <Container>
          <Row className={styles.gallery}>
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

      <Footer />
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