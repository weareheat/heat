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
              HEAT
            </div>
          </div>
          <hr className="separador"></hr>
          <div className="row">
            <div className="col-6 socialNetworks">
              <FontAwesomeIcon icon={faVimeoSquare} />{" "}
              <FontAwesomeIcon icon={faFacebookSquare} />{" "}
              <FontAwesomeIcon icon={faInstagram} />{" "}
            </div>
            <div className="col-6 text-right">heat@mail.com</div>
          </div>
          <style jsx>{`
            .separador {
              border-top: 2px solid ${this.props.color};
            }
            .footer-main {
              font-size: 1.6em;
            }
            .socialNetworks {
              font-size: 1.7em;
            }
          `}</style>
        </div>
      </div>
    );
  }
}
