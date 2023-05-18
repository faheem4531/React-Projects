import React, { Fragment } from 'react';

import mealImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Chosen by Everyone</h1>
        <button>card</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt='table full of food you like!' />
      </div>
    </Fragment>
  )
}

export default Header;