import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  test('it should mount', () => {
    render(<HomePage />);

    const homePage = screen.getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });
});