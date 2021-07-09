describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Deben ser iguales los string', () => {
        // 1. Inicialización
        const mensaje = 'Hola mundo';

        // 2. Estímulo
        const mensajeDos = `Hola mundo`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensajeDos); // Esto sería la comparación así: mensaje === mensajeDos
    });
});