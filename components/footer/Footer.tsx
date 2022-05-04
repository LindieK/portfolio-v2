import React from "react";

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
  <footer className={styles.footer}>
    <div className={`container ${styles.box}`}>
      <span>Linda Okorie &copy; 2022</span>
      <div className={styles.links}>
        <a href="https://linkedin.com/in/linda-okorie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/LindieK" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://twitter.com/lindaokorie_" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://dribbble.com/lindaokorie" target="_blank" rel="noopener noreferrer">Dribbble</a>
        <a href="https://behance.net/lindaokorie" target="_blank" rel="noopener noreferrer">Behance</a>
      </div>
    </div>
  </footer>
  );
}
export default Footer;