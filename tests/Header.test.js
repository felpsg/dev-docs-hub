import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
  test('renders CodeHub logo', () => {
    render(<Header />);
    // Verifica se o logo CodeHub está renderizado
    const logoElement = screen.getByText('CodeHub');
    expect(logoElement).toBeInTheDocument();
  });

  test('opens menu on logo click', () => {
    render(<Header />);

    // Simula um clique no logo
    fireEvent.click(screen.getByText('CodeHub'));

    // Verifica se o menu é aberto
    const closeButton = screen.getByText('Close');
    expect(closeButton).toBeInTheDocument();
  });
});
