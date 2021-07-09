import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si el heroe no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined); // undefined es un primitivo de JavaScript así que se puede usar toBe
    });


    test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);

        // console.log(heroesData);
        expect(heroes).toEqual(heroesData);
    });

    test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        // console.log(heroesData);
        expect(heroes.length).toBe(2);
    });

});