import React, { useEffect }  from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ArrowIcon from './ArrowIcon'
import styles from "./Project.module.scss"

interface Project {
    thumbnail: string;
    title: string;
    desc: string;
    tools: string[];
    link: string;
}

const transition = { delay: 1, duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }

const projectVariants = {
  initial: { scale: 0.9, opacity: 0},
  enter: { scale: 1, opacity: 1, transition }
}

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

const Project = ({thumbnail, title, desc, tools, link}: Project) => {
    const control = useAnimation();
    const [ ref, inView ] = useInView();
    
    useEffect(()=> {
        if(inView){
          control.start("enter");
        }
    }, [control, inView]);

  return (
    <motion.div className={styles.project} ref={ref} animate={control} initial="initial" variants={projectVariants}>
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