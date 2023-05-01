import React, { useState, useEffect, useCallback } from 'react';

function Filtrado() {
  // Definimos el estado para almacenar la lista completa de elementos
  const [elementos, ] = useState(['Manzana', 'Banana', 'Naranja', 'Pera', 'Uva']);
  
  // Definimos el estado para almacenar la lista filtrada de elementos
  const [elementosFiltrados, setElementosFiltrados] = useState([]);
  
  // Definimos el estado para almacenar el criterio de filtrado
  const [criterioFiltrado, setCriterioFiltrado] = useState('');
  
  // Usamos useCallback para asegurarnos de que la función actualizarElementosFiltrados no se vuelva a crear en cada renderizado del componente 
  const actualizarElementosFiltrados = useCallback(() => {
    // Filtramos los elementos que contengan el criterio de filtrado (ignorando mayúsculas y minúsculas)
    const filtrados = elementos.filter((elemento) =>
      elemento.toLowerCase().includes(criterioFiltrado.toLowerCase())
    );
    // Actualizamos la lista de elementos filtrados
    setElementosFiltrados(filtrados);
  }, [criterioFiltrado, elementos]);
  
  // Usamos useEffect para llamar a la función actualizarElementosFiltrados cada vez que se actualice el estado de criterioFiltrado o elementos
  useEffect(() => {
    actualizarElementosFiltrados();
  }, [actualizarElementosFiltrados]); // Agregamos actualizarElementosFiltrados como dependencia del useEffect
  
  return (
    <div>
      <h1>Filtrado</h1>
      <input
        type="text"
        value={criterioFiltrado}
        onChange={(event) => setCriterioFiltrado(event.target.value)}
      />
      <ul>
        {/* Iteramos sobre la lista de elementos filtrados y mostramos cada uno como un elemento de la lista */}
        {elementosFiltrados.map((elemento, i) => (
          <li key={i}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filtrado;
