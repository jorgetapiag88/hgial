import React from 'react';
import ReactDOM from 'react-dom/client';
import { Inicio } from './components/Inicio';
import mspweb from "./assets/img/msp-web.jpg"
import msp from "./assets/img/msp.jpg"
import logone from "./assets/img/logo-ne.jpg"
import logomsp from "./assets/img/logomsp4.png"
import logo5 from "./assets/img/logomsp5.jpg";
import zimbra from "./assets/enlaces/zimbra.jpg";
import quipux from "./assets/enlaces/quipux.jpg";
import pras from "./assets/enlaces/pras.jpg";
import sais from "./assets/enlaces/sais.jpg";
import imagen from "./assets/enlaces/imagen.jpg";
import labo from "./assets/enlaces/laboratorio.jpg";

const enlaces = { mspweb, logone, msp, logomsp, logo5, zimbra, quipux, pras, sais, imagen, labo };
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Inicio enlaces={enlaces} />
  </React.StrictMode>,
)