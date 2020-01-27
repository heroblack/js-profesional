import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../image/tigerSoft.jpg";
class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <header className="Bar">
          <div className="Bar__logo">
            <div className="Bar__logo-image">
              <Link to="/">
                <img src={logo} alt="logo" widht="40" height="40" />
              </Link>
              <span className="font-weight-light">Tiger</span>
              <span className="font-weight-bold">Soft</span>
            </div>
            <i className="Bar__logo-burger fa fa-bars fa-2x fa-lg"></i>
          </div>

          <div className="Bar_opciones">
            <nav className="Bar_nav">
              <ul className="Bar__list noListStyle">
                <li className="Bar__items">
                  <a className="active link" href="#">
                    Blog
                  </a>
                </li>
                <li className="Bar__items">
                  <a className="link" href="#">
                    Portafolio
                  </a>
                </li>
                <li className="Bar__items">
                  <a className="link" href="#">
                    eventos
                  </a>
                </li>
                <li className="Bar__items">
                  <a className="link" href="#">
                    opcion 4
                  </a>
                </li>
              </ul>
            </nav>

            <a className="btn btn-green" href="#">
              Iniciar Sesion
            </a>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default NavBar;
