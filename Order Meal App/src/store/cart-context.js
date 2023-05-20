import React from "react";

const CartContext = React.useContext({
  items: [],
  totalAmount: 0,
  addItems: function (items) { },
  removeItems: function (items) { }
});

export default CartContext;