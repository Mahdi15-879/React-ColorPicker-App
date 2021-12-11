import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="ColorBox">
        <span>{this.props.name}</span>
        <soan>MORE</soan>
      </div>
    );
  }
}

export default ColorBox;
