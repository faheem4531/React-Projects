import React from "react";

import CartContext from "./cart-context";

function addItemToCartHandler(items) { };

function removeItemToCartHandler(id) { };

const CartProvider = props => {

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemToCartHandler,
    removeItems: removeItemToCartHandler
  }




  return <CartContext value={cartContext}>
    {props.children}
  </CartContext>
};

export default CartProvider;