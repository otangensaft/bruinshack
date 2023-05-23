import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>BruinShack Relaunch</div>
      <div className={styles.subtitle}>Stay Tuned, More to Come!</div>
    </div>
  )
}

