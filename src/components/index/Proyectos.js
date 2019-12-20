import React, { Component } from "react";
import Preview from "../../components/index/Preview";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

export default class Proyectos extends Component {
  myRef = React.createRef();

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  componentDidMount = () => {
    this.scrollToTop();
  };

  render() {
    return (
      <React.Fragment>
        <Navbar show={true} url={""}></Navbar>
        <div style={{ position: "relative", top: 100 }}>
          <div className="row mx-0">
            {this.props.proyectos.map(proyecto => (
              <Preview proyecto={proyecto}></Preview>
            ))}
          </div>
          <div className="subir">
            <div className="circulo" onClick={() => this.scrollToTop()}>
              <div className="flecha-simbolo">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </div>
          </div>
          <Footer bkg={"orange"} color={"black"} url={""}></Footer>
        </div>
        <style jsx>
          {`
            .subir {
              height: 500px;
              background: black;
              color: white;
              justify-content: center;
              display: flex;
              align-items: center;
            }
            .flecha-simbolo {
              font-size: 4em;
            }
            .circulo {
              border: 4px solid #fff;
              width: 100px;
              height: 100px;
              border-radius: 100%;
              position: relative;
              margin: 4px;
              display: inline-block;
              vertical-align: middle;
              justify-content: center;
              display: flex;
              align-items: center;
              cursor: pointer;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
