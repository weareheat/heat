import React, { Component } from "react";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import Screenshot from "../commons/Screenshot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class proyecto extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    let proyectoActual = this.props.proyectos.filter(
      proyecto => proyecto.id == this.props.match.params.idProyecto
    );
    proyectoActual = proyectoActual[0];
    console.log(proyectoActual);
    return (
      <div>
        <Navbar show={true}></Navbar>
        <div className="portada">
          <img
            style={{ zIndex: 1 }}
            className=""
            src={`/img/portadas/${proyectoActual.preview}`}
          ></img>
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
        <div className="row">
          {typeof proyectoActual.screenshot != "undefined" &&
            proyectoActual.screenshot.map(file => (
              <Screenshot file={file}></Screenshot>
            ))}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"xl"}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>{proyectoActual.URL}</ModalBody>
        </Modal>
        <style jsx>
          {`
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
              position: relative;
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
              padding: 3rem;
              font-size: 1.3em;
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}
