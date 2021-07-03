import React, { ReactElement } from 'react';
import { render } from 'react-dom';
import { sum, multiply } from '@myproject/calculator';

import './index.scss';

const App = (): ReactElement => {
  return (
    <main className='app'>
      <img src='/logo.png' />
      <h1>MyProject Website</h1>
      <p>Calculator Sum 1 + 2 = {sum(1, 2)}.</p>
      <p>Calculator Multiply 4 + 7 = {multiply(4, 7)}.</p>
    </main>
  );
};

render(<App />, document.querySelector('#root'));
