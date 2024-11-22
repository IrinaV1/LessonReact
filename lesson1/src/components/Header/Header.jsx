import React from 'react';
import headerImage from "../../assets/images/img1.webp"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={headerImage} alt="headerImage" />
    </div>
  )
}

export default Header
