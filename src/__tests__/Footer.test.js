import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Footer from '../components/Footer';

beforeEach(() => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
});

describe('Footer', () => {
  test('renders Footer component on /home route', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path="/home" element={<Footer />} />
        </Routes>
      </MemoryRouter>,
    );

    const footerElement = screen.getByText('CodeHub');
    expect(footerElement).toBeInTheDocument();
  });

  test('does not render Footer component on other routes', () => {
    render(
      <MemoryRouter initialEntries={['/other']}>
        <Routes>
          <Route path="/other" element={<Footer />} />
        </Routes>
      </MemoryRouter>,
    );

    const footerElement = screen.queryByText('CodeHub');
    expect(footerElement).not.toBeInTheDocument();
  });

  test('opens and closes the modal', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path="/home" element={<Footer />} />
        </Routes>
      </MemoryRouter>,
    );

    const openModalButton = screen.getByTestId('open-modal-icon');
    userEvent.click(openModalButton);

    const modalElement = await screen.findByText(
      'Erro 404: Café não Encontrado!',
    );
    expect(modalElement).toBeInTheDocument();

    const closeModalButton = screen.getByText('X');
    userEvent.click(closeModalButton);

    // Aguarde o modal desaparecer
    await waitFor(() => {
      const modalAfterClose = screen.queryByText(
        'Erro 404: Café não Encontrado!',
      );
      expect(modalAfterClose).not.toBeInTheDocument();
    });
  });
});
