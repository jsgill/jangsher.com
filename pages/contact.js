import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function ContactPage() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jangsher.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jangsher Singh Gill
        </h1>

        <p className={styles.description}>
          Under construction.
        </p>

        <button onClick={() => setCount(count + 1)}>Total count: {count}</button>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>Go back to home</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
