import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiActions } from './components/store/ui-slice';
import { cartActions } from './components/store/cart-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';


let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  // for fetching data when app run initially from the database
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://shopsleek-dd462-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) {
        throw new Error('Could not fetch cart data');
      }

      const cartData = await response.json();

      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    }

    fetchData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data fail.'
      }));
    });
  }, [dispatch]);


  // for sending data via 'PUT' while adding and removing cart items
  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }
    if (!cart.changed) {
      return
    }
    async function sendCartData() {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Pending...',
        message: 'pending cart data.'
      }));

      const response = await fetch('https://shopsleek-dd462-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data fail.');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Sucessfull',
        message: 'Sent cart data successfully!'
      }));
    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data fail.'
      }));
    });

  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
