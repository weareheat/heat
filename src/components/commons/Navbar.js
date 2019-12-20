import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  setNavbarStatus = () => {
    switch (this.props.show) {
      case 0:
        return "inicial";
      case 1:
        return "mostrar";
      case 2:
        return "ocultar";
    }
  };
  render() {
    return (
      <nav
        className={`navbar ${this.setNavbarStatus()} navbar-expand-lg fixed-top`}
      >
        <a className="navbar-brand ml-5" href="/">
          <img className="logo" src="img/logo/Logo-blanco.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item px-2">
              <Link to="/reel">Reel</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li className="nav-item px-2">
              <Link to="/nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>

        <style jsx>
          {`
            .navbar {
              background: black;
              height: 100px;
            }
            .inicial {
              display: none;
            }
            .nav-link {
              color: white;
            }
            .nav-item a {
              font-family: "Montserrat";
              font-weight: bold;
              color: white;
            }
            .mostrar {
              -webkit-animation-name: mostrar; /* Safari 4.0 - 8.0 */
              -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
              animation-name: mostrar;
              animation-duration: 1s;
            }
            .ocultar {
              -webkit-animation-name: ocultar; /* Safari 4.0 - 8.0 */
              -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
              animation-name: ocultar;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }
            @keyframes mostrar {
              from {
                transform: translateY(-100px);
              }
              to {
                transform: translateY(0);
              }
            }
            @keyframes ocultar {
              from {
                transform: translateY(0px);
              }
              to {
                transform: translateY(-100px);
              }
            }
          `}
        </style>
      </nav>
    );
  }
}
