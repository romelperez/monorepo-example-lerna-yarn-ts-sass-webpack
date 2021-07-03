/* eslint-env jest */

import { multiply } from './index';

test('Should multiply two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});
