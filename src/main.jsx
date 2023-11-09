import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from "./App";
import Products from "./components/Products";
import Cart from "./components/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/" element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
); 