import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'
import { useFecthGifs } from '../../hooks/useFecthGifs';

describe('Pruebas en el hook useFecthGifs.test', () => {

    test('debe de retornar el estado inicial ', async() => {

      const { result, waitForNextUpdate } =   renderHook( () => useFecthGifs('Goku') );
      const { data, loading } = result.current;
      await waitForNextUpdate();
      expect( data ).toEqual([]);
      expect( loading ).toBe( true );
        
    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {

        const { result, waitForNextUpdate } =   renderHook( () => useFecthGifs('Goku') );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );

    })
    


    
})
