import { Link, Route, Routes } from 'react-router-dom'
import CategoryRoutes from './pages/e-commerce/categories'
import ProductRoutes from './pages/e-commerce/products'
import SuppliersRoutes from './pages/e-commerce/suppliers'
import OrdersRoutes from './pages/e-commerce/orders'
import { Button, Container } from '@mui/material'
import Favorites from './pages/e-commerce/products/list/Favorites'
import { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from './context/FavoritesContext'
import Login from './pages/auth/Login'
import { UserContext } from './context/UserContext'
import { removeRefreshTokenFromLocalStorage, removeTokenFromLocalStorage } from './utils/tokenStorage'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/e-commerce/home'
import Parent from './pages/sample/memorize/Parent'
import { useTranslation } from 'react-i18next'

function App() {

  const { favorites } = useContext(FavoritesContext)
  const { loginStatus, loading, setloginStatus } = useContext(UserContext)

  const { cart } = useSelector((state: any) => state)

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }


  const logout = () => {
    removeTokenFromLocalStorage()
    removeRefreshTokenFromLocalStorage()
    setloginStatus(false)
  }

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "cart/load" })
  }, [])

  return <>
  <select onChange={(e) => changeLanguage(e.target.value)}>
    <option value="en">English</option>
    <option value="ar">Arabic</option>
    <option value="gr">Greek</option>
    <option value="tr">Turkish</option>
  </select>

    {
      loading ? <h1>loading...</h1> : loginStatus == true ? <> <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to={"/"}>{t("home")}</Link></li>
        <li><Link to={"/categories"}>{t("categories")}</Link></li>
        <li><Link to={"/products"}>{t("products")}</Link></li>
        <li><Link to={"/favorites"}>{t("favorites")} <span style={{ color: 'red' }}>({favorites.length})</span></Link></li>
        <li><Link to={"/suppliers"}>{t("suppliers")}</Link></li>
        <li><Link to={"/orders"}>{t("orders")}</Link></li>
        <li><Link to={"/products/cart"}>{t("cart")} <span style={{ color: "red" }}>({cart.items.length})</span></Link></li>
        <li><Link to={"/parent"}>{t("parent")}</Link></li>
        <Button onClick={logout} variant="contained">Logout</Button>
      </ul>
        <hr />
        <Container>
          <Routes>
            <Route path='/categories/*' element={<CategoryRoutes />} />
            <Route path='/products/*' element={<ProductRoutes />} />
            <Route path='/suppliers/*' element={<SuppliersRoutes />} />
            <Route path='/orders/*' element={<OrdersRoutes />} />
            <Route path='/favorites/*' element={<Favorites />} />
            <Route path='/parent' element={<Parent />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>

      </> : <Login />
    }
  </>
}

export default App