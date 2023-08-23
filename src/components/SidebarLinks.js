const links = [
  { path: '/home', label: 'Home' },
  { path: '/chat', label: 'HubeGPT' },
  {
    path: '/tutorial/javascript',
    label: 'JavaScript Tutorial',
    subLinks: [
      { path: '/tutorial/javascript/step1', label: 'Inicio' },
      { path: '/tutorial/javascript/step2', label: 'Introdução ao javascript' },
      { path: '/tutorial/javascript/step3', label: 'Vantagens e Desvantagens' },
      { path: '/tutorial/javascript/step4', label: 'Lógica de Programação' },
    ],
  },
  {
    path: '/tutorial/react',
    label: 'React Tutorial',
    subLinks: [
      { path: '/tutorial/react/step1', label: 'Inicio' },
      { path: '/tutorial/react/step2', label: 'Introdução ao React' },
      { path: '/tutorial/react/step3', label: 'Vantagens e Desvantagens' },
    ],
  },
  { path: '/docs/vue', label: 'Vue' },
  { path: '/docs/bootstrap', label: 'Bootstrap' },
  { path: '/docs/tailwind', label: 'Tailwind' },
];

export default links;
