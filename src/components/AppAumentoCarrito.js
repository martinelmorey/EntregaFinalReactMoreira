import useCounter from "../hooks/useCounter";

const AppAumentoCarrito = () => {
  
  //const resultado = useCounter()
  //const restar = resultado.restar 
  //const sumar = resultado.sumar
  //const valor = resultado.valor

  const {sumar, restar, valor} = useCounter()

  return (
    <>
      {valor}
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </>
  );
};

export default AppAumentoCarrito;
