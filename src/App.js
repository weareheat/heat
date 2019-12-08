import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Index from "./pages/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/commons/Navbar";
import "./App.css";
import Proyecto from "./components/proyectos/Proyecto";

class App extends Component {
  componentDidMount = () => {
    var widthWithoutScrollbar = document.body.clientWidth;
    console.log(widthWithoutScrollbar);
  };

  render() {
    const proyectos = [
      {
        id: 1,
        titulo: "Campaña Publicitaria Argentina Game Show",
        URL: null,
        preview: "01.jpg",
        background: "negro",
        color: "blanco",
        screenshot: ["0101.jpg", "0102.jpg", "0103.jpg", "0104.jpg"]
      },
      {
        id: 2,
        titulo: " Mapping: Animaciones y proyección",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/340475070"
              width="640"
              height="640"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/340475070">Mapping Visuals</a> from{" "}
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "02.jpg"
      },
      {
        id: 3,
        titulo: "Infografía sobre el CX",
        URL: null,
        preview: "03.jpg"
      },
      {
        id: 4,
        titulo: "Ilustraciones sobre un viaje",
        URL: null,
        preview: "04.jpg"
      },
      {
        id: 5,
        titulo: "Dancing man",
        URL: null,
        preview: "05.jpg"
      },
      {
        id: 6,
        titulo: "After effects",
        URL: null,
        preview: "06.jpg"
      },
      {
        id: 7,
        titulo: "Avatar",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376945278"
              width="640"
              height="640"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376945278">Avatar</a> from{" "}
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "07.jpg"
      },
      {
        id: 8,
        titulo: "Modelado 3d Gir - Invasor zim",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="A 3D model"
                width="640"
                height="480"
                src="https://sketchfab.com/models/dda860b69eeb4028a004638844ff4dbb/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                <a
                  href="https://sketchfab.com/3d-models/gir-de-invasor-zim-dda860b69eeb4028a004638844ff4dbb?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                  target="_blank"
                  style="font-weight: bold; color: #1CAAD9;"
                >
                  GIR de Invasor Zim
                </a>
                by{" "}
                <a
                  href="https://sketchfab.com/heatdesign?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                  target="_blank"
                  style="font-weight: bold; color: #1CAAD9;"
                >
                  Heat Design Agency
                </a>
                on{" "}
                <a
                  href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                  target="_blank"
                  style="font-weight: bold; color: #1CAAD9;"
                >
                  Sketchfab
                </a>
              </p>
            </div>
          </React.Fragment>
        ),
        preview: "08.jpg"
      },
      {
        id: 9,
        titulo: "Cyberpunk city",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/287546786"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/287546786">City - Matte Paiting</a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "09.jpg",
        screenshot: ["0901.jpg", "0902.jpg", "0903.jpg"]
      },
      {
        id: 10,
        titulo: "Mujer inspeccionada",
        URL: null,
        preview: "10.jpg"
      },
      {
        id: 11,
        titulo: "Collage: Mujer y TV",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/269098343"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/269098343">Collage Girl Vintage</a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "11.jpg"
      }
    ];
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" render={() => <Index proyectos={proyectos} />} />
            <Route
              path="/proyecto"
              render={() => <Proyecto proyectos={proyectos} />}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
