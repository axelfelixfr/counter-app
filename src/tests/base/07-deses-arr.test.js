import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuración', () => {
    test('Debe de retornar un string y un número', () => {
        // Una forma de hacerlo sería la siguiente:
        // const arr = retornaArreglo(); // ['ABC', 123]
        // expect(arr).toEqual(['ABC', 123]); // Para los arreglos igual podemos usar toEqual

        // O se puede desestructurar el arreglo:
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC'); // Comprobamos que la primera parte del arreglo sea igual a 'ABC'
        expect(typeof letras).toBe('string'); // Comprobamos que sea un string

        expect(numeros).toBe(123); // Comprobamos que la segunda parte del arreglo sea igual a 123
        expect(typeof numeros).toBe('number'); // Comprobamos que sea un number
    })
    
});