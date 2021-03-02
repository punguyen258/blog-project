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

      <div className="footer-dark">
        <footer>
          <Container>
            <Row>
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Hosting</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
              </div>
              <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
            </Row>
            <p className="copyright">Company Name © 2018</p>
          </Container>
        </footer>
      </div>
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