import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  saludo: string
  nombre: string
}

const App = (props: Props) => {
  return (
    <>
      <h1>{ props.saludo }</h1>
      <h2>{ props.nombre }</h2>
      <p>Esto es una salida</p>
    </>
  );
}

export default App;
