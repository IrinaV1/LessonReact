import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { GiCupcake } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({cartItems}) {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemTotal, setItemTotal] = useState(1);
  const [cost, setCost] = useState(10);
  

  const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
  };


 

  function btnPlus() {
  
   setItemTotal(itemTotal + 1);
   setCost(cost + 10);
  }
  
  function btnMinus() {
  if (itemTotal > 1) {
    setItemTotal(item - 1);}
  
    if (itemTotal > 1) {
    setCost(cost - 10);}
   }
  
  return (
    <div className={styles.navbar}>
   <a href="/" className={styles.logo}> <GiCupcake size={48} /></a>
   <ul className={styles.navbar_menu} >
    <li className={styles.menu}><a href="/">Главная</a></li>
    <li className={styles.menu}><a href="/about">О нас</a></li>
    <li className={styles.menu}><a href="/services">Услуги</a></li>
    <li className={styles.menu}><a href="/contact">Контакты</a></li>
</ul> 
<button 
className={styles.box}
onClick={toggleCart}
>
  <FaShoppingCart size={28} />
  </button>
    

{isCartOpen && (
        <div className={styles.cartModal}>
          <button className={styles.closeButton} onClick={() => setIsCartOpen(false)}>
            ✖
          </button>
          <div className={styles.cartContent}>
            <p>Корзина</p>
      
         {cartItems.length === 0 ? 
          ( 
          <p>Hello</p> 
          ) : (
            cartItems.map((item, index) => (
<div key={index} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.cartImage} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Цена: {item.cost} $</p>
                        <button onClick={() => btnPlus} className={styles.btn_plus}>+</button>
                        <span className={styles.total}>{item.quantity}</span>
                        <button onClick={() => btnMinus} className={styles.btn_min}>-</button>
                    
                  </div>
                </div>
            ))
          )

        }
          </div>
        </div>
      )}

    </div>
  )
}


export default Navbar
