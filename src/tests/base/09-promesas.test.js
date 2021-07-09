import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    // En el callback podemos pasarle el argumente done, sirve para especificar donde debe terminar la prueba
    test('getHeroeByIdAsync debe de retornar un heroe async', (done) => {
       const id = 1;
       getHeroeByIdAsync(id).then(heroe => {
           // Importamos la data de heroes y llamamos el que esta en la posicion 0 ya que tiene el id 1
           /* heroes[0] = {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
            } */
           expect(heroe).toBe(heroes[0]); // Es recomendable poner el done() justo debajo (después) del expect para específicar donde termina la prueba
           done();
       });
    });

    test('Debe de obtener un error si el heroe por id no existe', (done) => {
       const id = 10;
       getHeroeByIdAsync(id).catch(error => {
           expect(error).toBe('No se pudo encontrar el héroe');
           done();
       }) 
    });
    
    
});