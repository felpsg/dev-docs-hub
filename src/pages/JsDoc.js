import React from 'react';
import '../assets.js/styles/jsDoc.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CARD_CONTENTS = [
  {
    header: 'Introdução',
    title: 'Conceitos Básicos',
    snippets: [
      { code: 'const x = 10;', explanation: 'Declaração de uma constante.' },
      {
        code: 'function greet() { return "Hello!"; }',
        explanation: 'Definição de uma função.',
      },
      {
        code: 'if (x > 5) { console.log("x é maior que 5"); }',
        explanation: 'Uso de uma instrução condicional.',
      },
    ],
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
      <div className="card-container">
        {CARD_CONTENTS.map((content, index) => (
          <div className="custom-card" key={index}>
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
              <button className="custom-button">Ler Mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JsDoc;
