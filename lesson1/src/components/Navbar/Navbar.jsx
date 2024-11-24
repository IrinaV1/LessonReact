import React from 'react'
import styles from './Navbar.module.css';
import { GiCupcake } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.navbar}>
   <a href="/" className={styles.logo}> <GiCupcake size={48} /></a>
   <ul className={styles.navbar_menu} >
    <li className={styles.menu}><a href="/">Главная</a></li>
    <li className={styles.menu}><a href="/about">О нас</a></li>
    <li className={styles.menu}><a href="/services">Услуги</a></li>
    <li className={styles.menu}><a href="/contact">Контакты</a></li>
</ul> 
<a href="/" className={styles.box} ><FaShoppingCart size={28} /></a>
    </div>
  )
}

export default Navbar
