import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  const birthDate = new Date('1959-04-15 08:36:00 PM');
  const marriageDate = new Date('1983-06-21');
  const ageInYears = new Date().getFullYear() - birthDate.getFullYear();
  const marriedInYears = new Date().getFullYear() - marriageDate.getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Jangsher.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, my name is Jangsher Singh Gill!
        </h1>

        <p className={styles.description}>
          I am {ageInYears} years old. My wife's name is Susheela, we have been married for {marriedInYears} years. I have 3 children.
        </p>

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
