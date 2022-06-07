import React from "react";

import { FooterLinks } from "../../public/page-data";
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
  <footer className={styles.footer}>
    <div className={`container ${styles.box}`}>
      <span>Linda Okorie &copy; 2022</span>
      <div className={styles.links}>
        {FooterLinks.map((item, index) => {
          return <a key={index} data-cy={item.name} href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
        })}
      </div>
    </div>
  </footer>
  );
}
export default Footer;