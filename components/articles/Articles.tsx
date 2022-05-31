import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './Articles.module.scss';
import { articles } from '../../public/page-data';
import Card from "../card/Card";

const transition = { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }
const articleVariants = {
  initial: { scale: 0.9, opacity: 0},
  enter: { scale: 1, opacity: 1, transition }
}

const Articles = () => {
  const articleControl = useAnimation();
  const [ ref, inView ] = useInView({threshold: 0.5});

  useEffect(() => {
    if(inView){
      articleControl.start("enter");
    }
  },[articleControl, inView])

  return (
    <section id="#articles" className={styles.articles}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Articles</h2>
          <p>When I&apos;m not busy, I write articles on some things I have learnt to share with people who might be learning the same things too.</p>
        </div>
        <motion.div ref={ref} className={styles.cardsSection} initial="initial" animate={articleControl} variants={ { enter: { transition: { delay: 3, staggerChildren: 0.25 } } } }>
          {articles.map((item, index)=> {
            return <Card key={index} thumbnail={item.thumbnail} title={item.title} link={item.link} cardVariant={articleVariants}/>
          })}
        </motion.div>
      </div>
    </section>
    )
}
export default Articles