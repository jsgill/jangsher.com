import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import styles from "../styles/Home.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CommaList = ({ textArray }) =>
  textArray.map((text, i) => (
    <span key={i}>
      {i !== 0 && ", "}
      {text}
    </span>
  ));

export default function HomoeopathyPage() {
  const { data, error } = useSWR("/api/homoeopathy", fetcher);

  if (error) return <div>Failed to load</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Jangsher.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jangsher Singh Gill</h1>

        {!data ? (
          <p className={styles.description}>Loading...</p>
        ) : (
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                <h3>{item.title}</h3>
                {item.content && <p>{item.content}</p>}
                <p>
                  — Helps with: <CommaList textArray={item.helpsWith} />
                </p>
                <p>
                  — Symptoms: <CommaList textArray={item.symptoms} />
                </p>
              </li>
            ))}
          </ul>
        )}

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
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
