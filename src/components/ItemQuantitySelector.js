const ItemQuantitySelector = ({ cantidad, setCantidad }) => {
  return (
    <div className="aumento-carrito">
      <h5>Cantidad {cantidad}</h5>
      <button onClick={() => setCantidad(cantidad + 1)}>+</button>
      <button onClick={() => setCantidad(cantidad - 1 < 1 ? 1 : cantidad - 1)}>-</button>
    </div>
  );
};

export default ItemQuantitySelector;
