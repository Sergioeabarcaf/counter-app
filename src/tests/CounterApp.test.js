import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';

describe('prueba sobre CounterApp', () => {
    test('debe mostrar el mensaje "CounterApp"', () => {
        const mensaje = 'CounterApp';
        const { getByText } = render( <CounterApp />);
        expect( getByText(mensaje) ).toBeInTheDocument();
    });
});