import React, { Component } from 'react';
import Button from '../Button'
class Counter extends Component {
  state = {
    counter: this.props.initialValue,
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  decrement = () => {
    this.setState({counter: this.state.counter-1});
  }
  render() {
    return (
      <div>
        <div>
          Counter: {this.state.counter}
        </div>
        <Button buttonText = "Increase" onClick = {this.increment}/>
        <Button buttonText = "Decrease" onClick = {this.decrement}/>
      </div>
    );
  }
}

export default Counter;
