import React, { Component } from 'react';
import OuterDiv from './Components/OuterDiv/OuterDiv';
import './App.css';

class App extends Component {

  numbers = [4, 5, 2, 2, 6, 8];

  filterNumbers(arr, from, to) {
    return arr.filter(num => num > from && num < to);
  }

  multipleNumbers(arr, multiplier) {
    return this.filterNumbers(arr, 4, 8).map(num => num * multiplier);
  }

  calculateSum(arr) {
    return this.multipleNumbers(arr, 10).reduce((acc, currValue) => acc + currValue);
  }

  componentDidMount() {
    console.log('Task 2.1', this.filterNumbers(this.numbers, 4, 8));
    console.log('Task 2.2', this.multipleNumbers(this.numbers, 10));
    console.log('Tasl 2.3', this.calculateSum(this.numbers));
  }

  render() {
    return (
      <div className="App">
        <OuterDiv />
      </div>
    );
  }
}

export default App;
