import { useCallback, useEffect, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = useCallback((countPerAction=1) => {
    // console.log('called add count');
    setCount(c => c + countPerAction);
  }, []);

  useEffect(() => {
    // console.log(count);
  }, [count]);

  return ({
    count,
    setCount,
    handleAddCount,
  });
};

export default useCounter;