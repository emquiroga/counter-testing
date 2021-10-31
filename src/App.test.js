import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render the App', () => {
  render(<App />);
  expect(screen.getByRole("app")).toMatchSnapshot();
});
