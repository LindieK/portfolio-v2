import React from "react";

import { Footer } from "../../types";
import styles from "./Footer.module.scss"

const Footer = ({ links }: Footer) => {
  return (
  <footer className={styles.footer}>
    <div className={`container ${styles.box}`}>
      <span>Linda Okorie &copy; 2022</span>
      <div className={styles.links}>
        {links.map((item, index) => {
          return <a key={index} data-cy={item.name} href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
        })}
      </div>
    </div>
  </footer>
  );
}
export default Footer;