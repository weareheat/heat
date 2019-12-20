import React, { Component } from "react";
import Navbar from "../../components/commons/Navbar";
import ReactPlayer from "react-player";
import Footer from "../../components/commons/Footer";

export default class Nosotros extends Component {
  state = {
    img1: "no-seleccionado",
    img2: "no-seleccionado",
    img3: "no-seleccionado",
    img4: "no-seleccionado",
    bio: "bio_0.jpg"
  };
  myRef = React.createRef();
  handleOnClick = id => {
    switch (id) {
      case 1:
        this.setState({
          img1: "seleccionado",
          img2: "no-seleccionado",
          img3: "no-seleccionado",
          img4: "no-seleccionado",
          bio: "bio_1.png"
        });
        break;
      case 2:
        this.setState({
          img1: "no-seleccionado",
          img2: "seleccionado",
          img3: "no-seleccionado",
          img4: "no-seleccionado",
          bio: "bio_2.png"
        });
        break;
      case 3:
        this.setState({
          img1: "no-seleccionado",
          img2: "no-seleccionado",
          img3: "seleccionado",
          img4: "no-seleccionado",
          bio: "bio_3.png"
        });
        break;

      case 4:
        this.setState({
          img1: "no-seleccionado",
          img2: "no-seleccionado",
          img3: "no-seleccionado",
          img4: "seleccionado",
          bio: "bio_4.png"
        });
        break;
    }
    this.myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div>
        <Navbar show={true} url={""}></Navbar>
       <div className="video">
        <ReactPlayer
            className="react-player"
            url="https://player.vimeo.com/video/380748881"
            playing
            width="100%"
            height="100%"
          />
    </div>
        <div className="texto">
          <p
            className="mb-0 pb-0"
            style={{ fontSize: "2.3rem", fontWeight: "bold" }}
          >
            ¿QUIÉNES SOMOS?
          </p>
          <hr className="separador-chico" align="left"></hr>
          <p className="mt-0 pt-0">
            Somos un grupo de creativos que buscamos crear nuevas realidades.
            Queremos terminar con la rutina y transformar visiones. Nuestro
            principal objetivo es llevar las experiencias a un nuevo nivel. Y
            los 80’s es para nosotros nuestra base de todo. Fue la década en la
            que se comenzó a forjar el futuro que vivimos hoy, por eso queremos
            crear uno totalmente diferente donde podemos llegar a resultados
            inimaginables. Solamente hay que dejarse llevar por la imaginación.
          </p>
        </div>
        <div className="personajes px-0 row">
          <div
            className={`col-md-3 px-0`}
            onClick={() => this.handleOnClick(1)}
          >
            <img
              className={`imagen  ${this.state.img1}`}
              src="img/nosotros/elefante_02.jpg"
            ></img>
          </div>
          <div
            className={`col-md-3 px-0`}
            onClick={() => this.handleOnClick(2)}
          >
            <img
              className={`imagen  ${this.state.img2}`}
              src="img/nosotros/koala_02.jpg"
            ></img>
          </div>
          <div
            className={`col-md-3 px-0`}
            onClick={() => this.handleOnClick(3)}
          >
            <img
              className={`imagen  ${this.state.img3}`}
              src="img/nosotros/Pulpo_02.jpg"
            ></img>
          </div>
          <div
            className={`col-md-3 px-0`}
            onClick={() => this.handleOnClick(4)}
          >
            <img
              className={`imagen  ${this.state.img4}`}
              src="img/nosotros/zorro_02.jpg"
            ></img>
          </div>
        </div>
        <div className="fondo" ref={this.myRef}>
          <img
            className="descripcion"
            src={`img/nosotros/${this.state.bio}`}
          ></img>
        </div>
        <Footer bkg={"#07ACE3"} color={"white"} url={""}></Footer>
        <style jsx>
          {`
            .separador-chico {
              width: 30px;
              border-top: 2px solid white;
              margin-left: 6rem;
            }
            .portada {
              height: 100vh;
              background-image: url("img/nosotros/manifiesto.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
            .video {
              background-color: black;
              padding-top: 100px;
              height: calc(100vh);
            }
            .player-wrapper {
              position: relative;
              padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
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
            .personajes {
              background-color: black;
              width: 100%;
              margin-left: 0;
            }
            .imagen {
              width: 95%;
              cursor: pointer;
            }
            .fondo {
              background-image: url(img/nosotros/Fondo.jpg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
            .descripcion {
              width: 100%;
            }
            .seleccionado {
              transition-property: -moz-filter, -ms-filter, -o-filter,
                -webkit-filter, filter;
              transition-duration: 1s;
              filter: saturate(1) !important;
            }
            .no-seleccionado {
              transition-property: -moz-filter, -ms-filter, -o-filter,
                -webkit-filter, filter;
              transition-duration: 1s;
              filter: saturate(0.2);
            }
            .no-seleccionado:hover {
              -moz-filter: saturate(1);
              -ms-filter: saturate(1);
              -o-filter: saturate(1);
              -webkit-filter: saturate(1);
              filter: saturate(1) !important;
            }
          `}
        </style>
      </div>
    );
  }
}
