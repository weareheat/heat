import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Proyecto from "../proyectos/Proyecto";

export default class Preview extends Component {
  render() {
    const { proyecto } = this.props;
    return (
      <div className="col-lg-6 px-0">
        <Link to={`/proyecto/${proyecto.id}`}>
          <div className="frame">
            <p>{proyecto.titulo}</p>
            <img
              style={{ zIndex: 1 }}
              className=""
              src={`/img/portadas/${proyecto.preview}`}
            ></img>
          </div>
          <style jsx>{`
            div.frame {
              cursor: pointer;
              background: black;
              padding: 0;
            }

            div.frame img {
              display: block;
              width: 100%;
              height: 100%;
              -webkit-transition: all 0.5s linear;
              -moz-transition: all 0.5s linear;
              -ms-transition: all 0.5s linear;
              -o-transition: all 0.5s linear;
              transition: all 0.5s linear;
            }

            div.frame:hover img {
              opacity: 0.3;
            }

            div.frame:hover {
              outline: 3px solid white;
              outline-offset: -1.5rem;
            }
            div.frame p {
              position: absolute;
              top: 3rem;
              left: 3rem;
              color: transparent;
              font-size: 1.5em;
              font-family: "Montserrat";
            }
            div.frame:hover p {
              color: white;
            }
          `}</style>
        </Link>
      </div>
    );
  }
}
