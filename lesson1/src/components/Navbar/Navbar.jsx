import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { GiCupcake } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Navbar({cartItems, setCartItems}) {

  const [isCartOpen, setIsCartOpen] = useState(false);

  

  const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
  
  };

  const btnPlus = (productId) => {

    const updatedCart = cartItems.map((item) => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
  };
  
  const btnMinus = (productId) => {
    const updatedCart = cartItems.map((item) => 
      item.id === productId && item.quantity > 1 
    ? { ...item, quantity: item.quantity - 1 } : item
      );
    setCartItems(updatedCart);
   };
  

   const deleteItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Подсчёт общей суммы корзины
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

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
          <button className={styles.closeButton} onClick={() => toggleCart()}>
            ✖
          </button>
          <div className={styles.cartContent}>
            <p>Корзина</p>
     <p>Total: {calculateTotal()}$</p>
         {cartItems.length === 0 ? 
          ( 
          <p>Hello</p> 
          ) : (
            cartItems.map((item) => (
<div key={item.id} className={styles.cartItem}>
<div className={styles.cartItem_buy}>
  <div>
                  <img src={item.image} alt={item.name} className={styles.cartImage} />
    </div>
    <div>

                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Цена: {item.cost} $</p>
                        <button onClick={() => btnPlus(item.id)} className={styles.btn_plus}><FaPlus /></button>
                        <span className={styles.total}>{item.quantity}</span>
                        <button onClick={() => btnMinus(item.id)} className={styles.btn_min}><FaMinus /></button>
             </div>       
                    <div><button onClick={() => deleteItem(item.id)} className={styles.btn_del}><MdDeleteForever size={32}/></button> </div>
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
