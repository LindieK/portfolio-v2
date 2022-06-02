import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import Articles from '../components/articles/Articles'
import Tools from '../components/tools/Tools'
import Footer from '../components/footer/Footer'
import styles from '../styles/Home.module.scss'

const variants = {
  default: {
    opacity: 1,
    height: 40,
    width: 40,
    backgroundColor: "#ffffff80",
    transition: {
      type: "spring",
      mass: 0.6
    }
  },
  project: {
    opacity: 1,
    backgroundColor: "#92fe9d",
    color: "#000",
    height: 100,
    width: 100,
    fontSize: "18px",
  },
  article: {
    opacity: 1,
    backgroundColor: "#00c9ff",
    color: "#000",
    height: 100,
    width: 100,
    fontSize: "18px",
  }
};

const Home: NextPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCusor = (e: any) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    }

    window.addEventListener('mousemove', moveCusor)

    return () => {
      window.removeEventListener('mousemove', moveCusor)
    }
  },[])

  const projectEnter = () => {
    setCursorText("View Project");
    setCursorVariant("project");
  }

  const projectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  }

  const articleEnter = () => {
    setCursorText("Read Article");
    setCursorVariant("article");
  }

  const articleLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Linda Okorie</title>
        <meta name="description" content="The portfolio of Linda Okorie, a Product Engineer" />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <motion.div className='cursor' variants={variants} animate={cursorVariant} style={{translateX: cursorXSpring, translateY: cursorYSpring}}>
        <span className='cursorText'>{cursorText}</span>
      </motion.div>
      <Hero />
      <Projects handleProjectEnter={projectEnter} handleProjectLeave={projectLeave}/>
      <Articles handleArticleEnter={articleEnter} handleArticleLeave={articleLeave} />
      <Tools />
      <Footer />
    </div>
  )
}

export default Home
