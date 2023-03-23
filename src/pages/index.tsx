import Head from 'next/head'
import Image from 'next/image'
import styles from '@/modules/index/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Pavlo Osypov, Senior web developer</title>
        <meta name="description" content="Portfolio - Pavlo Osypov, Senior web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={300}
            height={60}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}
