import { render, screen } from '@testing-library/react';
import React from 'react';
// import App from './routes';

it('renders learn react link', () => {
  render(<h1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
