import React, { Fragment, useContext, useState } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
  const [isChechOut, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSumbit] = useState(false);
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartCtx.removeItems(id);
  }

  function cartItemAddHandler(item) {
    cartCtx.addItems({ ...item, amount: 1 });
  }

  function orderHandler() {
    setIsCheckout(true);
  }

  async function onConfirmOrderHandler(userData) {
    setIsSubmitting(true);
    await fetch('https://react-http-76941-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
    setDidSumbit(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((items => (
        <CartItem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartItemRemoveHandler.bind(null, items.id)}
          onAdd={cartItemAddHandler.bind(null, items)}
        />
      )))}
    </ul>
  );

  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>;

  const cartModalContent = <Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isChechOut && <Checkout onConfirmOrder={onConfirmOrderHandler} onCancel={props.onCloseCart} />}
    {!isChechOut && modalActions}
  </Fragment>;

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent =
    <Fragment>
      <p>Your Order has been placed Sucessfully!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCloseCart}>Close</button>
      </div>
    </Fragment>

  return (
    <Modal onClose={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart;