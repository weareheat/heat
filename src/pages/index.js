import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Navbar from "../components/commons/Navbar";
import Preview from "../components/index/Preview";
import Proyecto from "../components/proyectos/Proyecto";

export default class index extends Component {
  state = {
    navbarStatus: 0, // 0 inicial, 1 mostrar, 2 ocultar
    isTop: false
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
        //user is at the top of the page; no need to show the back to top button
        this.setState({ navbarStatus: 2 });
        console.log("top");
      } else {
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar show={this.state.navbarStatus}></Navbar>

        <ReactScrollWheelHandler
          upHandler={() => this.scrollUp()}
          downHandler={() => this.scrollDown()}
          preventScroll={true}
          timeout={1}
        >
          <React.Fragment>
            <div className="header" style={{ background: "grey" }}>
              <div className="col-lg-12">
                <div className="header-navbar ">
                  <div className="row mx-2">
                    <div className="col-lg-6 pl-5">
                      <img
                        className="logo"
                        src="/img/logo/Logo-negro.png"
                      ></img>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{
                        color: "black",
                        textAlign: "end",
                        paddingRight: "4.5rem"
                      }}
                    >
                      <a className="px-2">Reel</a>
                      <a className="px-2">Proyectos</a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="header-img"
                src="/img/home/header.gif"
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
          <div className="row">
            {this.props.proyectos.map(
              proyecto => (
                <Preview proyecto={proyecto}></Preview>
              )
              //console.log(proyecto)
            )}
          </div>
        </div>
        <style jsx>
          {`
            .header-img {
              position: relative;
              width: 100%;
              z-index: 0;
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
          `}
        </style>
      </React.Fragment>
    );
  }
}
