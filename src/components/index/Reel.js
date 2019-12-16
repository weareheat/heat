import React, { Component } from "react";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";

export default class Reel extends Component {
  render() {
    return (
      <div>
        <Navbar show={true}></Navbar>
        Hola soy el reel
        <Footer bkg={"#77BC1F"} color={"black"}></Footer>
      </div>
    );
  }
}
