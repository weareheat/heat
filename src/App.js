import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  Link,
  browserHistory
} from "react-router-dom";
import logo from "./logo.svg";
import Index from "./pages/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Proyecto from "./components/proyectos/Proyecto";
import Reel from "./components/index/Reel";
import Proyectos from "./components/index/Proyectos";

class App extends Component {
  componentDidMount = () => {
    var widthWithoutScrollbar = document.body.clientWidth;
  };

  render() {
    const proyectos = [
      {
        id: 1,
        titulo: "Campaña Publicitaria Argentina Game Show",
        bkg: "#77BC1F",
        URL: null,
        preview: "01.jpg",
        background: "negro",
        color: "blanco",
        screenshot: [
          "01_01.jpg",
          "01_02.jpg",
          "01_03.png",
          "01_04.png",
          "01_05.png",
          "01_06.png",
          "01_07.png",
          "01_08.jpg",
          "01_09.jpg",
          "01_10.jpg"
        ]
      },
      {
        id: 2,
        titulo: " Mapping: Animaciones y proyección",
        bkg: "#EE4165",
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
        preview: "02.jpg",
        screenshot: [
          "02_01.jpg",
          "02_02.jpg",
          "02_03.jpg",
          "02_04.jpg",
          "02_05.jpg",
          "02_06.jpg"
        ]
      },
      {
        id: 3,
        titulo: "Infografía sobre el CX",
        bkg: "#07ACE3",
        URL: null,
        preview: "03.jpg",
        screenshot: ["03.jpg"]
      },
      {
        id: 4,
        titulo: "Ilustraciones sobre un viaje",
        bkg: "#07ACE3",
        URL: null,
        preview: "04.jpg",
        screenshot: ["04.jpg"]
      },
      {
        id: 5,
        titulo: "Dancing man",
        bkg: "#82378A",
        URL: null,
        preview: "05.jpg",
        screenshot: [
          "05_00.jpg",
          "05_01.jpg",
          "05_02.jpg",
          "05_03.jpg",
          "05_04.jpg"
        ]
      },
      {
        id: 6,
        titulo: "After effects",
        bkg: "#EE4165",
        URL: null,
        preview: "06.jpg",
        screenshot: ["06.jpg"]
      },
      {
        id: 7,
        titulo: "Avatar",
        bkg: "#82378A",
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
        preview: "07.jpg",
        screenshot: ["07.jpg"]
      },
      {
        id: 8,
        titulo: "Modelado 3d Gir - Invasor zim",
        bkg: "#82378A",
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
        bkg: "#EE4165",
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
        screenshot: ["09_02.jpg", "09_03.jpg"]
      },
      {
        id: 10,
        titulo: "Mujer inspeccionada",
        bkg: "#07ACE3",
        URL: null,
        preview: "10.jpg",
        screenshot: ["10.jpg"]
      },
      {
        id: 11,
        titulo: "Collage: Mujer y TV",
        bkg: "#07ACE3",
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
        preview: "11.jpg",
        screenshot: ["11.jpg"]
      },
      {
        id: 12,
        titulo: "Modelo 3D del Joker - Batman the animated series",
        bkg: "#82378A",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="A 3D model"
                width="640"
                height="480"
                src="https://sketchfab.com/models/fba57f89bf3a424197e864e6629424c4/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                <a
                  href="https://sketchfab.com/3d-models/joker-de-batman-the-animated-series-fba57f89bf3a424197e864e6629424c4?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                  target="_blank"
                  style="font-weight: bold; color: #1CAAD9;"
                >
                  Joker de Batman The Animated Series
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
        preview: "12.jpg"
      },
      {
        id: 13,
        titulo: "Video publicitario - Festival de cine BARS",
        bkg: "#EE4165",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/287547577"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/287547577">
                Buenos Aires Rojo Sangre - Motion Graphics Fanmade
              </a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "13.jpg",
        screenshot: [
          "13_01.jpg",
          "13_02.jpg",
          "13_03.jpg",
          "13_04.jpg",
          "13_05.jpg"
        ]
      },
      {
        id: 14,
        titulo: "Ilustracion de animales",
        bkg: "#07ACE3",
        URL: null,
        preview: "14.jpg",
        screenshot: ["14_01.jpg", "14_02.jpg", "14_03.jpg"]
      },
      {
        id: 15,
        titulo: "Video publicitario Campus Axon",
        bkg: "#77BC1F",
        URL: (
          <React.Fragment>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/357261212"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "15.jpg",
        screenshot: ["15_01.jpg", "15_02.jpg", "15_03.jpg", "15_04.jpg"]
      },
      {
        id: 16,
        titulo: "Publicidad facebook - Axon Taining",
        bkg: "#EE4165",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/341469751"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/341469751">Animation video branding</a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "16.jpg",
        screenshot: ["16_01.jpg", "16_02.jpg", "16_03.jpg", "16_04.jpg"]
      },
      {
        id: 17,
        titulo: "Animación: Atracción + Objetos",
        bkg: "#82378A",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376945033"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376945033">
                Personaje Atracci&oacute;n + Objetos
              </a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "17.jpg",
        screenshot: ["17_01.jpg", "17_02.jpg", "17_03.jpg"]
      },
      {
        id: 18,
        titulo: "Publicidad Poraloid",
        bkg: "#77BC1F",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376946274"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376946274">Publicidad Poraloid</a> from{" "}
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "18.jpg",
        screenshot: ["18_01.jpg", "18_02.jpg"]
      },
      {
        id: 19,
        titulo: "Publicidad de Jugo Heat",
        bkg: "#77BC1F",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376947465"
              width="640"
              height="291"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376947465">Publicidad de jugo heat</a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "19.jpg",
        screenshot: ["19_01.jpg", "19_02.jpg", "19_03.jpg", "19_04.jpg"]
      },
      {
        id: 20,
        titulo: "Juego Tio Grandpa",
        bkg: "#F7B619",
        URL: null,
        preview: "20.jpg"
      },
      {
        id: 21,
        titulo: " Ilustraciones “freaking out”",
        bkg: "#07ACE3",
        URL: null,
        preview: "21.jpg"
      },
      {
        id: 23,
        titulo: "Modelo 3d Camaro",
        bkg: "#82378A",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="A 3D model"
                width="640"
                height="480"
                src="https://sketchfab.com/models/2dfb48ad25354b9fb4dbe2d1203d15cc/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                <a
                  href="https://sketchfab.com/3d-models/camaro-2dfb48ad25354b9fb4dbe2d1203d15cc?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                  target="_blank"
                  style="font-weight: bold; color: #1CAAD9;"
                >
                  Camaro
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
        preview: "23.jpg"
      },
      {
        id: 24,
        titulo: "Fondo + Ilustración",
        bkg: "#07ACE3",
        URL: null,
        preview: "24.jpg"
      },
      {
        id: 25,
        titulo: "Fotografías intervenidas",
        bkg: "#07ACE3",
        URL: null,
        preview: "25.jpg"
      },
      {
        id: 26,
        titulo: "Animaciones elementos medicina",
        bkg: "#EE4165",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376954881"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376954881">Cell Division</a> from{" "}
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
            ---
            <iframe
              src="https://player.vimeo.com/video/376954906"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376954906">DNA</a> from{" "}
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "26.jpg"
      },
      {
        id: 27,
        titulo: "Videoclip radiohead",
        bkg: "#EE4165",
        URL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376955428"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376955428">Cola de luz-radiohead</a>{" "}
              from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "27.jpg"
      }
    ];
    return (
      <React.Fragment>
        <BrowserRouter history={browserHistory}>
          <Route
            exact
            path="/"
            render={() => <Index proyectos={proyectos} />}
          />
          <Route
            path="/proyectos"
            render={() => <Proyectos proyectos={proyectos} />}
          />
          <Route path="/reel" render={() => <Reel />} />

          <Route
            path="/proyecto/:idProyecto"
            render={props => <Proyecto {...props} proyectos={proyectos} />}
          />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
