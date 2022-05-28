import React from "react";
import Image from "next/image";

import styles from './Tools.module.scss'

const Tools = () => {
  return (
    <section className={styles.tools}>
      <div className="container">
        <h3>Technologies used in building this site</h3>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image src="/images/css-modules.svg" width={103} height={83} alt="CSS Modules" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/images/Nextjs-logo.svg" width={139} height={83} alt="Next.js" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/images/framer-motion.svg" width={83} height={83} alt="Framer Motion" />
          </div>
          
        </div>
      </div>
    </section>
  )
}
export default Tools;