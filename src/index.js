import React from 'react'; // Importamos la librería de react para hacer uso de jsx
import ReactDOM from 'react-dom'; // Importamos la librería react-dom para acceder al DOM
// import PrimeraApp from './PrimeraApp'; // Importamos el FC
import CounterApp from './CounterApp';
import './index.css'; // Importamos el CSS
// const saludo = <h1>Hola mundo</h1>;

// Seleccionamos el div con id root que tiene la aplicación
const divRoot = document.querySelector('#root');

// Con el objeto ReactDOM podemos renderizar los jsx
// ReactDOM.render(<PrimeraApp saludo='Hola, soy parte de las props' nuevaProp={123}/>, divRoot);
// Sus argumentos son: (los_elementos_a_rederizar, el_div_de_la_aplicacion)
// La prop "nuevaProp" dara error ya que en el componente especificamos que sea un string y mandamos un número



ReactDOM.render(<CounterApp value={0} />, divRoot);