import React from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../pages/ItemDetail';
import productos from '../productos.json';


const ItemDetailPage = () => {
  const { id } = useParams();

  const producto = productos.find((prod) => prod.id === parseInt(id));

  return(
    <div className='contenedor-producto-detail'>
      <ItemDetail producto={producto} /> 
    </div>
  ) 
};

export default ItemDetailPage;
