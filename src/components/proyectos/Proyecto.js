import React, { Component } from "react";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import Screenshot from "../commons/Screenshot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReactPlayer from "react-player";

export default class proyecto extends Component {
  state = {
    modal: false
  };
  componentDidMount = () => {
    window.scrollTo({ top: 0 });
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    let proyectoActual = this.props.proyectos.filter(
      proyecto => proyecto.id == this.props.match.params.idProyecto
    );
    proyectoActual = proyectoActual[0];
    return (
      <div>
        <Navbar show={true} url={"../"}></Navbar>
        <div className="portada">
          {proyectoActual.URL != null ? (
            <span className="playboton" onClick={() => this.toggle()}>
              <FontAwesomeIcon icon={faPlayCircle} />
            </span>
          ) : null}
          <div className="descripcion px-3">
            <hr align="left" className="separador-corto" />
            <h2>{proyectoActual.titulo}</h2>
            <hr className="separador-largo" />
            <h3>{proyectoActual.subtitulo}</h3>
          </div>
        </div>
        <div className="texto">
          <p>{proyectoActual.text}</p>
        </div>
        <div
          className="row mx-0 justify-content-md-center"
          style={{ backgroundColor: "black" }}
        >
          {proyectoActual.screenshot != null &&
            proyectoActual.screenshot.map(file => (
              <div
                className={`${
                  proyectoActual.mobile ? "col-md-4" : "col-md-7"
                } py-3`}
              >
                <Screenshot
                  file={file}
                  viewModal={proyectoActual.screenshotLarge}
                ></Screenshot>
              </div>
            ))}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"xl"}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            {proyectoActual.video ? (
              <ReactPlayer
                className="react-player"
                url={proyectoActual.URL}
                playing
                width="100%"
                height="100%"
              />
            ) : (
              proyectoActual.URL
            )}
          </ModalBody>
        </Modal>
        <Footer
          bkg={proyectoActual.background}
          color={proyectoActual.color}
          url={"../"}
        ></Footer>
        <style jsx>
          {`
            .modal-body {
              justify-content: center;
              display: flex;
              background: transparent;
              height: 80vh;
            }
            .modal-content {
              background: transparent;
              border: none;
            }
            .modal-header {
              background: transparent;
              border-bottom: none;
            }
            .playboton {
              font-size: 8em;
              height: 100px;
              width: 100px;
              position: absolute;
              left: 50%;
              margin-left: -50px;
              top: 50%;
              margin-top: -50px;
              cursor: pointer;
            }
            .playboton:hover {
              color: white;
            }
            .portada {
              height: 100vh;
              background-image: url("../img/portadas/${proyectoActual.preview}");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
            .portada img {
              width: 100%;
            }
            .descripcion {
              position: absolute;
              bottom: 0;
              color: white;
              width: 100%;
              background: rgba(0, 0, 0, 0.5);
            }
            .separador-corto {
              width: 30px;
              border: 2px solid white;
            }
            .separador-largo {
              border: 2px solid white;
            }
            .texto {
              background: black;
              padding: 0;
              outline: 3px solid white;
              outline-offset: -1.5rem;
              color: white;
            }
            .texto p {
              padding: 6rem;
              font-size: 1.3em;
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}
