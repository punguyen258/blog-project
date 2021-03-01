import moment from "moment"
import { Button, Card, Col } from "react-bootstrap"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

interface AppProps {
  publishDate: any;
  title: any;
  description: any;
  // image?: any;
  author: any;
  id: any;
  link: any;
}

const Post: React.FC<AppProps> = ({ publishDate, title, description, author, id, link }) => {
  // let { file } = image
  return (
    <Col md={4}>
      <Card>
        <Card.Img className={styles.imageCard} variant="top" src="/item.jpg" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>{description}</p>
            <span>{moment(publishDate).format('MM/DD/YYYY')}</span>
            <p>{author}</p>
            <p>{id}</p>
          </Card.Text>
          <Link href={link}>
            <a>Link</a>
          </Link>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Post