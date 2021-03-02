import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from '../styles/Layout.module.css'

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
    <Container>
      <header className={styles.header}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/">
            <img src="/logo.png" className={styles.logo} />
          </Link>
          <Link href="/users">
            <a>Users List</a>
          </Link>
        </nav>
      </header>
    </Container>
    {children}
  </div>
)

export default Layout