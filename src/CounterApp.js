import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0 }) => {
    // Por lo regular se usa la desestructuración para hacer usar de useState
    // const [nombre, setNombre] = useState('Axel'); // useState retorna un arreglo [] con dos argumentos
    // Se extrae su nombre y la función [nombre, setNombre]
    // console.log(nombre, setNombre);

    const [counter, setCounter] = useState(value);

    // La función le pasa el evento onClick como argumento
    const handleAdd = () => {
        setCounter(counter+1);
        // setCounter((c)=> c+1); // Otra forma de hacerlo es mediante una función que recibe el valor del counter y devuelve su valor + 1

        /* NO se puede hacer lo siguiente:
        setCounter(counter++); Ya que se esta haciendo esto: counter = counter + 1;
        Pero no se puede reasignar el valor de una constante
        */
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleMinus = () => {
        setCounter(counter-1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            {/* Es importante que no se haga una función de evento onClick como "handleAdd()" 
                ya que se ejecutara una vez se renderice el componente y no queremos eso */}
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleMinus }>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;