import React from 'react';
import useCounter from './useCounter';

const Counter = () => {
  const {
    count,
    handleAddCount,
  } = useCounter();

  return (
    <div>
      {`Count: ${count}`}
      <button onClick={() => handleAddCount(1)}>
        {'Add One'}
      </button>
    </div>
  );
};

export default Counter;