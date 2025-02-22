import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestPage from './TestPage';

describe('<TestPage />', () => {
  test('it should mount', () => {
    render(<TestPage />);

    const testPage = screen.getByTestId('TestPage');

    expect(testPage).toBeInTheDocument();
  });
});