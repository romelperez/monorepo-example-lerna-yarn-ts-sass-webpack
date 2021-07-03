/* eslint-env jest */

import { sum } from './index';

test('Should sum two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
