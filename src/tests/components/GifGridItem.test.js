
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Title';
    const url = 'https://localhost/img.jpg'
    let wrapper = shallow( <GifGridItem title = { title } url = { url }/>);

    test('Debe de mostrar <GifGridItem /> ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title ', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe de tener la clase card ', () => {
        const div =  wrapper.find('div');
        expect( div.prop('className') ).toBe( 'card' );
    })
    
    
    
    
})
