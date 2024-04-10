import  { useState,useEffect } from 'react';
import React from 'react';
export function CounterEff() {

  const [countt, setCount] = useState(0);
  
  
  useEffect(() => {
    console.log("Counter Loading")
  });
  
  useEffect(() => {
    console.log("counter mounted")
  },[]);

  useEffect(() => {
    console.log("counter Updated")
    if(countt===-1){
      alert("Your Count is less than 0")
    }
    else if(countt===21){
      alert("Your Count is greater  than 20")  
    }
  },[countt]);

  const increment = () => {
    if(countt===21){
    setCount(0);
    
  }
  
  else{
    setCount(countt + 1);
  }

  };
 

  const decrement = () => {
    if (countt===0){
      setCount(21)
    }
    else{
    setCount(countt - 1);
    }
  };

  return (
    <div>
      <h1>Counter with limits</h1>
      <p>Count: {countt}</p>
      <button onClick={increment}>Increment(+)</button>
      <button onClick={decrement}>Decrement(-)</button>
    </div>
  );
}


