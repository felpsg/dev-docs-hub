const links = [
  { path: '/home', label: 'Home' },
  { path: '/chat', label: 'HubeGPT' },
  { path: '/tutorial/vue', label: 'Vue' }, 

  {
    path: '/tutorial/css',
    label: 'CSS',
    subLinks: [
      { path: '/tutorial/css/step1', label: 'Inicio' },
      { path: '/tutorial/css/step2', label: 'Introdução ao CSS' },
      { path: '/tutorial/css/step3', label: 'Vantagens e Desvantagens' }, 
    ],
  },

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
];

export default links;
