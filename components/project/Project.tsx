import React from 'react'
import { motion } from 'framer-motion';

import ArrowIcon from './ArrowIcon'
import styles from "./Project.module.scss"

interface Project {
    thumbnail: string;
    title: string;
    desc: string;
    tools: string[];
    link: string;
    projectVariant: any
}

const Project = ({thumbnail, title, desc, tools, link, projectVariant}: Project) => {
    const ImageVariant = {
        hover: {
            scale: 1.12
        }
    }

    const toolsList = {
        hover: {
            scale: 1.125
        }
    }

  return (
    <motion.div className={styles.project} variants={projectVariant}>
        <a href={link} className={styles.flexItemWrapper} target="_blank" rel="noreferrer">
            <motion.div className={styles.imageWrapper} variants={ImageVariant}  whileHover="hover">
                <motion.img src={thumbnail} width='100%' height='100%' alt={`${title} thumbnail`}/>
            </motion.div>
        </a>
        <div className={styles.flexItemWrapper}>
            <div className={styles.projectText}>
                <a href={link} className={styles.title} target="_blank" rel="noreferrer">
                    <h3>{title}</h3>
                    <div className={styles.svgWrapper}>
                        <ArrowIcon variant={ImageVariant} hover="hover"/>
                    </div>
                </a>
                <p>{desc}</p>
                <div className={styles.tools}>
                    {tools.map((item, index) => <motion.span key={`${item}_${index}` } variants={toolsList} whileHover="hover">{item}</motion.span>)}
                </div>
            </div>
        </div>
    </motion.div>
  )
}
export default Project;