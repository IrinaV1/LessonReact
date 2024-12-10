import React, {useState} from 'react';
import styles from "./Card.module.css";
import productImage from "../../assets/images/img2.webp"

function Card() {
const [item, setItem] = useState(1);
const [cost, setCost] = useState(10);

function btnPlus() {

 setItem(item + 1);
 setCost(cost + 10);
}

function btnMinus() {
if (item > 1) {
  setItem(item - 1);}

  if (item > 1) {
  setCost(cost - 10);}
 }

  return (
    <div className={styles.card}>
      <img className={styles.productImage} src={productImage} alt='img1'/>
      <h2 className={styles.title}>Creme</h2>
<p className={styles.title_product}> Chocolate creme with cherry </p>
   
 
  <div>
  <div><span className={styles.price}>{cost} $</span></div>
    <button onClick={btnPlus} className={styles.btn_plus}>+</button>
    <span className={styles.total}>{item}</span>
    <button onClick={btnMinus} className={styles.btn_min}>-</button>
   
 <div> <button onClick={() => btnPlus } className={styles.btn_buy}>BUY</button> </div>

   </div>
    </div>
  )
}

export default Card
