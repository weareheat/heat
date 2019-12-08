import React, { Component } from "react";

export default class Proyectos extends Component {
  render() {
    return (
      <React.Fragment>
        <div ref={this.props.ref} style={{ background: "black" }}>
          Proyectos
          <div style={{ height: 490 }}></div>
        </div>
      </React.Fragment>
    );
  }
}
