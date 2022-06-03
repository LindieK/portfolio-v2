import React from "react";
import Image from "next/image"
import { motion } from "framer-motion";

import styles from './Card.module.scss'
import { useCursorContext } from '../../context/CursorContext'

interface Card {
  thumbnail: string;
  title: string;
  link: string;
  cardVariant: any;
}
const Card = ({thumbnail, title, link, cardVariant}: Card) => {
  const { articleEnter, articleLeave } = useCursorContext();
  
  return (
    <motion.div className={styles.cardContainer} variants={cardVariant} onMouseEnter={articleEnter} onMouseLeave={articleLeave}>
      <a href={link} className={styles.link} target="_blank" rel="noreferrer">
        <Image src={thumbnail} width={351} height={280} alt="article thumbnail"/>
        <h3>{title}</h3>
      </a>
    </motion.div>
  );
}
export default Card