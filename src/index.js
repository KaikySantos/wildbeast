import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LogoImg from './images/wildbeast.svg';
import CervoImg from './images/icones/cervo.svg';
import AbelhaImg from './images/icones/abelha.svg';
import GatoImg from './images/icones/gato.svg';
import LeaoImg from './images/icones/leao.svg';
import OvelhaImg from './images/icones/ovelha.svg';
import VacaImg from './images/icones/vaca.svg';

ReactDOM.render(
  <React.StrictMode>
    <div className="estrutura">
      <header className="header">
        <a href="#" className="logo">
          <img src={LogoImg} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li><a href="#">sobre</a></li>
            <li><a href="#">animais</a></li>
            <li><a href="#">contato</a></li>
          </ul>
        </nav>
      </header>

      <nav className="sidenav">
        <ul>
          <li><a href="#"><img src={CervoImg} alt="Cervo" /></a></li>
          <li><a href="#"><img src={LeaoImg} alt="Leão" /></a></li>
          <li><a href="#"><img src={GatoImg} alt="Gato" /></a></li>
          <li><a href="#"><img src={VacaImg} alt="Vaca" /></a></li>
          <li><a href="#"><img src={OvelhaImg} alt="Ovelha" /></a></li>
          <li><a href="#"><img src={AbelhaImg} alt="Abelha" /></a></li>
        </ul>
      </nav>

      <main className="content">
        <div className="titulo">
          <h1>Lobo Cinza</h1>
          <span>da família canis lupus</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">72</span>
            <span className="rotulo">kg</span>
          </div>
          <div>
            <span className="numero">13</span>
            <span className="rotulo">age</span>
          </div>
        </div>

        <p>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico
        </p>



      </main>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);