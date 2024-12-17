import { useState } from 'react'
import './App.module.css'

import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';


function App() {

const [cartItems, setCartItems] = useState([]);


const addToCart = (item) => {
setCartItems((prevCartItems) => [...prevCartItems, item])
}

  return (
    <>
 <Navbar cartItems={cartItems} />
 <Header />
<Main />
<Cards addToCart={addToCart}/>
   <Footer />  
      
    </>
  )
}

export default App;
