import React from 'react'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import styles from '../../styles/Layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab, far, fas);

const Footer = () => (
  <div className={styles.footerDark}>
    <footer>
      <Container>
        <Row>
          <div className="col-md-6 item text">
            <h3 className={styles.titleItem}>Introduction</h3>
            <i>Hanoi’s landscape is both ancient and modern. Hanoi will give you a taste for famous dishes. Hanoi always welcome you as your home.</i>
          </div>
          <div className="offset-md-1 col-md-5 item">
            <h3 className={styles.titleItem}>Contact</h3>
            <p className={styles.mb0}>Phuong Nguyen</p>
            <p className={styles.mb0}><FontAwesomeIcon icon={["far", "envelope"]} className={styles.iconSmall} />n.phuong2508@gmail.com</p>
            <p className={styles.mb0}><FontAwesomeIcon icon={["fas", "phone"]} className={styles.iconSmall} />0123456789</p>
            <p className={styles.mb0}><FontAwesomeIcon icon={["fas", "map-marker-alt"]} className={styles.iconSmall} />Ba Dinh, Ha Noi, Viet Nam</p>
          </div>
          <div className={styles.social}>
            <Link href="/"><a className={styles.linkSocial}><FontAwesomeIcon icon={["fab", "facebook"]} className={styles.icon} /></a></Link>
            <Link href="/"><a className={styles.linkSocial}><FontAwesomeIcon icon={["fab", "twitter"]} className={styles.icon} /></a></Link>
            <Link href="/"><a className={styles.linkSocial}><FontAwesomeIcon icon={["fab", "instagram"]} className={styles.icon} /></a></Link>
            <Link href="/"><a className={styles.linkSocial}><FontAwesomeIcon icon={["fab", "telegram"]} className={styles.icon} /></a></Link>
          </div>
        </Row>
        <p className={styles.copyright}>Phương NH © 2021</p>
      </Container>
    </footer>
  </div>
)

export default Footer