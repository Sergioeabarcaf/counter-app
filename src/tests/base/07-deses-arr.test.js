import { retornaArreglo } from '../../base/07-deses-arr';

describe('pruebas en destructuración Arrays', () => {
    test(' debe retornar un string y un numero', () => {
        const [ letras, numeros ] = retornaArreglo();
        expect(letras).toEqual('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
    });
});