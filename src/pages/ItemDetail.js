import React from 'react'
import AumentoCarrito from '../components/AumentoCarrito'

const ItemDetail = ({producto}) => {

  console.log(producto)

  const { title: nombre, price: precio, image, description: descripcion } = producto;

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
          <h4>{nombre}</h4>
          <p>{descripcion}</p>
          <h5>${precio}</h5>
          <AumentoCarrito/>
        </div>
      </div>
    </>
  )
}

export default ItemDetail


