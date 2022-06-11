import React, { useEffect }  from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Project } from '../../types';
import { useCursorContext } from '../../context/CursorContext'
import ArrowIcon from './ArrowIcon'
import styles from "./Project.module.scss"


const transition = { delay: 0.5, duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }

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

const Project = ({thumbnail, title, description, tools, link}: Project) => {
    const { projectEnter, projectLeave } = useCursorContext();
    const control = useAnimation();
    const [ ref, inView ] = useInView();
    
    useEffect(()=> {
        if(inView){
          control.start("enter");
        }
    }, [control, inView]);

  return (
    <motion.div data-cy="project" className={styles.project} ref={ref} animate={control} initial="initial" variants={projectVariants}>
        <div className={styles.flexItemWrapper}>
            <motion.div className={styles.imageWrapper} variants={ImageVariant}  whileHover="hover">
                <a data-cy="image" href={link} target="_blank" rel="noreferrer">
                    <motion.img src={thumbnail} width='100%' height='100%' alt={`${title} thumbnail`} onMouseEnter={projectEnter} onMouseLeave={projectLeave}/>
                </a>
            </motion.div>
        </div>
        <div className={styles.flexItemWrapper}>
            <div className={styles.projectText}>
                <a data-cy="title" href={link} className={styles.title} target="_blank" rel="noreferrer" onMouseEnter={projectEnter} onMouseLeave={projectLeave}>
                    <h3>{title}</h3>
                    <div className={styles.svgWrapper}>
                        <ArrowIcon variant={ImageVariant} hover="hover"/>
                    </div>
                </a>
                <p>{description}</p>
                <div className={styles.tools}>
                    {tools.map((item, index) => <motion.span key={`${item}_${index}` } variants={toolsList} whileHover="hover">{item}</motion.span>)}
                </div>
            </div>
        </div>
    </motion.div>
  )
}
export default Project;