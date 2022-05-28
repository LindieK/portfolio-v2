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
        <meta name="description" content="The portfolio of Linda Okorie, a Product Engineer" />
        <link rel="icon" href="/favicon.ico" />
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
