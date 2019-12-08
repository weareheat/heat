import React, { Component } from "react";

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
        <a className="navbar-brand ml-5" href="#">
          <img className="logo" src="/img/logo/Logo-blanco.png"></img>
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
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Reel <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Proyectos
              </a>
            </li>
          </ul>
        </div>

        <style jsx>
          {`
            .navbar {
              background: black;
              color: white;
              height: 100px;
              font-family: "Montserrat";
              font-weight: bold;
            }
            .inicial {
              display: none;
            }
            .nav-link {
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
