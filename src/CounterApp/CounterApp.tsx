import React from 'react';

interface PropsCounterApp {
  value: number
}

const CounterApp = (prop: PropsCounterApp) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{prop.value}</h2>
    </>
  )
}

export default CounterApp;