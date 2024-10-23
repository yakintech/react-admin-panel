import { Link, Route, Routes } from 'react-router-dom'
import CategoryRoutes from './pages/e-commerce/categories'

function App() {
  return <>

    <ul>
      <li><Link to={"/categories"}>Categories</Link></li>
    </ul>
    <hr />
    <Routes>
      <Route path='/categories/*' element={<CategoryRoutes />} />
    </Routes>
  </>
}

export default App