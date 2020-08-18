import { getImagen } from '../../base/11-async-await'

describe('pruebas sobre async', () => {
    test('probando la url', async() => {
        const resp = await getImagen();
        expect(resp.includes('https://')).toBe(true);
    });
    
});
