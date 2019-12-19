import React, { Component } from "react";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import ReactPlayer from "react-player";

export default class Reel extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar show={true}></Navbar>
        <div className="video">
          <ReactPlayer
            className="react-player"
            url="https://player.vimeo.com/video/379159470"
            playing
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <Footer bkg={"black"} color={"white"}></Footer>
        </div>
        <style jsx>
          {`
            .video {
              background-color: black;
              padding-top: 100px;
              height: calc(100vh);
            }
            .player-wrapper {
              position: relative;
              padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
            }
            .footer {
              position: fixed;
              left: 0;
              bottom: 0;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}
