import { getHeroeById } from "../../base/08-imp-exp";
import Heroes from '../../data/heroes'


describe('Pruebas en funciones de Héroes', () => {
    test('retornar héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeReal = Heroes.find( (heroe) => heroe.id === id );

        expect(heroe).toBe(heroeReal);
    });
});