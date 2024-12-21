import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { GiCupcake } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
     <p>Total: $</p>
         {cartItems.length === 0 ? 
          ( 
          <p>Hello</p> 
          ) : (
            cartItems.map((item, index) => (
<div key={index} className={styles.cartItem}>
<div className={styles.cartItem_buy}>
  <div>
                  <img src={item.image} alt={item.name} className={styles.cartImage} />
    </div>
    <div>

                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Цена: {item.cost} $</p>
                        <button onClick={() => btnPlus} className={styles.btn_plus}><FaPlus /></button>
                        <span className={styles.total}>{item.quantity}</span>
                        <button onClick={() => btnMinus} className={styles.btn_min}><FaMinus /></button>
             </div>       
                    <div><button className={styles.btn_del}><MdDeleteForever size={32}/></button> </div>
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
