import React from "react";
import Image from "next/image"
import { motion } from "framer-motion";

import styles from './Card.module.scss'

interface Card {
  thumbnail: string;
  title: string;
  link: string;
  cardVariant: any;
  handleArticleEnter: () => void;
  handleArticleLeave: () => void;
}
const Card = ({thumbnail, title, link, cardVariant, handleArticleEnter, handleArticleLeave}: Card) => {
  return (
    <motion.div className={styles.cardContainer} variants={cardVariant} onMouseEnter={handleArticleEnter} onMouseLeave={handleArticleLeave}>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={thumbnail} width={351} height={280} alt="article thumbnail"/>
        <h3>{title}</h3>
      </a>
    </motion.div>
  );
}
export default Card