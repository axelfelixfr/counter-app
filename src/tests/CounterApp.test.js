import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { expect } from '@jest/globals';

describe('Pruebas en el componente <CounterApp />', () => {

    // Inicializamos el wrapper por defecto, para tener disponible el intellisense a la hora de escribir código
    let wrapper = shallow(<CounterApp />);

    // Se realiza el beforeEach ya que queremos volver a inicializar antes de cada test para no tener valores que se hicieron en pruebas anteriores
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> correctamente y sus valores por defecto', () => {
        // Esperamos el componente <CounterApp /> sea igual al snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        // Le pasamos el valor de 100 al componente para hacer la prueba
        const wrapper = shallow(<CounterApp value={100} />);

        // Encontramos el valor del value con el método find()
        const valueComponent = wrapper.find('h2').text();

        // console.log(valueComponent);
        // Esperamos que el value sea igual a 100 como lo pasamos al inicio
        expect(valueComponent).toBe('100');
    });

    test('Debe de incrementar con el boton +1', () => {
        // Buscamos el boton por indice con el metodo at(), el boton de suma es el primero, por lo tanto, tiene el indice 0
        wrapper.find('button').at(0).simulate('click');
        
        // Simulamos el evento con simulate();
        const valueComponent = wrapper.find('h2').text();
        // console.log(valueComponent);

        // Como el valor que tiene es 0, esperamos que al dar +1, el value sea igual a 1
        expect(valueComponent).toBe('1');
    });

    test('Debe de restar con el boton -1', () => {
        // Buscamos el boton por indice con el método at(), el boton de resta es el último, por lo tanto, tiene el indice 2
        wrapper.find('button').at(2).simulate('click');

        // Simulamos el evento con simulate();
        const valueComponent = wrapper.find('h2').text();

        // Como el valor que tiene es 0, esperamos que al dar -1, el value sea igual a -1
        expect(valueComponent).toBe('-1');
    });


    test('Debe de colocar el valor por defecto con el boton reset', () => {
        const wrapper = shallow(<CounterApp value={50} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valueComponent = wrapper.find('h2').text();
        
        expect(valueComponent).toBe('50');
    })
});
