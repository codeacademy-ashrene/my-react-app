import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const colorStyle = {
      color: "#0000ff",
    }
    console.log(this.props);
    return (
      <div>
        <button type="button" className="Button" style={colorStyle} onClick = {this.props.onClick}> {this.props.buttonText} </button>
      </div>
    );
  }
}

export default Button;
