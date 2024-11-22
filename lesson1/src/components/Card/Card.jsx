import React from 'react';
import styles from "./Card.module.css";
import productImage from "../../assets/images/img2.webp"

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.productImage} src={productImage} alt='img1'/>
      <h2 className={styles.title}>Creme</h2>
<p className={styles.title_product}> Chocolate creme with cherry </p>
   
 
  <div>
    <button>+</button>
    <span className={styles.total}>1</span>
    <button>-</button>
    <div>  <span className={styles.price}>100</span></div>
  <button>BUY</button>
   </div>
    </div>
  )
}

export default Card
