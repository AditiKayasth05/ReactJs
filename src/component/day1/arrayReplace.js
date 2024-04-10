// import logo from './logo.svg';
// import './App.css';
import React from 'react';
export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Im constructor")
    this.state = {
      arry1: [10,50,100], 
      arry2: [5, 25, 50], 
    };
  }

  replaceArray = () => {
    this.setState({ arry1: [...this.state.arry2] }); 
  };
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
    const { arry1, arry2 } = this.state;

    return (
      <>
      <h1>Replace the array</h1>
    
        <p>Array 1:        {arry1.join(', ')}</p>
        <p>Array 2:        {arry2.join(', ')}</p>
        <button onClick={this.replaceArray}>Replace Array</button>
      </>
    );
  }
}

