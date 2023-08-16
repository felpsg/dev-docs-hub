import React from 'react';
import { CARD_CONTENTS } from '../pages/JsDoc';
import '../assets.js/styles/Step1.css';

function Step3() {
  const contents = CARD_CONTENTS[2]; // Pega o terceiro objeto em CARD_CONTENTS

  return (
    <div className="custom-card">
      <div className="custom-card-header">{contents.header}</div>
      <div className="custom-card-body">
        <h5 className="title-color">{contents.title}</h5>
        {contents.sections.map((section, index) => (
          <div key={index}>
            <p className={`${section.className} text`}>{section.subtitle}</p>
            <ul className="lista-t">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="italic-text text">{contents.conclusion}</p>
        
      </div>
    </div>
  );
}

export default Step3;
