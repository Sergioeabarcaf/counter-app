import React from 'react';
// import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme'

describe('prueba sobre CounterApp', () => {
    // test('debe mostrar el mensaje "CounterApp"', () => {
    //     const mensaje = 'CounterApp';
    //     const { getByText } = render( <CounterApp />);
    //     expect( getByText(mensaje) ).toBeInTheDocument();
    // });

    test('debe de renderizar la CounterApp', () => {
        const wrapper = shallow( <CounterApp />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe validar el mensaje de CounterApp en H1', () => {
        const mensaje = 'CounterApp';
        const wrapper = shallow(<CounterApp />);

        const textoEnCounterApp = wrapper.find('h1').text();

        expect( textoEnCounterApp ).toBe(mensaje);  

    });

    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow( <CounterApp value={value}/> );

        const valueEnCounterApp = wrapper.find('h2').text();
        
        expect(valueEnCounterApp).toBe(value.toString());
    })
});