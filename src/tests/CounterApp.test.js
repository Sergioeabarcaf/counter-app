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

    const value = 100;
    let wrapper = shallow( <CounterApp value={value}/> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp value={value}/> );
    });

    test('debe de renderizar la CounterApp', () => {
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe validar el mensaje de CounterApp en H1', () => {
        const mensaje = 'CounterApp';
        const textoEnCounterApp = wrapper.find('h1').text();

        expect( textoEnCounterApp ).toBe(mensaje);  

    });

    test('debe mostrar el valor por defecto de 100', () => {
        const valueEnCounterApp = wrapper.find('h2').text();
        
        expect(valueEnCounterApp).toBe(value.toString());
    });

    test('debe incrementar el value con el botón +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');
        const valueEnCounterApp = wrapper.find('h2').text();

        expect( valueEnCounterApp ).toBe((value + 1).toString());

    });

    test('debe decrecer el value con el botón -1', () => {

        const btn1 = wrapper.find('button').at(2).simulate('click');
        const valueEnCounterApp = wrapper.find('h2').text();

        expect( valueEnCounterApp ).toBe((value - 1).toString());

    });

    test('debe resetear el value con el botón reset', () => {

        const btn1 = wrapper.find('button').at(1).simulate('click');
        const valueEnCounterApp = wrapper.find('h2').text();

        expect( valueEnCounterApp ).toBe(value.toString());

    });
});