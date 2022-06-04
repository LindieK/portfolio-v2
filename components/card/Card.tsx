import React, { useEffect } from "react";
import Image from "next/image"
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import styles from './Card.module.scss'
import { useCursorContext } from '../../context/CursorContext'

interface Card {
  thumbnail: string;
  title: string;
  link: string;
}

const transition = { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }
const cardVariant = {
  initial: { scale: 0.9, opacity: 0},
  enter: { scale: 1, opacity: 1, transition }
}

const Card = ({thumbnail, title, link}: Card) => {
  const { articleEnter, articleLeave } = useCursorContext();
  const cardControl = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    if(inView){
      cardControl.start("enter");
    }
  },[cardControl, inView])
  
  return (
    <motion.div className={styles.cardContainer} ref={ref} variants={cardVariant} initial="initial" animate={cardControl} onMouseEnter={articleEnter} onMouseLeave={articleLeave}>
      <a href={link} className={styles.link} target="_blank" rel="noreferrer">
        <Image src={thumbnail} width={1300} height={1000} layout="responsive" alt="article thumbnail"/>
        <h3>{title}</h3>
      </a>
    </motion.div>
  );
}
export default Card