import React from "react";
import Image from "next/image"
import { motion } from "framer-motion";

import styles from './Card.module.scss'

interface Card {
  thumbnail: string;
  title: string;
  link: string;
  cardVariant: any
}
const Card = ({thumbnail, title, link, cardVariant}: Card) => {
  return (
    <motion.div className={styles.cardContainer} variants={cardVariant}>
      <Image src={thumbnail} width={351} height={280} alt="article thumbnail"/>
      <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
    </motion.div>
  );
}
export default Card