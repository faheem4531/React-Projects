import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: '',
  totalAmount: 0
};

function cartReducer(state, action) {
  if (state.type === 'ADD') {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = props => {

  const [cartState, dispatchartState] = useReducer(cartReducer, defaultCartState);

  function addItemToCartHandler(items) {
    dispatchartState({ type: 'ADD', item: items });
  };

  function removeItemToCartHandler(id) { };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemToCartHandler
  }




  return <CartContext value={cartContext}>
    {props.children}
  </CartContext>
};

export default CartProvider;