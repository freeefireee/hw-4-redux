import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';
import './counter.css';

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());

  return (
    <div className='block'>
      <h2>{value}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
    </div>
  );
};

export default Counter;
