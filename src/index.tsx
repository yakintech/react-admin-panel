import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import { UserContextProvider } from './context/UserContext';
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './store/slices/CartSlice';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: {
    cart: CartReducer
  }
})

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <UserContextProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </UserContextProvider>
    </Provider>
  </BrowserRouter>
);

