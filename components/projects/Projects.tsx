import React from 'react'

import styles from "./Projects.module.scss"
import { Projects } from '../../types'; 
import Project from '../project/Project';


const Projects = ({projects}: Projects) => {

  return (
    <section id="projects" className={styles.projects}>
      <div className='container'>
        <div className={styles.sectionTitle}>
          <h2>Projects</h2>
          <p>I am always experimenting with new technologies and improving my knowledge in product design and development</p>
        </div>
        <div>
          {projects.map((item, index) => {
            return(
              <Project key={index} thumbnail={item.thumbnail} title={item.title} description={item.description} tools={item.tools} link={item.link} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Projects;