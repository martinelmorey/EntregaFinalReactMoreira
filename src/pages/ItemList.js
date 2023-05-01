import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    
  return (
    <div className='Lista-de-productos' >
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList
