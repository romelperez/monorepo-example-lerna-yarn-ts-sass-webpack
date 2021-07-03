/* eslint-env jest */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Calculator } from './Calculator';

afterEach(cleanup);

test('Should render component', () => {
  render(<Calculator />);
});

test('Should sum two numbers', () => {
  const { container } = render(<Calculator />);
  const n1 = container.querySelector('#n1') as HTMLElement;
  const n2 = container.querySelector('#n2') as HTMLElement;
  const sum = container.querySelector('#sum') as HTMLElement;
  const result = container.querySelector('#result') as HTMLElement;

  userEvent.type(n1, '10');
  userEvent.type(n2, '20');
  userEvent.click(sum);

  expect(result.textContent).toBe('30');
});

test('Should multiply two numbers', () => {
  const { container } = render(<Calculator />);
  const n1 = container.querySelector('#n1') as HTMLElement;
  const n2 = container.querySelector('#n2') as HTMLElement;
  const multiply = container.querySelector('#multiply') as HTMLElement;
  const result = container.querySelector('#result') as HTMLElement;

  userEvent.type(n1, '10');
  userEvent.type(n2, '20');
  userEvent.click(multiply);

  expect(result.textContent).toBe('200');
});
