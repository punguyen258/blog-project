import { fetchEntries } from '../utils/contentfulPosts'
import styles from '../styles/Home.module.css'
import Post from '../components/Post'
import Typed from 'react-typed';
import { Container, Row } from 'react-bootstrap';
interface AppProps {
  posts?: any;
}

const HomePage: React.FC<AppProps> = ({ posts }) => (
  <div className="homepage">
    <div className={styles.header}>
      <img src="/logo.png" style={{ width: '300px' }} />
    </div>
    <div className="banner">
      <img src="/banner_2.jpg" style={{ width: '100%' }} />
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
            return (
              <Post key={index}
                id={post.id}
                publishDate={post.publishDate}
                title={post.title}
                description={post.description}
                // image={post.fields}
                author={post.author}
                link={`/post/${post.slug}/`}
              />
            )
          })}
        </Row>
      </Container>
    </div>
  </div>
)

export const getStaticProps = async () => {
  const res = await fetchEntries()
  const posts = await res.map((post) => {
    return post.fields
  })

  return {
    props: {
      posts,
    },
  }
}

export default HomePage