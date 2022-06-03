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
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel="icon" href="/favicon-32x32.png" />
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
