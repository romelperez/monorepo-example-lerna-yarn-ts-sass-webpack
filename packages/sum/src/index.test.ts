/* eslint-env jest */

import { sum } from './index';

test('Should sum two numbers', () => {
  const received = sum(3, 4);
  const expected = 7;
  expect(received).toBe(expected);
});
