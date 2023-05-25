import { useContext, useState } from 'react';
import { FavContext } from '../providers/FavProvider';
import ItemQuantitySelector from './ItemQuantitySelector';
import { CartContext } from '../providers/CartProvider';

const FavItem = () => {
  const { favItems, removeItemFav } = useContext(FavContext);
  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(() => {
    const cuentaInicial = {};
    favItems.forEach(item => {
      cuentaInicial[item.id] = 1;
    });
    return cuentaInicial;
  });

  const handleClickBorrar = (id) => {
    removeItemFav(id); 
    setCantidad(prevCantidad => {
      const newCantidad = { ...prevCantidad };
      delete newCantidad[id];
      return newCantidad;
    });
  };

  const handleCantidadChange = (id, nuevaCantidad) => {
    setCantidad(prevCantidad => ({ ...prevCantidad, [id]: nuevaCantidad }));
  };

  const handleClick = (id) => {
    const producto = favItems.find(item => item.id === id);
    const productoConCantidad = { ...producto, quantity: cantidad[id] || 1  };
    addToCart(productoConCantidad);
  };
  
  return (
    <div id="cartitem">
      {favItems.map((item) => (
        <div key={item.id} className="producto-list">
          <img src={`${item.image}`} className="img-producto" alt=""/>
          <h2>{item.title}</h2>
          <h2>Precio unitario: ${item.price}</h2>
          <div>
            <ItemQuantitySelector cantidad={cantidad[item.id]} setCantidad={(newCantidad) => handleCantidadChange(item.id, newCantidad)} />
            <button onClick={() => handleClick(item.id)}>Agregar al carrito</button>
            <button onClick={() => handleClickBorrar(item.id)}>Borrar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavItem;
