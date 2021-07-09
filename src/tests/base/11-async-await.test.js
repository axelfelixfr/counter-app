import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y fetch', () => {
    test('Debe de retornar el url de la imagen', async() => {
        const url = await getImagen();
        // console.log(url)
        // Comprobamos que la url contenga el 'https://' ya que significa que la respuesta de la petición se obtuvo correctamente
        // Ya que si no fue así, devolvera el string 'No existe', por lo tanto no pasara la prueba
        expect(url.includes('https://')).toBe(true);
    })
    
});