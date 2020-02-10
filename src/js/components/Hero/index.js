import React, { Component, Fragment } from "react";
import "./Hero.css";
import confLogo from "../../../image/platziconf-logo.svg";
class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={confLogo}
            alt="logo"
          />
        </div>
      </Fragment>
    );
  }
}

export default Hero;
