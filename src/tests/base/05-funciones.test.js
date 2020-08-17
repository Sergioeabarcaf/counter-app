import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('pruebas en 05-funciones', () => {
  test('prueba getUser', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const userData = getUser();

    expect(userData).toEqual(userTest);
  });

  test('probar getUserActivo', () => {
    const nombre = 'sergio';
    const userActivoTest = {
      uid: 'ABC567',
      username: nombre
    }

    const userActivoData = getUsuarioActivo(nombre);

    expect(userActivoData).toEqual(userActivoTest);
  })
});