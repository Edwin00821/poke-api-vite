import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewPoke from './pages/newPoke';
import NotFound from './pages/NotFound';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { PokemonContextProvider } from './context/PokemonProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  // {
  //   path: '/newPoke',
  //   element: <NewPoke />,
  // },
  // {
  //   path: '/:id',
  //   element: <NewPoke />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <RouterProvider router={router} />
    </PokemonContextProvider>
  </React.StrictMode>
);
