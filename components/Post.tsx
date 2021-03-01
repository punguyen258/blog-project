import moment from "moment"
import { Button, Card, Col } from "react-bootstrap"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

interface AppProps {
  publishDate: any;
  title: any;
  description: any;
  image: any;
  author: any;
  link: any;
}

const Post: React.FC<AppProps> = ({ publishDate, title, description, author, link, image }) => {
  // let { file } = image
  return (
    <Col md={4}>
      <Link href={link}>
        <Card className={styles.customCard}>
          <Card.Img className={styles.imageCard} variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <p>{description}</p>
              <span>{moment(publishDate).format('MM/DD/YYYY')}</span>
              <p>{author}</p>

            </Card.Text>


          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default Post