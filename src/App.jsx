import React, { createContext, useState } from "react";
import "./index.css";

import { data } from "./data";
import { Outlet } from "react-router-dom";

export const BooksContext = createContext();

export default function App() {
  const [state, setState] = useState({
    booklist: data,
    cart: []
  });

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }]
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };

  return (
    <>
  
    <BooksContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}
    >
     <Outlet/>
    </BooksContext.Provider>
    </>
  );
}
