import React from 'react';
import styles from "./Card.module.css";
import productImage from "../../assets/images/img2.webp"
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/reducers/cartSlice"


function Card({product}) {

const dispatch = useDispatch();



  return (
    <div className={styles.card}>
      <img className={styles.productImage} src={productImage} alt='img1'/>
      <h2 className={styles.title}>{product.name}</h2>
<p className={styles.title_product}>{product.description} </p>
   
 
  <div>
  <div><span className={styles.price}>{product.cost} $</span></div>

   
 <div> <button onClick={() => dispatch(addToCart(product))} className={styles.btn_buy}>BUY</button> </div>

   </div>
    </div>
  )
}

export default Card
