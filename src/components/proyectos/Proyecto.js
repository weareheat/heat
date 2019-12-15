import React, { Component } from "react";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import Screenshot from "../commons/Screenshot";

export default class proyecto extends Component {
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
          <div className="descripcion px-3">
            <hr align="left" className="separador-corto" />
            <h2>{proyectoActual.titulo}</h2>
            <hr className="separador-largo" />
            <h3>{proyectoActual.subtitulo}</h3>
          </div>
        </div>
        <div className="texto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue orci non mi sollicitudin aliquam. Integer lobortis eu dolor
            ultrices volutpat. Curabitur auctor euismod maximus. Donec sed
            finibus urna. Sed feugiat ex eget elit bibendum, sed gravida sapien
            malesuada. Curabitur nec convallis orci. Etiam varius id odio id
            condimentum. Morbi malesuada rutrum velit, eu malesuada massa varius
            eu. Donec ac nulla rutrum, rutrum nibh et, dictum ipsum. Integer
            tempus placerat elit, vitae malesuada leo ultricies eget. Aliquam
            accumsan lacus nec ullamcorper mollis. Mauris venenatis ullamcorper
            ligula, et ultricies eros pellentesque tristique. Aenean in gravida
            lorem. In hac habitasse platea dictumst. Vivamus blandit est sed
            bibendum elementum.
          </p>
        </div>
        <div className="row">
          {typeof proyectoActual.screenshot != "undefined" &&
            proyectoActual.screenshot.map(file => (
              <Screenshot file={file} modal={proyectoActual.URL}></Screenshot>
            ))}
        </div>
        <style jsx>
          {`
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
