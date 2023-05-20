import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {['sushi'].map((items => (
        <li>{items.name}</li>
      )))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;