import moment from "moment"
import { Card, Col } from "react-bootstrap"
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

const Post = ({ publishDate, title, description, author, link, image }: AppProps) => {
  return (
    // <Col md={4} className={styles.boxWrap}>
    //   <Link href={link}>
    //     <Card className={styles.customCard}>
    //       <Card.Img className={styles.imageCard} variant="top" src={image} />
    //       <Card.Body>
    //         <Card.Title>{title}</Card.Title>
    //         <Card.Text>
    //           {description}
    //         </Card.Text>
    //         <Card.Text>
    //           {moment(publishDate).format('MM/DD/YYYY')}
    //         </Card.Text>
    //         <Card.Text>
    //           {author}
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </Link>
    // </Col>
    <div className={styles.imageCard}>
      <img src={image} />
      <div className={styles.titleBox}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Post