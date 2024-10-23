import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Detail from './detail'

function SuppliersRoutes() {
  return <>
  <Routes>
    <Route path='' element={<List />} />
    <Route path='/:id' element={<Detail />} />
  </Routes>
  </>
}

export default SuppliersRoutes