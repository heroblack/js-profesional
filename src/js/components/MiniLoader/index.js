import React, { Component } from "react";

import "./loader.css";

export default class MiniLoader extends Component {
  render() {
    return (
      <div className="lds-grid">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    );
  }
}
