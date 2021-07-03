/* eslint-env jest */

import { multiply } from './index';

test('Should multiply two numbers', () => {
  const received = multiply(3, 4);
  const expected = 12;
  expect(received).toBe(expected);
});
