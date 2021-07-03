/* eslint-env jest */

import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { App } from './App';

afterEach(cleanup);

test('Should render component', () => {
  render(<App />);
});

test('Should render logo', () => {
  const { container } = render(<App />);
  expect(container.querySelector('img')?.getAttribute('src')).toBe('/logo.png');
});

test('Should render title', () => {
  const { container } = render(<App />);
  expect(container.querySelector('h1')?.innerHTML).toBe('MyProject Website');
});
