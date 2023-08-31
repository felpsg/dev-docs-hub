import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders CodeHub logo with rocket icon', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Verify if the CodeHub logo and rocket icon are rendered
    const logoElement = screen.getByText('CodeHub');
    const rocketIconElement = screen.getByAltText('Rocket Icon');
    expect(logoElement).toBeInTheDocument();
    expect(rocketIconElement).toBeInTheDocument();
  });

  test('navigates to home page when logo is clicked', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Simulate a click on the logow
    fireEvent.click(screen.getByText('CodeHub'));

    // Verify if the home page has been navigated to
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});