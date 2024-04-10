import React, { useState } from 'react';

export function CopyArray() {
  
  const [array1, setArray1] = useState([1, 2, 3]);
  const [array2, setArray2] = useState([4, 5, 6]);
  const [mergedArray, setMergedArray] = useState([]);

  const CopyArrays = () => {
    const newArray = [...array1, ...array2];
    setMergedArray(newArray);
  };

  return (
    <div>
      <div>
        <h2>Array 1: {'['+array1.join(', ')+']'}</h2>
        <>
        </>
      </div>
      <div>
        <h2>Array 2: {'['+array2.join(', ')+']'}</h2>
      </div>
      <button onClick={CopyArrays}>Copy Arrays</button>
      <div>
        <h2>Merged Array: {'['+mergedArray.join(', ')+']'}</h2>
      </div>
    </div>
  );
}


