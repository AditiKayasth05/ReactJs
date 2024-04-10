import React, { useState } from 'react';
import {ChildComponent} from './c_usestateprops'

export const ParentComponent = () => {
  const [data, setData] = useState('click button to get  child Data ');

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data: {data}</p>
       <ChildComponent data={data} setData={setData} /> 
      
    </div>
  );
};
