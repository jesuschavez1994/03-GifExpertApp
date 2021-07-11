import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    
    let  wrapper = shallow( <AddCategory setCategories = { setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategories }/>);
    })

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de Texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: {value} });
    });

    test('No debe de posterar la información con submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el  setCategories y limpiar la caja de textos', () => {
        const value = 'Hola mundo';
        //1.- Simular el handleInputChange
        wrapper.find('input').simulate('change', { target: {value} });
        //2.- Simular el Submit
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        //3.- setCategories Debe haberse llamado
        expect( setCategories ).toHaveBeenCalled();
        //4.- El valor del input debe estar vacio
         // 4. el valor del input debe de estar ''
         expect( wrapper.find('input').prop('value') ).toBe('');
    });

})
