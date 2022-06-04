import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import Articles from '../components/articles/Articles'
import Tools from '../components/tools/Tools'
import Footer from '../components/footer/Footer'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Linda Okorie</title>
        <meta name="description" content="Linda Okorie - Product Engineer" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-icon-180x180.png" sizes='180x180' />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png"></link>
        <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
      </Head>
      
      
      <Hero />
      <Projects />
      <Articles />
      <Tools />
      <Footer />
    </div>
  )
}

export default Home
