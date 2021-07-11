import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import { useFecthGifs } from '../../hooks/useFecthGifs';
jest.mock('../../hooks/useFecthGifs')


describe('Pruebas en <GifGrid />', () => {

    const category = 'Goku'

    test('Debe de mostrarse correctamente ', () => {

        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });

        let wrapper = shallow(<GifGrid category = { category }/>);

        expect( wrapper).toMatchSnapshot();
    });

    test('Deben de mostrar items cuando se cargen Imagenes useFecthGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/123',
                title: 'title'
            },
            {
                id: 'DEF',
                url: 'https://localhost/123',
                title: 'title'
            }
        ]

        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        let wrapper = shallow(<GifGrid category = { category }/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
        
    })
    
})
