import { useState } from 'react'
import './App.module.css'

import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';


function App() {

const [cartItems, setCartItems] = useState([]);





const addToCart = (product) => {
   // Проверяем, есть ли продукт уже в корзине
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
    setCartItems([...cartItems, newProduct]);
    }
}

  return (
    <>
 <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
 <Header />
<Main />
<Cards addToCart={addToCart}/>
   <Footer />  
      
    </>
  )
}

export default App;
