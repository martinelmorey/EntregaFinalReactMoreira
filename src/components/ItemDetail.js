import React, { useState, useContext } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import { CartContext } from '../providers/CartProvider';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const { title: nombre, price: precio, image, description: descripcion, categoria: cat} = producto;
  
  const handleCantidadChange = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
  };

  const handleClick = () => {
    const productoConCantidad = { ...producto, quantity: cantidad };
    addToCart(productoConCantidad);
  };

  return (
    <>
      <div className='contenedor-breadcrumb'>
        <h1>Detalle del producto</h1>
      </div>
      <div className="detalle-producto">
        <div className='left-side'>
          <img src={`${image}`} alt=""/>
        </div>
        <div className='right-side'>
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <p><strong>Categoria: </strong>{cat}</p>
          <p><strong>Precio unitario: </strong></p>
          <h2>${precio}</h2>
          <div className='contenedoragregar'>
            <ItemQuantitySelector cantidad={cantidad} setCantidad={handleCantidadChange} />
            <button onClick={handleClick}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
