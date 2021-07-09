import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        /* NO se debe usar toBe al comparar objetos ({} === {}) ya que también se 
           compara el espacio en memoria y eso automáticamente da un error, se debe usar toEqual */
        
        expect(user).toEqual(userTest);

    });

    test('getUsuarioActivo debe de retornar un objeto a través de un argumento', () => {

        const nombreTest = 'Axel';
        const user = getUsuarioActivo(nombreTest);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombreTest
        });
    });
    
});