import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas en zGifExpertApp />', () => {

    let wrapper = shallow(<GifExpertApp />);

    test('debe de mostrar correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar una lista de elementos ', () => {

        const categories = ['One punch', 'Naruto'];
        let wrapper = shallow(<GifExpertApp  deafultCategories = { categories }/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
       
    })
    
    
})
