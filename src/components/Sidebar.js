import React from 'react';

function Sidebar() {
  // O componente retorna uma barra lateral com links para várias documentações
  return (
    <aside>
      <h3>Documentação</h3>
      <ul>
        <li>
          <a href="/react">React.js</a>
        </li>{' '}
        <li>
          <a href="/javascript">JavaScript</a>
        </li>{' '}
        <li>
          <a href="/vue">Vue</a>
        </li>{' '}
        <li>
          <a href="/bootstrap">Bootstrap</a>
        </li>{' '}
        <li>
          <a href="/tailwind">Tailwind</a>
        </li>{' '}
      </ul>
    </aside>
  );
}

export default Sidebar;
