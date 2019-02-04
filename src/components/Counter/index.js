import React, { Component } from 'react';
import Button from '../Button'
class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          Counter: 0
        </div>
        <Button />
        <Button />
      </div>
    );
  }
}

export default Counter;
