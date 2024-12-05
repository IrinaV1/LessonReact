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
  <div><span className={styles.price}>10 $</span></div>
    <button className={styles.btn_plus}>+</button>
    <span className={styles.total}>1</span>
    <button className={styles.btn_min}>-</button>
   
 <div> <button className={styles.btn_buy}>BUY</button> </div>

   </div>
    </div>
  )
}

export default Card
