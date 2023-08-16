import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CARD_CONTENTS } from '../pages/JsDoc';

function Step1() {
  const content = CARD_CONTENTS[0]; // Introdução

  return (
    <div className="custom-card">
      <div className="custom-card-header">{content.header}</div>
      <div className="custom-card-body">
        <h5 className="title-color">{content.title}</h5>
        <p>{content.text}</p>
        {content.snippets &&
          content.snippets.map((snippet, snippetIndex) => (
            <div key={snippetIndex}>
              <SyntaxHighlighter language="javascript" style={docco}>
                {snippet.code}
              </SyntaxHighlighter>
              <p>{snippet.explanation}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Step1;
