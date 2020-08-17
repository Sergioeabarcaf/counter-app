import React from 'react';
import './App.css';

const App = ({ saludo = '', nombre = 'sergio'}) => {
  return (
    <>
      <h1>{ saludo }</h1>
      <p>{ nombre }</p>
    </>
  );
}

export default App;
