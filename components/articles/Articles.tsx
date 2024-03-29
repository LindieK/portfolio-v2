import React from "react";
import { motion } from 'framer-motion';

import { ArticlesSection } from "../../types";
import styles from './Articles.module.scss';
import Card from "../card/Card";


const Articles = ({articles}: ArticlesSection) => {

  return (
    <section id="#articles" data-cy="articlesSection" className={styles.articles}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Articles</h2>
          <p>When I&apos;m not busy, I write articles on some things I have learnt to share with people who might be learning the same things too.</p>
        </div>
        <motion.div className={styles.cardsSection}  variants={ { enter: { transition: { delay: 3, staggerChildren: 0.25 } } } }>
          {articles.map((item, index)=> {
            return <Card key={index} thumbnail={item.thumbnail} title={item.title} link={item.link} />
          })}
        </motion.div>
      </div>
    </section>
    )
}
export default Articles