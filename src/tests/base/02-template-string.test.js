import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {

    test('Prueba en el método getSaludo, retornar Hola Axel!', () => {
        const nombre = 'Axel';
        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });

    // getSaludo debe de retornar Hola Carlos! si no existe el argumento "nombre"
    test('Prueba en el método getSaludo sin argumentos, retornar Hola Carlos!', () => {

        const saludo = getSaludo();
        console.log(saludo);

        expect(saludo).toBe('Hola Carlos!');
    });
    
});