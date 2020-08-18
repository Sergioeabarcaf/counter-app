import { getHeroeByIdAsync } from '../../base/09-promesas'
import Heroes from '../../data/heroes'

describe('Pruebas sobre Promesas', () => {
    test('obtener héroe por id', (done) => {
        const id = 1;
        const respuestaCorrecta = Heroes.find( (heroe) => heroe.id === id );
        getHeroeByIdAsync(id)
            .then(data => {
                expect(data).toBe(respuestaCorrecta);
                done();
            })
    });
});