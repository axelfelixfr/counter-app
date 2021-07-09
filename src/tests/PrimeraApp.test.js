import React from 'react';
// import { render } from '@testing-library/react'; // Comentamos el render ya que no ocupamos el testing-library
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';

// De esta forma podemos hacer las pruebas con la librería que viene por defecto con create-react-app
describe('Pruebas en <PrimeraApp />', () => {
    
    /* Comentamos esta prueba ya que no tenemos importado la librería de testing-library que contiene el método toBeInTheDocument, usado en la prueba
    test('Debe de tener la nuevaProp y ser de tipo number', () => {
        const nuevaProp = 123;
        const { getByText } = render(<PrimeraApp nuevaProp={nuevaProp} />);
        // Se recomienda no usar los métodos por defecto de la librería testing-library de react
        expect(getByText(nuevaProp)).toBeInTheDocument();
        // Verificamos que en PrimeraApp este la nuevaProp con toBeInTheDocument()
    })
    */

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const nuevaProp = 123;
        const wrapper = shallow(<PrimeraApp nuevaProp={nuevaProp} />);

        expect(wrapper).toMatchSnapshot();
        // Comparamos el componente PrimeraApp con el snapshot
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const nuevaProp = 123;
        const subTitulo = 'Mi primera aplicación';
        const wrapper = shallow(<PrimeraApp nuevaProp={nuevaProp} subtitulo={subTitulo} />);
        // Con el objeto wrapper podemos hacer un querySelector() como en JavaScript con el método find()
        const textoParrafo = wrapper.find('p').text();
        // Buscamos el parrafo y extraemos el texto que contiene

        expect(textoParrafo).toBe(subTitulo); // Con expect y toBe comparamos que el contenido del parrafo sea igual a subTitulo
        // Esperamos(textoParrafo).seaIgual(subTitulo)
    });
});