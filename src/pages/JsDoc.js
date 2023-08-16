export const CARD_CONTENTS = [
  {
    header: 'JavaScript: Sua Rota para o Domínio!',
    title: 'Embark on Your Coding Journey',
    subtitle: 'Começando com o Básico:',
    text: 'Neste curso, você será apresentado aos fundamentos essenciais do JavaScript. Aprenderá a manipular tipos de dados, controlar o fluxo do programa com condicionais, e explorar o mundo das funções e variáveis. Uma base sólida para qualquer desenvolvedor!',
    subtitle2: 'Dominando Estruturas e Métodos Avançados:',
    text2:
      'Este curso levará suas habilidades um passo adiante. Você entenderá como usar matrizes para gerenciar dados, loops para repetir tarefas, e métodos iteradores para facilitar o processo. Tudo isso enquanto aproveita o poder da sintaxe moderna do JavaScript ES6.',
    subtitle3: 'Modelando o Mundo Real com Objetos:',
    text3:
      'Aqui, a magia realmente acontece! Você aprenderá a usar objetos para representar elementos do mundo real, tornando seu código mais compreensível e eficaz. Este curso é mais do que apenas código; é sobre pensar como um programador e ver as possibilidades infinitas!',
  },

  {
    header: 'INTRODUÇÃO AO JAVASCRIPT',
    title: 'O Surgimento e a Evolução do JavaScript',
    text: [
      'Nascido em 1995, o JavaScript foi criado em apenas 10 dias por Brendan Eich, enquanto trabalhava na Netscape. Originalmente conhecido como LiveScript, seu nome foi mudado para JavaScript para refletir sua então nova capacidade de criar aplicativos baseados em objetos.',
      // pular um paragrafo
      'O JavaScript rapidamente se popularizou, sendo adotado pela Microsoft como JScript em 1996. A ECMA International tomou as rédeas em 1997, padronizando a linguagem como ECMAScript. Essa padronização abriu o caminho para o crescimento constante e o surgimento de novos recursos, como as versões ES6+. Hoje, frameworks como React, Angular e Vue dominam a paisagem, ampliando ainda mais as capacidades do JavaScript.',
      // pular um paragrafo
      'A linguagem evoluiu de um simples script de navegador para uma plataforma completa para desenvolvimento, permitindo a criação de aplicativos web complexos, servidores, dispositivos móveis e até IoT. Hoje, é quase impossível imaginar a web sem JavaScript, pois controla o comportamento dinâmico de praticamente todos os sites modernos. Neste curso, você embarcará em uma jornada emocionante através da rica história e das capacidades expansivas do JavaScript, preparando-se para criar soluções robustas e inovadoras.',
    ],
    image: require('../assets.js/images/JavaScript.jpg'), // Corrigido o caminho
    brendan: 'Brendan Eich, criador do JavaScript',
  },

  {
    header: 'JavaScript: Vantagens e Desvantagens',
    title: 'Um Olhar Detalhado',
    sections: [
      {
        subtitle: 'Vantagens do JavaScript:',
        className: 'advantages',
        items: [
          'É uma linguagem versátil que pode ser usada no cliente e no servidor.',
          'Amplamente suportada por todos os navegadores modernos.',
          'Rica em frameworks e bibliotecas como React, Angular e Vue, facilitando o desenvolvimento.',
          'Desempenho rápido na execução de códigos.',
          'Grande comunidade e muitos recursos disponíveis para aprender e solucionar problemas.',
        ],
      },
      {
        subtitle: 'Desvantagens do JavaScript:',
        className: 'disadvantages',
        items: [
          'Pode ter diferenças de comportamento entre diferentes navegadores.',
          'Códigos podem se tornar complexos se não forem bem organizados.',
          'Sensível a erros, uma pequena falha pode quebrar todo o código.',
          'Segurança pode ser uma preocupação, especialmente com código malicioso.',
        ],
      },
      {
        subtitle:
          'Benefícios de Começar com JavaScript como Primeira Linguagem:',
        className: 'benefits',
        items: [
          'Fácil de começar, mas oferece complexidade para aprender mais profundamente.',
          'Pode ver os resultados rapidamente no navegador.',
          'Muitos recursos online para aprendizado.',
          'Abre portas para desenvolvimento web completo (front-end e back-end).',
        ],
      },
      {
        subtitle:
          'Malefícios de Começar com JavaScript como Primeira Linguagem:',
        className: 'drawbacks',
        items: [
          'Pode criar maus hábitos de programação se não ensinado corretamente.',
          'Algumas partes da linguagem são inconsistentes ou confusas para iniciantes.',
          'Pode ser desafiador entender conceitos assíncronos e outros avançados no início.',
        ],
      },
    ],
    conclusion:
      'JavaScript é uma excelente escolha, mas como qualquer ferramenta, possui suas particularidades. Seu caminho pelo mundo do JavaScript será excitante e cheio de oportunidades. Explore, aprenda e divirta-se!',
  },

  {
    header: 'Lógica de Programação',
    title: 'Aprofundando na Lógica de Programação',
    text: [
      'A lógica de programação é a capacidade fundamental de organizar os pensamentos e resolver problemas de forma estruturada, um pré-requisito para qualquer desenvolvedor.',
      'Imagine a lógica de programação como um mapa mental que leva da pergunta "como resolver isso?" a uma série de passos claros e ordenados.',
      'Ao desenvolver uma lógica sólida, você quebra o problema em partes menores, assim como separar ingredientes antes de cozinhar. Isso facilita a resolução de desafios complexos.',
      'Vamos explorar aprofundadamente os componentes-chave da lógica de programação:',
      '1. Condicionais: Essenciais para a tomada de decisões em um programa. Usando estruturas "if", você pode instruir o código a agir com base em condições, como executar um bloco de código apenas se uma determinada condição for verdadeira.',
      '2. Laços de Repetição: Através de estruturas de repetição como "for" e "while", você pode automatizar a execução de um bloco de código várias vezes, economizando tempo e esforço.',
      '3. Funções: Agrupam tarefas em blocos reutilizáveis de código. Isso promove a modularidade e a manutenibilidade, pois você pode chamar uma função sempre que precisar executar uma tarefa específica.',
      '4. Operadores Lógicos: Permitem combinar condições e expressões, como "&&" para "e" lógico e "||" para "ou" lógico. Isso é útil para avaliar várias condições simultaneamente.',
      'Vamos examinar exemplos práticos de cada um:',
    ],
    snippets: [
      {
        code: [
          'if (temSol) {',
          "  console.log('Vá ao parque!');",
          '} else {',
          "  console.log('Considere fazer algo indoor.');",
          '}',
        ].join('\n'),
        explanation:
          'Neste exemplo, se "temSol" for verdadeiro, o programa sugere ir ao parque; caso contrário, sugere uma atividade indoor.',
      },
      {
        code: [
          'const quantidade = 10;',
          'for (let i = 0; i < quantidade; i++) {',
          "  console.log('Contagem:', i + 1);",
          '}',
        ].join('\n'),
        explanation:
          'Este trecho usa um loop "for" para exibir uma contagem de 1 a 10, mostrando como repetir uma ação com base em uma condição.',
      },
      {
        code: [
          'function saudacao(nome) {',
          "  return 'Olá, ' + nome + '! Bem-vindo(a)!';",
          '}',
          'const mensagem = saudacao("Maria");',
          'console.log(mensagem);',
        ].join('\n'),
        explanation:
          'Neste exemplo, a função "saudacao" recebe um nome e retorna uma mensagem personalizada, demonstrando como agrupar código em funções reutilizáveis.',
      },
      {
        code: [
          'const idade = 25;',
          'const temCarteira = true;',
          'if (idade >= 18 && temCarteira) {',
          "  console.log('Pode dirigir.');",
          '} else {',
          "  console.log('Não pode dirigir.');",
          '}',
        ].join('\n'),

        explanation:
          'Este exemplo mostra o uso dos operadores lógicos "&&" para verificar se alguém pode dirigir com base na idade e na posse de uma carteira de motorista.',
      },
    ],
    conclusion: [
      'Dominar a lógica de programação é a base para se tornar um desenvolvedor hábil e eficiente.',
      'Ao compreender profundamente os componentes-chave, você ganha a capacidade de resolver problemas de maneira estruturada e criar soluções eficazes.',
      'Lembre-se de que esse tópico é apenas o começo. Nos próximos tópicos, mergulharemos mais fundo em cada aspecto da lógica de programação, abordando condicionais, loops, funções e operadores lógicos de maneira detalhada.',
      'Prepare-se para enfrentar desafios mais complexos e expandir ainda mais suas habilidades como desenvolvedor.',
    ],
  },
];