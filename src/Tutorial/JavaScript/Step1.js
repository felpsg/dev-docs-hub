import React from 'react';
import { CARD_CONTENTS } from '../../pages/JsDoc';
import '../../assets.js/styles/Step1.css';

function JavaScriptStep1() {
  const content = CARD_CONTENTS[0]; // Introdução

  return (
    <div className="custom-card">
      <div className="custom-card-header">{content.header}</div>
      <div className="custom-card-body">
        <h5 className="title-color">{content.title}</h5>
        <p className="text">{content.text}</p>
        <h6 className="sub-title">{content.subtitle}</h6>
        <p className="text">{content.text2}</p>
        <h6 className="sub-title">{content.subtitle2}</h6>
        <p className="text">{content.text2}</p>
        <h6 className="sub-title">{content.subtitle3}</h6>
        <p className="text">{content.text3}</p>
        <p className="conclusion">{content.conclusion}</p>
      </div>
    </div>
  );
}

export default JavaScriptStep1;
