// import React, { Fragment } from 'react'; // Importamos Fragment para retornar diversos elementos
import React from 'react';
import PropTypes from 'prop-types'; // Importamos las properties

// Hoy en día se trabaja con Functional Component, anteriormente la forma de trabajar era con Class Component
const PrimeraApp = ({saludo = 'Hola Mundo!!!', nuevaProp, subtitulo}) => {
    // Podemos aplicar desestructuración de las props con las {}
    // Si el componentes no llega a tener ese elemento en las props, podemos asignarle uno por defecto como saludo = "Hola Mundo!!!"

    // NO se pueden imprimir en HTML variables con valores booleanos, como por ejemplo, "valor = true"
    // const saludo = 'Hola mundo';
    const objeto = {
        nombre: 'Axel Félix',
        edad: 21
    }

    return (
        /* Para no importar el componente Fragment, se puede utilizar solo <></> */
        <>
            {/* La constante saludo ahora vienen de las props */}
            <h1>{ saludo }</h1>
            <h2>{ nuevaProp }</h2>
            {/* El método stringify es para convertir el objeto en un string */}
            <pre>{ JSON.stringify(objeto, null, 3) }</pre>
            <p>{ subtitulo }</p>
        </>
    );

};

// Para darle tipado a las properties usar el objeto propTypes de la librería que importamos
PrimeraApp.propTypes = {
    // Podemos especificar el tipado de las properties
    saludo: PropTypes.string,
    // Podemos especificar si es obligatoria la prop con isRequired
    nuevaProp: PropTypes.number.isRequired
}

// Para definir props por defecto puede ser arriba al definir el componente
// O también usar el objeto defaultProps
PrimeraApp.defaultProps = {
    // A la prop subtitulo le damos el valor por defecto de 'Mi primera aplicación'
    subtitulo: 'Mi primera aplicación'
}

export default PrimeraApp;