import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import AddProduct from './Components/Add/AddProduct'
import Home from './Components/Home/Home'

import { BeautyCatalog, ElectronicsCatalog, ClothingCatalog } from './Components/Categories/CategoryCatalog'
import EditProduct from './Components/Edit/Edit'
import Footer from './Components/Footer/Footer'
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
        <Route path='/beauty' element={<BeautyCatalog />} />
        <Route path='/electronics' element={<ElectronicsCatalog />} />
        <Route path='/clothing' element={<ClothingCatalog />} />
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