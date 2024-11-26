import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { GiCupcake } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault(); // Чтобы ссылка не перезагружала страницу
    setIsCartOpen(!isCartOpen);
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
<a href="/" 
className={styles.box}
onClick={toggleCart}
>
  <FaShoppingCart size={28} />
  </a>
    

{isCartOpen && (
        <div className={styles.cartModal}>
          <button className={styles.closeButton} onClick={() => setIsCartOpen(false)}>
            ✖
          </button>
          <div className={styles.cartContent}>
            <h3>Корзина</h3>
            <p>Здесь появятся ваши товары.</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar
