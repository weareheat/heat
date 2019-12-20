import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
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
import Nosotros from "./components/index/Nosotros";

class App extends Component {
  componentDidMount = () => {
    var widthWithoutScrollbar = document.body.clientWidth;
  };

  render() {
    const proyectos = [
      {
        id: 1,
        titulo: "Campaña Publicitaria Argentina Game Show",
        video: true,
        URL: "https://player.vimeo.com/video/379508813",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/379508813"
              frameborder="0"
              allow="autoplay; fullscreen"
              height="500"
              width="900"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "01.jpg",
        background: "#07ACE3",
        color: "black",
        text:
          "Creamos una campaña publicitaria para el evento Argentina Game Show bajo el concepto: La gran familia de locos por los videojuegos.  En el proceso de creación trabajamos desde nuestro racional: Que somos vagos dijeron. Animales nocturnos. Que le escapamos a la ducha. Hemos tropezado con el maltrato, el rechazo, el bullying. Y hemos resistido. Pero no ha sido solos. NO. En cada caída nos han ayudado a levantarnos, y en cada batalla han luchado a nuestro lado. Incondicionales, en los mejores momentos y en los peores también. Hemos pasado noches, horas, incluso días juntos pero sin vernos. Y aún asi, hemos defendido a capa y espada a nuestros pares. Porque lo primero... es LA FAMILIA. Desde posteos en redes, eventos especiales, ideas para juegos publicitarios, merchandising y estrategias publicitarias.",
        backfooter: "#F9ED34",
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
        video: true,
        URL: "https://player.vimeo.com/video/340475070",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/340475070"
              width="640"
              height="640"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "02.jpg",
        screenshot: [
          "02_01.PNG",
          "02_02.PNG",
          "02_03.PNG",
          "02_04.PNG",
          "02_05.PNG",
          "02_06.PNG"
        ],
        background: "#EE4165",
        color: "black",
        text:
          "Nos invitaron a participar en un evento cultural de parte de Cooperativa de la imagen con un proyecto experimental de mapping y animación en vivo, realizamos también la edicién de sonido usando temas de la banda Odesza.",
        backfooter: "#77BC1F"
      },
      {
        id: 3,
        titulo: "Infografía sobre el CX",
        bkg: "#07ACE3",
        URL: null,
        preview: "03.jpg",
        screenshot: ["03.png"],
        screenshotLarge: true,
        background: "#07ACE3",
        color: "white",
        text:
          "Observamos que el movimiento del diseño ux empezó a crecer exponencialmente junto con todo lo que tiene que ver con la importancia del usuario en cada parte del proceso. Y nosotros también quisimos formar parte. Para eso investigamos el tema buscando información, comparando y llegando a conclusiones que bajamos en una infografía, el concepto principal: La experiencia del cliente = Diseño CX.",
        backfooter: "#77BC1F"
      },
      {
        id: 4,
        titulo: "Ilustraciones sobre un viaje",
        bkg: "#07ACE3",
        URL: null,
        preview: "04.jpg",
        screenshot: ["04.png"],
        screenshotLarge: true,
        background: "#07ACE3",
        color: "white",
        text:
          "Una editorial nos hizo el pedido de realizar unas ilustraciones para un cuento corto a lanzar próximamente. Trata sobre una pareja que realiza su primer viaje y en el trayecto empiezan a auto descubrirse y conocerse nuevamente.",
        backfooter: "#77BC1F"
      },
      {
        id: 5,
        titulo: "Dancing man",
        bkg: "#82378A",
        URL: null,
        preview: "05.jpg",
        screenshot: [
          "05_00.gif",
          "05_01.jpg",
          "05_02.jpg",
          "05_03.jpg",
          "05_04.jpg"
        ],
        background: "#82378A",
        color: "white",
        text:
          "Este personaje bailarín fue creado en un experimento probando herramientas y materiales, nos gustó mucho que fue guardado esperando usarlo para algún proyecto. Cuando realizamos la campaña de AGS fue el momento ideal.",
        backfooter: "#F7B619"
      },
      {
        id: 6,
        titulo: "After effects",
        video: true,
        URL: "https://player.vimeo.com/video/287576911",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/287576911"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "06.jpg",
        screenshot: ["06.PNG", "06_01.PNG"],
        background: "#EE4165",
        color: "white",
        text:
          "¡Uno de nuestros compañeros que se dedica a la animación en los proyectos ama tanto After Effects que realizo esta pieza experimental sobre el software y nos encantó tanto que lo agregamos!",
        backfooter: "#77BC1F"
      },
      {
        id: 7,
        titulo: "Avatar",
        bkg: "#82378A",
        video: true,
        URL: "https://player.vimeo.com/video/376945278",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376945278"
              width="640"
              height="640"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "07.jpg",
        screenshot: ["07.jpg"],
        background: "#82378A",
        color: "white",
        text:
          "Creación de personaje para un videojuego. La empresa bluegames nos propuso la idea de crear desde cero un personaje bajo el concepto viento. Hicimos muchos bocetos, trabajamos muchas ideas y este fue nuestro resultado final.",
        backfooter: "#F7B619"
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
                width="1000"
                height="700"
                src="https://sketchfab.com/models/dda860b69eeb4028a004638844ff4dbb/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </React.Fragment>
        ),
        preview: "08.jpg",
        screenshot: null,
        background: "#82378A",
        color: "white",
        text:
          "Cuando anunciaron la película de Invasor Zim y el poder del florpus, Nickelodeon le pidió a varias agencias armar una pieza que tenga que ver sobre el programa que formaran parte de la publicidad antes del estreno. Nosotros quisimos llevaros a otra dimensión y creamos a nuestro GIR en 3D.",
        backfooter: "#F7B619"
      },
      {
        id: 9,
        titulo: "Cyberpunk city",
        bkg: "#EE4165",
        URL: "https://player.vimeo.com/video/287546786",
        video: true,
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/287546786"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "09.jpg",
        screenshot: ["09_02.PNG", "09_03.PNG"],
        background: "#EE4165",
        color: "white",
        text:
          "Luego de la película Ghost in the Shell: vigilante del futuro nuestros diseñadores se inspiraron para realizar este video animado usando herramientas como camera tracking y matte painting.",
        backfooter: "#77BC1F"
      },
      {
        id: 10,
        titulo: "Mujer inspeccionada",
        bkg: "#07ACE3",
        URL: null,
        preview: "10.jpg",
        screenshot: ["10.png"],
        background: "#07ACE3",
        color: "black",
        text:
          "Collage realizado por pedido especial para una galería temática. A nuestro diseñador gráfico le gusta probar con conceptos femeninos. Su concepto era: La muerte aprecia la belleza. ",
        backfooter: "#F7B619"
      },
      {
        id: 11,
        titulo: "Collage: Mujer y TV",
        bkg: "#07ACE3",
        video: true,
        URL: "https://player.vimeo.com/video/269098343",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/269098343"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "11.jpg",
        screenshot: ["11.png"],
        background: "#07ACE3",
        color: "black",
        text:
          "Segundo collage realizado por pedido especial para una galería temática. El concepto era el entretenimiento en el verano. A nuestro animador le gusto el proyecto que le agrego un toque especial. Llevo el concepto inicial a un sueño etéreo de verano.",
        backfooter: "#F7B619"
      },
      {
        id: 12,
        titulo: "Modelo 3D  Joker",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              z
              <iframe
                title="A 3D model"
                width="1000"
                height="700"
                src="https://sketchfab.com/models/fba57f89bf3a424197e864e6629424c4/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                w
                ebkitallowfullscreen="true"
              ></iframe>
            </div>
          </React.Fragment>
        ),
        preview: "12.jpg",
        screenshot: null,
        background: "#82378A",
        color: "white",
        text:
          "Una compañía de juguetes nos pidió modelar el joker de Batman: la serie animada, realizamos dibujos para crear su tridimensión y este fue el resultado final.",
        backfooter: "#F7B619"
      },
      {
        id: 13,
        titulo: "Publicidad- Festival de cine BARS",
        video: true,
        URL: "https://player.vimeo.com/video/287547577",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/287547577"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "13.jpg",
        screenshot: [
          "13_01.PNG",
          "13_02.PNG",
          "13_03.PNG",
          "13_04.PNG",
          "13_05.PNG"
        ],
        background: "#77BC1F",
        color: "white",
        text:
          "Realizamos un video animado para el festival de cine de terror, fantástico y bizarro Buenos Aires Rojo Sangre (BARS), se utilizo en redes sociales para publicitar la nueva edición. ",
        backfooter: "#EE4165"
      },
      {
        id: 14,
        titulo: "Ilustracion de animales",
        preview: "14.jpg",
        screenshot: ["14_01.png", "14_02.png", "14_03.png"],
        background: "#07ACE3",
        color: "black",
        text:
          "Realizamos ilustraciones de animales en su habitad para un libro infantil.  Un elefante en un atardecer, un lobo en una noche de luna llena y un ave de rapiña nocturna. Con esos agregados colaboramos para que la lectura sea más amena y llamativa para el lector.",
        backfooter: "#F7B619"
      },
      {
        id: 15,
        titulo: "Publicidad Nuevo Campus Axon",
        URL: "https://player.vimeo.com/video/357261212",
        video: true,
        viejoURL: (
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
        screenshot: ["15_01.PNG", "15_02.PNG", "15_03.PNG", "15_04.PNG"],
        background: "#77BC1F",
        color: "white",
        text:
          "La empresa Axon Training nos contrato para ser parte de su nuevo lanzamiento de su plataforma de estudio virutal, realizamos el video publicitario para estrenarse el mismo día de la actualización. Además de la edición también realizamos las animaciones de las pantallas.",
        backfooter: "#EE4165"
      },
      {
        id: 16,
        titulo: "Publicidad facebook - Axon Taining",
        video: true,
        URL: "https://player.vimeo.com/video/341469751",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/341469751"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "16.jpg",
        screenshot: ["16_01.jpg", "16_02.jpg", "16_03.jpg", "16_04.jpg"]
      },
      {
        id: 17,
        titulo: "Animación: Atracción + Objetos",
        URL: "https://player.vimeo.com/video/376945033",
        video: true,
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376945033"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "17.jpg",
        screenshot: ["17_01.PNG", "17_02.JPG", "17_03.JPG"],
        background: "#82378A",
        color: "white",
        text:
          "Este personaje es un trabajo de experimento con las herramientas del Cinema 4D, jugamos con el baile y la atracción de objetos.",
        backfooter: "#F7B619"
      },
      {
        id: 18,
        titulo: "Publicidad Poraloid",
        video: true,
        URL: "https://player.vimeo.com/video/376946274",
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376946274"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; 
          fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "18.jpg",
        screenshot: ["18_01.JPG", "18_02.JPG"],
        background: "#77BC1F",
        color: "white",
        text:
          "Realizamos para la empresa Poraloid el video publicitario de su nueva cámara instantánea. Creamos los modelos de ambos productos, el ambiente, la animación y la postproducción.",
        backfooter: "#EE4165"
      },
      {
        id: 19,
        titulo: "Publicidad de Jugo Heat",
        URL: "https://player.vimeo.com/video/376947465",
        video: true,
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376947465"
              width="640"
              height="291"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "19.jpg",
        screenshot: ["19_01.JPG", "19_02.JPG", "19_03.JPG", "19_04.JPG"],
        background: "#77BC1F",
        color: "white",
        text:
          "Creamos un producto refrescante para el calor, el Jugo Heat! de pomelo. Armamos desde la idea, el video publicitario, el modelo 3d y los fluidos animados. ",
        backfooter: "#EE4165"
      },
      {
        id: 20,
        titulo: "Juego Tio Grandpa",
        URL: null,
        preview: "20.jpg",
        screenshot: null,
        background: "#F7B619",
        color: "black",
        text:
          "Creamos para Cartoon Network el juego de su programa de televisión Tío Grandpa. Usamos su gráfica, creamos nueva y programamos el juego para los niños. Tiene 3 niveles y se pueden apreciar a todos los personajes de la serie animada.",
        backfooter: "#77BC1F"
      },
      {
        id: 21,
        titulo: "Ilustración 'Freaking out'",
        URL: null,
        preview: "21.jpg",
        screenshot: ["21_01.png", "21_02.png", "21_03.png", "21_04.png"],
        background: "#07ACE3",
        color: "black",
        text:
          "Esta serie de ilustraciones fue creada para una compañía de vinos como diseño limitado de etiquetas. Fue trabajado con el concepto: Una copa en un After Office. Jugamos con personas que salen de sus oficinas y se relajan luego de beber una copa juntos.",
        backfooter: "#F7B619"
      },
      {
        id: 23,
        titulo: "Modelo 3D - Camaro",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="A 3D model"
                width="1000"
                height="700"
                src="https://sketchfab.com/models/2dfb48ad25354b9fb4dbe2d1203d15cc/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </React.Fragment>
        ),
        preview: "23.jpg",
        screenshot: ["23.jpg"],
        background: "#82378A",
        color: "white",
        text:
          "Modelado 3d de un auto camaro que forma parte de una colección de autos miniatura.",
        backfooter: "#F7B619"
      },
      {
        id: 24,
        titulo: "Fondo + Ilustración",
        URL: null,
        preview: "24.png",
        screenshot: ["24_01.png", "24_02.png", "24_03.png"],
        background: "#07ACE3",
        color: "black",
        text:
          "Jugamos con ilustraciones de mujeres y con el fondo. Fue un experimento para probar diseños y conceptos. ",
        backfooter: "#F7B619"
      },
      {
        id: 25,
        titulo: "Fotografías intervenidas",
        URL: null,
        preview: "25.png",
        screenshot: ["25_01.png", "25_02.png", "25_03.png"],
        background: "#07ACE3",
        color: "white",
        text:
          "Fotografías de propiedad nuestra, quisimos utilizarlas y jugar con la estética duotono y tipografía. Utilizamos frases de canciones que sean representativas. Fue un proyecto experimental. ",
        backfooter: "#F7B619"
      },
      {
        id: 26,
        titulo: "Motion - Medicina",
        URL: "https://player.vimeo.com/video/376954881",
        video: true,
        viejoURL: (
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
              <a href="https://vimeo.com/376954881">Cell Division</a> from
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>

            <iframe
              src="https://player.vimeo.com/video/376954906"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/376954906">DNA</a> from
              <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "26.jpg",
        screenshot: ["26_01.JPG", "26_02.JPG", "26_03.JPG", "26_04.JPG"],
        screenshootVideo: "https://player.vimeo.com/video/376954906",
        background: "#EE4165",
        color: "white",
        text:
          "Creamos unas piezas para una empresa farmacéutica. Una animación del proceso de división celular y otra del ADN. Hechas en su totalidad en el software After Effects",
        backfooter: "#77BC1F"
      },
      {
        id: 27,
        titulo: "Videoclip - Radiohead",
        video: true,
        URL: "https://player.vimeo.com/video/376955428",
        videoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376955428"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "27.jpg",
        screenshot: ["27_01.JPG", "27_02.JPG", "27_03.JPG"],
        background: "#EE4165",
        color: "white",
        text:
          "Para el tema Everything in its right place de Radiohead realizamos el videoclip con una animación que creamos según lo que nos represento para nosotros la canción.",
        backfooter: "#77BC1F"
      },
      {
        id: 28,
        titulo: "Amanecer de un mundo",
        URL: "https://player.vimeo.com/video/287577889",
        video: true,
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/287577889"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "28.jpg",
        screenshot: ["28_01.JPG", "28_02.JPG"],
        background: "#EE4165",
        color: "white",
        text:
          "Realizamos un amanecer ficticio con efectos especiales para una productora de cine que lo iban a utilizar en un cortometraje de ciencia ficción.",
        backfooter: "#77BC1F"
      },
      {
        id: 29,
        titulo: "Ojo dilatado",
        URL: "https://player.vimeo.com/video/376956093",
        video: true,
        viejoURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376956093"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "29.jpg",
        screenshot: ["29_01.JPG", "29_02.JPG", "29_03.JPG"],
        background: "#EE4165",
        color: "white",
        text:
          "Experimentamos con los efectos visuales y creamos un ojo que cambia de color bajo efectos de estupefacientes. Fue un proyecto personal del equipo. ",
        backfooter: "#77BC1F"
      },
      {
        id: 30,
        titulo: "Modelo 3D - Camión",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="A 3D model"
                width="1000"
                height="700"
                src="https://sketchfab.com/models/ad7bdf1b5b484deeaf6c3e8dd424bdb9/embed"
                f
                rameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </React.Fragment>
        ),
        preview: "30.jpg",
        screenshot: ["30.jpg"],
        background: "#82378A",
        color: "white",
        text: "Modelo 3d de un camión para una colección de autos miniatura.",
        backfooter: "#F7B619"
      },
      {
        id: 32,
        titulo: "Sapo ceramica 3D",
        URL: null,
        preview: "32.jpg",
        screenshot: ["32.png"],
        background: "#82378A",
        color: "white",
        text:
          "Modelo 3d de un sapo para una colección de animales. El modelo sirve como molde para luego hacerlo en ceramica.",
        backfooter: "#F7B619"
      },
      {
        id: 33,
        titulo: "Collage Pin-up girls",
        URL: null,
        preview: "33.png",
        screenshot: ["33_01.png", "33_02.png", "33_03.png"],
        background: "#07ACE3",
        color: "black",
        text:
          "Esta serie de collage se armó para una colección de cuadros, para colgarse como un tríptico. Se jugó con ilustraciones de mujeres pin up, estilo vintage y elementos que completan cada pieza. ",
        backfooter: "#F7B619"
      },
      {
        id: 35,
        titulo: "Descomponiendo una burger",
        URL: null,
        preview: "35.jpg",
        screenshot: ["35.PNG"],
        background: "#07ACE3",
        color: "white",
        text:
          "Ilustración de una hamburguesa para una compañía de comida rápida, fue una pieza única mostrando cada ingrediente separándose de cada una para que luego lo puedas armar en tu mente. Pieza utilizada para redes sociales.",
        backfooter: "#F7B619"
      },
      {
        id: 36,
        titulo: "Ilustración - creación de personaje",
        URL: "https://player.vimeo.com/video/376958745",
        video: true,
        viejaURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/376958745"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </React.Fragment>
        ),
        preview: "36.jpg",
        screenshot: ["36.jpg"],
        background: "#07ACE3",
        color: "white",
        text:
          "Participamos en un juego organizado por un diseñador conocido, para crear un personaje bajo el concepto: Elementos. Ilustramos una chica que vive bajo el mar. ",
        backfooter: "#F7B619"
      },
      //id: 37,/
      // titulo: "Experimentando con la rotoscopia",/
      // URL: (/
      //    <React.Fragment>
      //  <iframe src="https://player.vimeo.com/video/376958835" /
      //  width="640" /
      //  height="360" /
      //   frameborder="0" /
      //  allow="autoplay; fullscreen" /
      //   allowfullscreen></iframe>/
      //  <p><a href="https://vimeo.com/376958835">Rotoscopia</a> from /
      //  <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on /
      //  <a href="https://vimeo.com">Vimeo</a>.</p>/
      //    </React.Fragment>/
      //  ),/
      //  preview: "37.jpg",/
      //  screenshot:null,/
      //  background: "#EE4165",/
      //   color: "white",/
      //   text:null,/
      //   backfooter:"#77BC1F",/
      //  },/

      //{id: 38,/
      //titulo: "Sistema global motion",/
      //URL:  (/
      //  <React.Fragment>/
      //<iframe src="https://player.vimeo.com/video/376958900" /
      //width="640" height="360" /
      // frameborder="0" /
      // allow="autoplay; fullscreen" allowfullscreen></iframe>/
      // <p><a href="https://vimeo.com/376958900">Stardust_hud</a> from <a href="https://vimeo.com/rosmarinno">Rocio Romero</a> on <a href="https://vimeo.com">Vimeo</a>.</p>/
      //   </React.Fragment>/
      //  ),/
      //  preview: "38.jpg",/
      //  screenshot:null,/
      //	background: "#EE4165",/
      //   color: "white",/
      //   text:null,/
      //  backfooter:"#77BC1F",/
      // },/
      {
        id: 39,
        titulo: "Critic.ar App",
        URL: null,
        preview: "39.jpg",
        mobile: true,
        screenshot: [
          "39_01.jpg",
          "39_02.jpg",
          "39_03.jpg",
          "39_04.jpg",
          "39_05.jpg",
          "39_06.jpg"
        ],
        background: "#F7B619",
        color: "black",
        text:
          "Esta aplicación fue un proyecto personal nuestro. Surgió en un desafío semanal y nos gusto tanto que seguimos. Su función es como un blog de peliculas, series, musica y juegos, podes armar una lista de pendientes y dejar una critica sobre eso.",
        backfooter: "#77BC1F"
      },

      {
        id: 40,
        titulo: "Tracking Mc Donalds",
        URL: "https://player.vimeo.com/video/379181700",
        video: true,
        viejaURL: (
          <React.Fragment>
            <iframe
              src="https://player.vimeo.com/video/379181700"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/379181700">Caja Track</a> from
              <a href="https://vimeo.com/heatagencia">Heat Agencia</a> on
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </React.Fragment>
        ),
        preview: "40.jpg",
        screenshot: null,
        background: "#82378A",
        color: "white",
        text: null,
        backfooter: "#F7B619"
      },

      {
        id: 41,
        titulo: "Modelo 3d Robot",
        URL: (
          <React.Fragment>
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="A 3D model"
                width="1000"
                height="700"
                src="https://sketchfab.com/models/3d72204ae4024dc0b55f1bdd87b23d35/embed"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </React.Fragment>
        ),
        preview: "41.jpg",
        screenshot: null,
        background: "#82378A",
        color: "white",
        text:
          "Robot creado para una colección de diferentes tipos de personajes robóticos.",
        backfooter: "#F7B619"
      },

      {
        id: 42,
        titulo: "Bafici App",
        URL: null,
        mobile: true,
        preview: "42.jpg",
        screenshot: ["42_01.jpg", "42_02.jpg", "42_03.jpg", "42_04.jpg"],
        background: "#F7B619",
        color: "black",
        text:
          "El festival de cine independiente del país, BAFICI, nos pidió realizar una app para facilitar a los usuarios la grilla de películas. Separadas por categorías como sedes y días.",
        backfooter: "#77BC1F"
      },

      {
        id: 43,
        titulo: "Juego Simon Dance",
        URL: null,
        preview: "43.jpg",
        screenshot: null,
        background: "#F7B619",
        color: "black",
        text:
          "Creamos un juego para nosotros mismos con el formato de simon dice, pero con personajes haciendo pases de bailes. La estética fue creada por nosotros mismos.",
        backfooter: "#77BC1F"
      },

      {
        id: 44,
        titulo: "Web - Falling for innocence",
        URL: null,
        preview: "44.jpg",
        screenshot: ["44_01.jpg", "44_02.jpg", "44_03.jpg"],
        background: "#F7B619",
        color: "black",
        text:
          "La empresa distribuidora de la serie coreana Falling for innocence, nos encargo el website del programa para Latinoamérica, brindando información como sinopsis, detalles de los protagonistas y fotografías.",
        backfooter: "#77BC1F"
      },

      {
        id: 45,
        titulo: "Web - Gotham",
        URL: null,
        preview: "45.jpg",
        screenshot: ["45_01.jpg", " 45_02.jpg", "45_03.jpg"],
        background: "#F7B619",
        color: "black",
        text: null,
        backfooter: "#77BC1F"
      }
    ];
    return (
      <React.Fragment>
        <BrowserRouter basename={window.location.pathname || ""}>
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

          <Route path="/nosotros" render={() => <Nosotros />} />

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
