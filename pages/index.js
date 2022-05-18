import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jangsher.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, my name is Jangsher Singh Gill!</h1>

        <p className={styles.description}>
          This is my personal website. Keen to share the things I've learnt in
          my life with you.
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About</h2>
              <p>Learn about me and my life.</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact</h2>
              <p>I love chatting with new people!</p>
            </a>
          </Link>

          <Link href="/homoeopathy">
            <a className={styles.card}>
              <h2>Homoeopathy</h2>
              <p>I'm a huge homoeopathy nerd.</p>
            </a>
          </Link>

          <Link href="/health">
            <a className={styles.card}>
              <h2>Health</h2>
              <p>I love working out and taking care of my health.</p>
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
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
