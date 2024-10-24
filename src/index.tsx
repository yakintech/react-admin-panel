import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import { UserContextProvider } from './context/UserContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </UserContextProvider>
  </BrowserRouter>
);

