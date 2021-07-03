import React, { ReactElement } from 'react';
import { Calculator } from '@myproject/calculator';

import './App.scss';

const App = (): ReactElement => {
  return (
    <main className='app'>
      <img src='/logo.png' />
      <h1>MyProject Website</h1>
      <Calculator />
    </main>
  );
};

export { App };
