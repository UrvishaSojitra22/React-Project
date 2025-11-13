import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import AddProduct from './Components/Add/AddProduct'
import Home from './Components/Home/Home'

import MenCardData from './Components/Men/men'
import EditProduct from './Components/Edit/Edit'
import Footer from './Components/Footer/Footer'

import WomenCardData from './Components/women/women'
import KidsCardData from './Components/Kid\'s/Kid\'s'
import SignIn from './Components/Sign In/SignIn'
import SignUp from './Components/Sign Up/SignUp'
import SingleProduct from './Components/SingalProduct/SingaleProduct'



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Add' element={<AddProduct />} />
        <Route path='/MenCard' element={<MenCardData />} />
        <Route path='/WomenCard' element={<WomenCardData />} />
        <Route path='/KidsCard' element={<KidsCardData />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
        <Route path='/SignUp'  element={<SignUp/>} />
        <Route path='/SignIn'  element={<SignIn/>} />
        <Route path="/product/:id" element={<SingleProduct />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App