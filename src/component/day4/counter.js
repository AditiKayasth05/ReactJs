import  { useState,useEffect } from 'react';
import React from 'react';
export function Counter() {

  const [count, setCount] = useState(0);

 
  const increment = () => {
    if(count===10){
    setCount(0);
    
  }
  
  else{
    setCount(count + 1);
  }

  };



  const decrement = () => {
    if (count===0){
      setCount(10)
    }
    else{
    setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment(+)</button>
      <button onClick={decrement}>Decrement(-)</button>
    </div>
  );
}


