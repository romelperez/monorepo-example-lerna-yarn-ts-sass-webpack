/* eslint-env jest */

import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Calculator } from './Calculator';

afterEach(cleanup);

test('Should render component', () => {
  render(
    <Calculator />
  );
});
