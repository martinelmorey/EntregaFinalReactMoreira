import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../pages/ItemList';
import { useState, useEffect } from 'react';
import productos from '../productos.json';




const ItemListContainer = () => {
  const [estado, setEstado] = useState([]);

  const parametros = useParams();


  useEffect(() => {
    //hacemos la simulacion del pedido
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 3000);
    });
    pedido
      .then((resultado) => {
        setEstado(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // Filter products by category
  const productosFiltrados = estado.filter(
    (categoria) => categoria.categoria === parametros.id
  );

  if(parametros.id){
    return (
      <div>
        <h2>Listado de productos por categoría: {parametros.id}</h2>
        <ItemList productos={productosFiltrados} />
      </div>
    );
  }else{
    return (
      <div>
        <h2>Listado de productos completo</h2>
        <ItemList productos={estado} />
      </div>
    );  
  }
};



export default ItemListContainer;
