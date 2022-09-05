import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

it('renders', async () => {
  await render(<App />);

  const el = screen.getByText(/seasonal/i);
  expect(el).toBeInTheDocument();
});
