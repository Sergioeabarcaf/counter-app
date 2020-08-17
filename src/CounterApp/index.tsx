import React, { useState } from 'react';

interface PropsCounterApp {
  value: number
}

const CounterApp = (prop: PropsCounterApp) => {

  const [ counter, setCounter ] = useState( prop.value );

  const handledAdd = () => setCounter( counter + 1);
  const handledReset = () => setCounter( prop.value );
  const handledSubstract = () => setCounter( counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={ handledAdd }>+1</button>
      <button onClick={ handledReset }>Reset</button>
      <button onClick={ handledSubstract }>-1</button>
    </>
  )
}

export default CounterApp;