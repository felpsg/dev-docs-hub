import React from 'react';
import '../assets.js/styles/jsDoc.css';

const CARD_CONTENTS = [
  {
    header: 'Introdução',
    title: 'Conceitos Básicos',
    text: 'Aprenda os conceitos básicos do JavaScript, como variáveis, tipos de dados, e funções.',
  },
  {
    header: 'Avançado',
    title: 'Programação Assíncrona',
    text: 'Explore os padrões de programação assíncrona no JavaScript, como Promises e Async/Await.',
  },
  {
    header: 'Frameworks',
    title: 'React.js',
    text: 'Mergulhe no React.js e aprenda a criar interfaces de usuário modernas e reativas.',
  },
];

function JsDoc() {
  return (
    <div className="js-doc-container">
      <h1 className="text-center">Documentação JavaScript</h1>
      <p className="text-p">
        Aqui você encontrará documentações sobre React.js.
      </p>
      <div className="card-container">
        {CARD_CONTENTS.map((content, index) => (
          <div className="custom-card" key={index}>
            <div className="custom-card-header">{content.header}</div>
            <div className="custom-card-body">
              <h5 className="title-color">{content.title}</h5>
              <p>{content.text}</p>
              <button className="custom-button">Ler Mais</button>
            </div>
          </div>
      
        ))}
      </div>
    </div>
  );
}

export default JsDoc;
