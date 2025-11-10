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


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Add' element={<AddProduct />} />

        {/* ✅ Product Display Routes (Fixed Typo for WomenCard) */}
        <Route path='/MenCard' element={<MenCardData />} />
        <Route path='/WomenCard' element={<WomenCardData />} />
        <Route path='/KidsCard' element={<KidsCardData />} />

        {/* Edit Route */}
        <Route path='/edit-product/:id' element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App