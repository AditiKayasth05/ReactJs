import React, { useState } from 'react';

export function ChangeColor() {
    const [color, setColor] = useState("red");
  
    return(
    <> <h1>My favorite color is {color}!</h1>
    <button type="button" onClick={() => setColor("blue")} >Blue</button>
</>
    );
  }
  
 export function Myself() {
    const [Myself, setMyself] = useState({
      name: "Aditi",
      age: "21",
      hobbie:"Dancing",
      Education: "BTech"
    });
    return (
        <>
          <h1>My name is {Myself.name}</h1>
          <p>
            I am  {Myself.age} Years old , My fav Hobbies is {Myself.hobbie}My education {Myself.Education}
          </p>
        </>
      )
}


 export function Jsx() {
    const [jsxElement, setJsxElement] = useState(null);
  
    const createJsxElement = () => {
     
      const newJsxElement = <div>This is my JSX</div>;
      setJsxElement(newJsxElement);
    };


    return (
      <div>
        <button onClick={createJsxElement}>Create JSX Element</button>
        <div>
 
          {jsxElement}
        </div>
        
      </div>
    );
  }
  


