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
      Bem-vindo ao<span> DevDocsHub</span>
    </h1>
    <p>
      O DevDocsHub oferece um acesso direto e interativo às <br />
      documentações técnicas das principais linguagens e frameworks <br />
      front-end. Mergulhe em:
      <ul>
        <li>Guias Práticos de HTML5, CSS3, JavaScript (ES6+)</li>
        <li>Tutoriais de React, Angular, Vue.js</li>
        <li>Exemplos de Código com Análise em Tempo Real</li>
        <li>Comunidade Activa para Discussões e Suporte</li>
      </ul>
      Desenvolvido por e para profissionais, o DevDocsHub é sua <br />
      ferramenta definitiva para aprendizagem, referência e <br />
      colaboração em desenvolvimento front-end.
    </p>
    <div className="additional-section">
      <h2>Aprofunde-se nas Tecnologias Front-End</h2>
      <p>
        O DevDocsHub não é apenas uma fonte de documentação; é um ambiente de aprendizagem que promove o entendimento prático e a experimentação. Com exemplos detalhados, quizzes e desafios, tornamos o aprendizado técnico acessível e envolvente. Explore, aprenda e cresça com o DevDocsHub.
      </p>
    </div>
  </div>
);

export default Home;
