import React from 'react';
import '../assets.js/styles/home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="title">Bem vindo ao <span>CodeHub</span></h1>
      <p className="sub-title">
        Você encontrará documentações sobre várias tecnologias front-end.
      </p>
    </div>
  );
}

export default Home;
