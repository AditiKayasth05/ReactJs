import logo from './logo.svg';
import './App.css';
import React from 'react';
class MyComponent extends React.Component {
  constructor() {
    super();
    console.log("Im constructor")
   
  }
  render() {
console.log("render");

    return (
      <>
      <h1>Replace the array</h1>
    
      </>
    );
  }
}

export default MyComponent;