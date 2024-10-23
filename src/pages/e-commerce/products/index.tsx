import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'

function ProductRoutes() {
  return <>
    <Routes>
        <Route path="/" element={<List />} />
    </Routes>
  </>
}

export default ProductRoutes