import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Detail from './detail'
import Add from './add'
import Cart from './cart'

function ProductRoutes() {
  return <>
    <Routes>
        <Route path='add' element={<Add/>} />
        <Route path="/" element={<List />} />
        <Route path=":id" element={<Detail />} />
        <Route path='cart' element={<Cart/>} />
    </Routes>
  </>
}

export default ProductRoutes