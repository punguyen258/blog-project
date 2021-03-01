import { fetchEntries } from '../utils/contentfulPosts'
import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Typed from 'react-typed';
import { Container, Row } from 'react-bootstrap';
import Pagination from 'next-pagination'
import Link from 'next/link';
interface AppProps {
  posts?: any;
}

const HomePage: React.FC<AppProps> = ({ posts }) => {
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
            {posts.map((post, index) => {
              const urlImage = post.heroImage.fields.file.url
              return (
                <>
                  <Post key={index}
                    publishDate={post.publishDate}
                    title={post.title}
                    description={post.description}
                    image={urlImage}
                    author={post.author}
                    link={`/post/${post.slug}/`}
                  />
                </>
              )
            })}
          </Row>
        </Container>
      </div>
      <Pagination />
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