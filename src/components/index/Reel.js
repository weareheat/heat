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
      </div>
    );
  }
}
