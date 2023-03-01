import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header, main and footer elements', () => {
  const {container } = render(<App />);
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(container.querySelector("main")).toBeInTheDocument();
  expect(container.querySelector("footer")).toBeInTheDocument();
});
