import { useContext , useState} from 'react';
import { CartContext } from '../providers/CartProvider';
import ItemQuantitySelector from './ItemQuantitySelector';


const CartItem = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);


  const [cantidad, setCantidad] = useState(() => {
    const cuentaInicial = {};
    cartItems.forEach(item => {
      cuentaInicial[item.id] = 1;
    });
    return cuentaInicial;
  });

  const handleClickBorrar = (id) => {
    removeItem(id); 
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
    const producto = cartItems.find(item => item.id === id);
    const productoConCantidad = { ...producto, quantity: cantidad[id] || 1  };
    addToCart(productoConCantidad);
  };

  return (
    <div id="cartitem">
      {cartItems.map((item) => (
        <div key={item.id} className="producto-list">
          <img src={`${item.image}`} className="img-producto" alt=""/>
          <h2>{item.title}</h2>
          <div className='cantidadprecio'>
            <p><strong>Cantidad:</strong> {item.quantity}</p>
            <p><strong>Precio unitario:</strong> ${item.price}</p>
          </div>
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

export default CartItem