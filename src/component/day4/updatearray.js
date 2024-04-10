
import  { useState } from 'react';
import React from 'react';

export function UpdateArray() {

  const [myArray, setMyArray] = useState([]);

  function updateArray () {
    const input=prompt('enter thr array');
    setMyArray( [...myArray,input]);
  };

  return (
    <div> <h1>Array Example</h1>   

         <h2> Array: {'['+myArray.join(', ')+']'}</h2>
      <button onClick={updateArray}>Update Array</button>
      </div>
  );
}


