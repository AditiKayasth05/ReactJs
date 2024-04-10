
import React from "react";
// Child component
 export const ChildComponent = ({ data, setData }) => {
  const handleClick = () => {
 
    setData('Data from child component');
  };
  return (
    <div>
      <h2>Child Component</h2>
      <p>Data from parent: {data}</p>
      <button onClick={handleClick}>Change Data</button>
    </div>
  );
};

