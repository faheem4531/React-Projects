import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch({ type: 'increment' })
  }

  function increaseHandler() {
    dispatch({ type: 'increase', amount: 5 })
  }

  function decrementHandler() {
    dispatch({ type: 'decrement' })
  }

  function toggleCounterHandler() {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
