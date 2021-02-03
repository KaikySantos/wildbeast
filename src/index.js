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

import Wolf1Img from './images/wolf1.jpg';
import Wolf2Img from './images/wolf2.jpg';
import Wolf3Img from './images/wolf3.jpg';

import Anuncio1Img from './images/anuncio-1.jpg';
import Anuncio2Img from './images/anuncio-2.jpg';

ReactDOM.render(
  <React.StrictMode>
    <div className="estrutura">
      <header className="header">
        <a href="/#" className="logo">
          <img src={LogoImg} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li><a href="/#">sobre</a></li>
            <li><a href="/#">animais</a></li>
            <li><a href="/#">contato</a></li>
          </ul>
        </nav>
      </header>

      <nav className="sidenav">
        <ul>
          <li><a href="/#"><img src={CervoImg} alt="Cervo" /></a></li>
          <li><a href="/#"><img src={LeaoImg} alt="Leão" /></a></li>
          <li><a href="/#"><img src={GatoImg} alt="Gato" /></a></li>
          <li><a href="/#"><img src={VacaImg} alt="Vaca" /></a></li>
          <li><a href="/#"><img src={OvelhaImg} alt="Ovelha" /></a></li>
          <li><a href="/#"><img src={AbelhaImg} alt="Abelha" /></a></li>
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

        <img src={Wolf1Img} alt="Wolf 1" />

        <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.</p>

        <img src={Wolf2Img} alt="Wolf 2" />

        <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros.</p>

        <p>O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no Alasca, Canadá,[8] e na antiga União Soviética.</p>

        <blockquote className="citacao">
          <p>“Há algo no uivar do lobo que tira um homem do aqui e agora e o transporta para uma floresta da mente.”</p>
        </blockquote>

        <ul className="atributos">
          <li>Surgiu: 12.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 13 anos</li>
          <li>Macho adulto: 80kg</li>
          <li>Fêmea adulta: 55kg</li>
          <li>Família: Lupus</li>
        </ul>

        <div className="informacoes">
          <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
          <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
        </div>

        <img src={Wolf3Img} alt="Wolf 3" />
      </main>

      <aside className="anuncios">
        <div className="anuncio-item">
          <img src={Anuncio1Img} alt="Anuncio 1" />
        </div>
        <div className="anuncio-item">
          <img src={Anuncio2Img} alt="Anuncio 2" />
        </div>
      </aside>

      <footer className="footer">
        <p>Origamid © 2012 - 2017. Alguns direitos reservados.</p>
      </footer>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);