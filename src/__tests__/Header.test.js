import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import { waitFor } from '@testing-library/react';

describe('Header', () => {
  it('renderiza sem quebrar', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const header = screen.getByTestId('header');
    expect(header).toBeTruthy();
  });

  it('renderiza o logo com o link correto', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const logoLink = screen.getByRole('link', { name: /CodeHub Rocket Icon/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('alterna o menu quando o hamburger é clicado', async () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const button = screen.getByRole('button', { name: /toggle navigation/i });
    fireEvent.click(button);
    await waitFor(() => {
      const menuElement = screen.getByTestId('menu');
      expect(menuElement).toHaveClass('show'); // verifica se o menu está visível
    });
    fireEvent.click(button);
    await waitFor(() => {
      const menuElement = screen.getByTestId('menu');
      expect(menuElement).not.toHaveClass('show'); 
    });
  });
});
