import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Sidebar from '../components/Sidebar';

const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore({
    tutorial: { step: 1 },
  });
});

describe('Sidebar', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('opens submenu when clicked', () => {
    render(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    );

    const linkWithSubMenu = screen.getByText('CSS');
    fireEvent.click(linkWithSubMenu);

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Introdução ao CSS')).toBeInTheDocument();
    expect(screen.getByText('Vantagens e Desvantagens')).toBeInTheDocument();
  });

  test('closes submenu when submenu link is clicked again', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    );

    // Abra o submenu 'CSS'
    const linkWithSubMenu = screen.getByText('CSS');
    fireEvent.click(linkWithSubMenu);

    // Feche o submenu 'CSS' clicando novamente no link 'CSS'
    fireEvent.click(linkWithSubMenu);

    // Verifique se o submenu 'CSS' foi fechado
    expect(screen.queryByText('Inicio')).not.toBeInTheDocument();
    expect(screen.queryByText('Introdução ao CSS')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Vantagens e Desvantagens'),
    ).not.toBeInTheDocument();

    // Abra o submenu 'JavaScript Tutorial'
    fireEvent.click(screen.getByText('JavaScript Tutorial'));

    // Verifique se o submenu 'JavaScript Tutorial' foi aberto
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Introdução ao javascript')).toBeInTheDocument();
    expect(screen.getByText('Vantagens e Desvantagens')).toBeInTheDocument();
    expect(screen.getByText('Lógica de Programação')).toBeInTheDocument();

    // Feche o submenu 'JavaScript Tutorial' clicando novamente no link 'JavaScript Tutorial'
    fireEvent.click(screen.getByText('JavaScript Tutorial'));

    // Verifique se o submenu 'JavaScript Tutorial' foi fechado
    expect(screen.queryByText('Inicio')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Introdução ao javascript'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Vantagens e Desvantagens'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Lógica de Programação')).not.toBeInTheDocument();
  });
});