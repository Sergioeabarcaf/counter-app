import { getSaludo } from '../../base/02-template-string'

describe('prueba sobre template-string', () => {
    test('prueba en metodo getSaludo', () => {
        const nombre = 'sergio';
        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre);
    });

});