import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from './store';

const Counter = () => {
  const counter = useSelector(state => state.count.counter);
  const show = useSelector(state => state.count.showCounter);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(counterActions.increment())
  }

  function decrementHandler() {
    dispatch(counterActions.decrement())
  }

  function increaseHandler() {
    dispatch(counterActions.increase(5))   // {type:increase identifier, payload :5}  payload is default
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggle())
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
