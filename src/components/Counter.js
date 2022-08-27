import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/reducer';
import classes from './Counter.module.css';

const Counter = () => {

  const { counter : { count, toggleCounter} } = useSelector(state => state);
  const dispatch = useDispatch();

  
  
  const IncCounterHandler = () => {
    dispatch(counterActions.increment())
  };

  const DecCounterHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={IncCounterHandler}>Increment</button>
      <button onClick={DecCounterHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
