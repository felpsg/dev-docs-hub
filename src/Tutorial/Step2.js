import React from 'react';
import { CARD_CONTENTS } from '../pages/JsDoc'; // Ajuste o caminho conforme necessário
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Step2() {
  // Você pode escolher partes específicas de CARD_CONTENTS ou adicionar novos elementos
  const contents = CARD_CONTENTS[1]; // Pega o segundo objeto em CARD_CONTENTS

  return (
    <div className="tutorial-step2-container">
      <h1>{contents.header}</h1>
      <h3>{contents.title}</h3>
      <p>{contents.text}</p>
      {contents.snippets &&
        contents.snippets.map((snippet, snippetIndex) => (
          <div key={snippetIndex}>
            <SyntaxHighlighter language="javascript" style={docco}>
              {snippet.code}
            </SyntaxHighlighter>
            <p>{snippet.explanation}</p>
          </div>
        ))}
    </div>
  );
}

export default Step2;
