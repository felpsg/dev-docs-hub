import React from 'react';
import videoSource from '../assets.js/images/video.mp4'; 
import '../assets.js/styles/home.css';

const Home = () => (
  <div className="home">
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
    <h1 className="title">
      Bem vindo ao<span> CodeHub</span>
    </h1>
    <p>
      Você encontrará documentações completas e atualizadas sobre
      <br /> várias tecnologias front-end. Navegue por guias, tutoriais e
      referências <br /> abrangentes.
    </p>
    <div className="additional-section">
      <h2>Explore Mais Tecnologias</h2>
      <p>
        Descubra mais sobre as linguagens de programação, frameworks e
        bibliotecas mais recentes em nosso repositório.
      </p>
    </div>
  </div>
);

export default Home;
