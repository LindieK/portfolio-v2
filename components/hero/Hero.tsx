import React from "react";
import Link from 'next/link'
import { motion } from "framer-motion";

import { HeroSection } from "../../types";
import styles from "./Hero.module.scss"

const Hero = ({ heroText }: HeroSection) => {
  const container = {
    hidden: { opacity: 0, transition:{ when: "afterChildren"} },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1, delayChildren: 0.5}}
  }

  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 }}
  }
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const item = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0}
  }

  return (
    <section className={styles.hero}>
      <motion.div initial="hidden" animate="visible" variants={container} className={`container ${styles.box}`}>
        <motion.h1 variants={sentence} initial="hidden" animate="visible" data-cy="heroText">
          {heroText.split("").map((char, index) => {
            return (
              <motion.span key={char + "_" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
        <Link href="#projects" scroll={false}><a><motion.img data-cy="scroll" variants={item} src="/images/Mouse Icon.svg" alt="mouse icon indicating scroll"/></a></Link>
      </motion.div>
    </section>
  );
}
export default Hero