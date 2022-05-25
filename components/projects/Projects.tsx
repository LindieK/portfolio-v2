import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from "./Projects.module.scss"
import { projects } from '../../public/page-data';
import Project from '../project/Project';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
const projectVariants = {
  initial: { scale: 0.9, opacity: 0},
  enter: { scale: 1, opacity: 1, transition }
}


const Projects = () => {
  const control = useAnimation();
  const [ ref, inView ] = useInView();
  
  useEffect(()=> {
    if(inView){
      control.start("enter");
    }
  }, [control, inView]);

  return (
    <section id="projects" className={styles.projects}>
      <div className='container'>
        <div className={styles.sectionTitle}>
          <h2>Projects</h2>
          <p>I am always experimenting with new technologies and improving my knowledge in product design and development</p>
        </div>
        <motion.div ref={ref} initial="initial" animate={control} variants={ { enter: { transition: { delay: 1, staggerChildren: 0.25 } } } }>
          {projects.map((item, index) => {
            return(
              <Project key={index} thumbnail={item.thumbnail} title={item.title} desc={item.description} tools={item.tools} link={item.link} projectVariant={projectVariants}/>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
export default Projects;