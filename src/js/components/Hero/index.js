import React, { Component, Fragment } from "react";
import "./Hero.css";
import confLogo from "../../../image/badge-header.svg";
class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={confLogo} alt="logo" />
        </div>
      </Fragment>
    );
  }
}

export default Hero;
