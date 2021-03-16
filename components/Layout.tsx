import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from '../styles/Layout.module.css'
import Footer from './Layout/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Blog Photo' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.jpg" />
    </Head>

    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link href="/">
          <a className={styles.linkMenu}>Food</a>
        </Link>
        <Link href="/about">
          <a className={styles.linkMenu}>Play</a>
        </Link>
        <Link href="/">
          <img src="/logo.png" className={styles.logo} />
        </Link>
        <Link href="/users">
          <a className={styles.linkMenu}>Feel</a>
        </Link>
        <Link href="/users">
          <a className={styles.linkMenu}>Other</a>
        </Link>
      </nav>
    </header>

    {children}
    <Footer />
  </div>
)

export default Layout