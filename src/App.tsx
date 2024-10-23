import { Link, Route, Routes } from 'react-router-dom'
import CategoryRoutes from './pages/e-commerce/categories'
import ProductRoutes from './pages/e-commerce/products'
import SuppliersRoutes from './pages/e-commerce/suppliers'

function App() {
  return <>

    <ul>
      <li><Link to={"/categories"}>Categories</Link></li>
      <li><Link to={"/products"}>Products</Link></li>
      <li><Link to={"/suppliers"}>Suppliers</Link></li>
    </ul>
    <hr />
    <Routes>
      <Route path='/categories/*' element={<CategoryRoutes />} />
      <Route path='/products/*' element={<ProductRoutes />} />
      <Route path='/suppliers' element={<SuppliersRoutes />} />
    </Routes>
  </>
}

export default App