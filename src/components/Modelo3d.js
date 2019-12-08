import React, { Component } from "react";

export default class Modelo3d extends Component {
  render() {
    return (
      <div className="container">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="A 3D model"
            width="900"
            height="480"
            src="https://sketchfab.com/models/fba57f89bf3a424197e864e6629424c4/embed"
            frameborder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>

          <p
            style={{
              fontSize: 13,
              fontWeight: "normal",
              margin: 5,
              color: "#4A4A4A"
            }}
          >
            <a
              href="https://sketchfab.com/3d-models/joker-de-batman-the-animated-series-fba57f89bf3a424197e864e6629424c4?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
              target="_blank"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Joker de Batman The Animated Series
            </a>
            by{" "}
            <a
              href="https://sketchfab.com/heatdesign?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
              target="_blank"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Heat Design Agency
            </a>
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
              target="_blank"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
        <div className="header"></div>
        <div className="proyectos"></div>

        <style jsx>{``}</style>
      </div>
    );
  }
}
