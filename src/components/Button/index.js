import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button type="button" className="Button">Click me!</button>
      </div>
    );
  }
}

export default Button;
