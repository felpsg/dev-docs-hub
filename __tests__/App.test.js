import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Usando MemoryRouter para testar rotas
import App from '../src/App';

describe('Componente App', () => {
  test('renderiza o componente Header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // Verifica se o componente Header é renderizado corretamente
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renderiza o componente Sidebar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    // Verifica se o componente Sidebar é renderizado corretamente
    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();
  });

  // Adicione mais testes para os outros componentes e rotas conforme necessário
});
