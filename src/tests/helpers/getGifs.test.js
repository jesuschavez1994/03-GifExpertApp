import { getGifs } from '../../helpers/getGifs';
import '@testing-library/jest-dom';

describe('Pruebas con getGifs Fecth', () => {

    test('Debe de traer 10 elementos ', async() => {
        const gifs = await getGifs('Goku');
        expect( gifs.length ).toBe( 10 );
    });

    test('Debe de traer 0 elementos ', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    });
    
    
})
