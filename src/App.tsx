import { Route, Routes } from 'react-router-dom'
import CategoryRoutes from './pages/e-commerce/categories'

function App() {
  return <>
    <Routes>
      <Route path='/categories/*' element={<CategoryRoutes />} />
    </Routes>
  </>
}

export default App