import React, { Fragment } from "react";
import pacmanError from "../../../image/404-error.jpg";
import "./pacmanError.css";
export default function PageError(props) {
  return (
    <Fragment>
      <div className="pacmanError">
        <h3>{props.error.message}</h3>
      </div>
    </Fragment>
  );
}
