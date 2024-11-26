import { useState } from 'react'
import './App.module.css'

import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
 <Navbar />
 <Header />
<Main />
<Cards />
   <Footer />  
      
    </>
  )
}

export default App;
