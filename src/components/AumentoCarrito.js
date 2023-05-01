import useCounter from "../hooks/useCounter";

const AumentoCarrito = () => {
  
  //const resultado = useCounter()
  //const restar = resultado.restar 
  //const sumar = resultado.sumar
  //const valor = resultado.valor

  const {sumar, restar, valor} = useCounter()

  return (
    <div className="aumento-carrito">
      <h5>Cantidad {valor}</h5>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </div>
  );
};

export default AumentoCarrito;
