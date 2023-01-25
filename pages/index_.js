import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
// import { SpeechDetect } from './components/SpeechDetect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Script src="./components/main.js" />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      <h1>How to record audio using the MediaStream Recording API in JavaScript</h1>

      </main>
    </>
  )
}
