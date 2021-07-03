import React, { ReactElement, useState } from 'react';
import { sum } from '@myproject/sum';
import { multiply } from '@myproject/multiply';

import './Calculator.scss';

const Calculator = (): ReactElement => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className='calculator'>
      <header>
        <h2>Calculator</h2>
      </header>
      <div className='calculator__row'>
        <label htmlFor='n1'>Number 1 </label>
        <input
          id='n1'
          type='number'
          value={n1}
          onChange={event => setN1(Number(event.currentTarget.value))}
        />
      </div>
      <div className='calculator__row'>
        <label htmlFor='n2'>Number 2 </label>
        <input
          id='n2'
          type='number'
          value={n2}
          onChange={event => setN2(Number(event.currentTarget.value))}
        />
      </div>
      <div className='calculator__row'>
        <button onClick={() => setResult(sum(n1, n2))}>Sum</button>{' '}
        <button onClick={() => setResult(multiply(n1, n2))}>Multiply</button>
      </div>
      <div className='calculator__row'>
        Result: <b>{result}</b>
      </div>
    </div>
  );
};

export { Calculator };
