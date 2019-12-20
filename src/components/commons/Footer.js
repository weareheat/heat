import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVimeoSquare,
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="py-5 footer-main"
        style={{ background: this.props.bkg, color: this.props.color }}
      >
        <div className="mx-4">
          <div className="row ">
            <div className="col-6">Seguinos</div>
            <div
              className="col-6 text-right"
              style={{ fontWeight: 900, fontSize: "1.3em" }}
            >
              HEAT!
            </div>
          </div>
          <hr className="separador"></hr>
          <div className="row">
            <div className="col-6 socialNetworks">
              <a href="https://vimeo.com/heatagencia">
                <img
                  className="icono"
                  src={`${this.props.url}img/commons/vimeo_${this.props.color}.png`}
                ></img>
              </a>
              <a href="https://www.instagram.com/we.are.heat/">
                <img
                  className="icono"
                  src={`${this.props.url}img/commons/ing_${this.props.color}.png`}
                ></img>
              </a>
              <img
                className="icono"
                src={`${this.props.url}img/commons/facebook_${this.props.color}.png`}
              ></img>
            </div>
            <div className="col-6 text-right">heat.agencia@gmail.com</div>
          </div>
          <style jsx>{`
            .separador {
              border-top: 2px solid ${this.props.color};
            }
            .icono {
              width: 3.5rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .footer-main {
              height: 15rem;
              font-size: 1.6em;
            }
            .socialNetworks {
              display: flex;
              font-size: 1.7em;
            }
          `}</style>
        </div>
      </div>
    );
  }
}
