
import React from 'react';

 export class LifeCycle extends React.Component {
  constructor() {
    super();
    console.log("Im constructor")
   
  }
  componentDidMount(){
    console.log("mounted")
  }

componentDidUpdate(prevProps, prevState) {
 
  console.log('componentDidUpdate');
}

componentWillUnmount() {
 
  console.log('componentWillUnmount');
}


  render() {
console.log("render");

    return (
      <>
      <h1>LifeCycle Methods</h1>
      </>
    );
  }
}
