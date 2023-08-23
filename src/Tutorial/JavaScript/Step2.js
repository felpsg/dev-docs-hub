import React from 'react';
import { CARD_CONTENTS } from '../../pages/JsDoc';
import '../../assets.js/styles/Step1.css';

function JavaScriptStep2() {
  const contents = CARD_CONTENTS[1]; // Pega o segundo objeto em CARD_CONTENTS

  return (
    <div className="custom-card">
      <div className="custom-card-header">{contents.header}</div>
      <div className="custom-card-body">
        <h5 className="title-color">{contents.title}</h5>
        {contents.text.map((paragraph, index) => (
          <p key={index} className="text">
            {paragraph}
          </p>
        ))}
        <img
          src={contents.image}
          alt="História do JavaScript"
          className="javascript-image"
        />{' '}
        {/* Imagem adicionada */}
        <p className="italic-text text brendan">{contents.brendan}</p>
        {/* Se você tiver mais conteúdo, você pode adicioná-lo aqui */}
      </div>
    </div>
  );
}

export default JavaScriptStep2;
