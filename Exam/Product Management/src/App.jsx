import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import AddProduct from './Components/Add/AddProduct'
import Home from './Components/Home/Home'

import Footer from './Components/Footer/Footer'

import SignIn from './Components/Sign In/SignIn'
import SignUp from './Components/Sign Up/SignUp'
import SingleProduct from './Components/SingalProduct/SingaleProduct'
import GoldJewelryData from './Components/GoldJewelry/Goldjewelry '
import SilverJewelryCardData from './Components/silverJewelry/silverjewelry'
import PlatiniumJwelryData from './Components/Platinium/PlatiniumJwelry'
 


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Add' element={<AddProduct />} />
        <Route path="/Goldjewelry" element={<GoldJewelryData />} />
         
        <Route path='/silverJewelry' element={<SilverJewelryCardData />} />
         <Route path='/Platinium' element={<PlatiniumJwelryData />} />
    


       {/* <Route path='Edit' element={<EditProduct} */}
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path="/product/:id" element={<SingleProduct />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App