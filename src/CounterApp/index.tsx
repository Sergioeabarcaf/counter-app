import React from 'react';

interface PropsCounterApp {
  value: number
}

const CounterApp = (prop: PropsCounterApp) => {

  const handledAdd = (e: React.MouseEvent) => {
    console.log(e);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{prop.value}</h2>
      <button onClick={ handledAdd }>+1</button>
    </>
  )
}

export default CounterApp;