import { Link, Route, Routes } from 'react-router-dom'
import CategoryRoutes from './pages/e-commerce/categories'
import ProductRoutes from './pages/e-commerce/products'

function App() {
  return <>

    <ul>
      <li><Link to={"/categories"}>Categories</Link></li>
      <li><Link to={"/products"}>Products</Link></li>
    </ul>
    <hr />
    <Routes>
      <Route path='/categories/*' element={<CategoryRoutes />} />
      <Route path='/products/*' element={<ProductRoutes />} />
    </Routes>
  </>
}

export default App