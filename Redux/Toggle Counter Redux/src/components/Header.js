import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  const navBar = <nav>
    <ul>
      <li>
        <a href='/'>My Products</a>
      </li>
      <li>
        <a href='/'>My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  </nav>;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && navBar}
    </header>
  );
};

export default Header;
