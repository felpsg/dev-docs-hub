import React from 'react';
import { CARD_CONTENTS } from '../../pages/JsDoc';
import '../../assets.js/styles/Step1.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Step4() {
  const contents = CARD_CONTENTS[3];

  return (
    <div className="custom-card">
      <div className="custom-card-header">{contents.header}</div>
      <div className="custom-card-body">
        <h5 className="title-color">{contents.title}</h5>
        {contents.text.map((paragraph, index) => (
          <p
            key={index}
            className="text"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
        {contents.snippets.map((snippet, index) => (
          <div key={index} className="custom-snippet">
            <p className="snippet-explanation">{snippet.explanation}</p>
            <SyntaxHighlighter
              language="javascript"
              style={nightOwl} // Use o estilo "nightOwl"
              className="snippet-code"
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>
        ))}

        {/* Se você tiver mais conteúdo, você pode adicioná-lo aqui */}
        {contents.conclusion.map((paragraph, index) => (
          <p
            key={index}
            className="text conclusion"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>
  );
}

export default Step4;
