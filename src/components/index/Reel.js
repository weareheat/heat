import React, { Component } from "react";

export default class Reel extends Component {
  render() {
    return (
      <div
        onWheel={event => {
          if (event.nativeEvent.wheelDelta < 0) {
            this.props.showingNavbar();
            this.props.scrollear();
          }
        }}
        style={{ height: "100vh", background: "grey" }}
      >
        Hola soy el reel
        <iframe
          src="https://player.vimeo.com/video/289300163?title=0&byline=0&portrait=0"
          width="640"
          height="480"
          frameborder="0"
          allow="autoplay; fullscreen"
          portrait="false"
          allowfullscreen
        ></iframe>
        <img src="" alt=""></img>
      </div>
    );
  }
}
