import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Navbar from "../components/commons/Navbar";
import Preview from "../components/index/Preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Proyecto from "../components/proyectos/Proyecto";
import Footer from "../components/commons/Footer";

export default class index extends Component {
  state = {
    navbarStatus: 0, // 0 inicial, 1 mostrar, 2 ocultar
    isTop: false,
    cantPreview: 6,
    animacionPlus: ""
  };

  myRef = React.createRef();

  scrollDown = () => {
    this.setState({ navbarStatus: 1 });
    this.myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        this.setState({ navbarStatus: 2 });
      }
    });
  };

  sumaPreview = () => {
    const newCantPreview = this.state.cantPreview + 6;
    if (this.props.proyectos.length >= newCantPreview) {
      this.setState({ cantPreview: newCantPreview });
    } else {
      this.setState({ cantPreview: this.props.proyectos.length });
    }
  };

  animaPlus = animacion => {
    if (animacion) this.setState({ animacionPlus: "animacionIn" });
    else this.setState({ animacionPlus: "animacionOut" });
  };

  render() {
    return (
      <div className="screen">
        <Navbar show={this.state.navbarStatus}></Navbar>

        <ReactScrollWheelHandler
          upHandler={() => this.scrollUp()}
          downHandler={() => this.scrollDown()}
          preventScroll={true}
          timeout={1}
        >
          <React.Fragment>
            <div className="header" style={{ background: "grey" }}>
              <div className="">
                <div className="header-navbar col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 pl-5">
                      <img className="logo" src="img/logo/Logo-negro.png"></img>
                    </div>
                    <div
                      className="col-lg-6 "
                      style={{
                        color: "black",
                        textAlign: "end",
                        paddingRight: "4.5rem"
                      }}
                    >
                      <span className="link px-2">
                        <Link to="/reel">Reel</Link>
                      </span>
                      <span className="link px-2">
                        <Link to="/proyectos">Proyectos</Link>
                      </span>
                      <span className="link px-2">
                        <Link to="/nosotros">Nosotros</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="header-img"
                src="img/home/header.gif"
                alt=""
              ></img>
            </div>
          </React.Fragment>
        </ReactScrollWheelHandler>

        <div style={{ position: "relative" }}>
          <div
            ref={this.myRef}
            style={{ background: "grey", top: "-99px", position: "absolute" }}
          ></div>
          <div className="row mx-0">
            {this.props.proyectos.map((proyecto, index) =>
              index < this.state.cantPreview ? (
                <Preview proyecto={proyecto}></Preview>
              ) : null
            )}
          </div>
        </div>

        <div className="masPreview">
          <div
            className={`circulo ${this.state.animacionPlus}`}
            onMouseEnter={() => this.animaPlus(true)}
            onMouseLeave={() => this.animaPlus(false)}
            onClick={() => this.sumaPreview()}
          >
            <div className="mas-simbolo">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
        <div class="parallax"></div>
        <div className="texto">
          <div className="inner">
            <hr className="separador-chico" align="left"></hr>
            Si sigues todas las reglas, te perderás toda la diversión.
          </div>
        </div>
        <Footer bkg={"#EE4165"} color={`black`}></Footer>
        <style jsx>
          {`
            .header-img {
              position: relative;
              width: 100%;
              z-index: 0;
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
            .animacionIn {
              -webkit-animation-name: izquierda; /* Safari 4.0 - 8.0 */
              -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
              animation-name: izquierda;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }
            .animacionOut {
              -webkit-animation-name: derecha; /* Safari 4.0 - 8.0 */
              -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
              animation-name: derecha;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            }
            @keyframes izquierda {
              to {
                transform: rotate(180deg);
              }
            }
            @keyframes derecha {
              to {
                transform: rotate(-180deg);
              }
            }
            .header-navbar {
              position: absolute;
              z-index: 1;
              height: 100px;
              width: 100%;
              justify-content: center;
              display: flex;
              flex-direction: column;
              color: white;
            }
            .stop-scrolling {
              height: 100%;
              overflow: hidden;
            }
            .link a {
              font-family: "Montserrat";
              font-weight: bold;
              color: black;
            }
            .masPreview {
              height: 500px;
              background: black;
              color: white;
              justify-content: center;
              display: flex;
              align-items: center;
            }
            .mas-simbolo {
              font-size: 4em;
            }
            .separador-chico {
              width: 30px;
              border-top: 2px solid white;
            }
            .parallax {
              background-image: url("img/home/img-parallax.jpg");
              height: 500px;
              background-attachment: fixed;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .texto {
              background: black;
              padding: 0;
              outline: 3px solid white;
              outline-offset: -1.5rem;
              color: white;
            }
            .texto .inner {
              padding: 6rem;
              padding-top: 4rem;
              font-size: 3em;
              margin: 0;
            }
            .screen {
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}
