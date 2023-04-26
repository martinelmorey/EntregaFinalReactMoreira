import React from "react";
import useCounter from "../hooks/useCounter";

const CartWidget = (props) => {

  //traemos el hook useCounter
  //const resultado = useCounter()
  //console.log(resultado)
  const {restar, valor} = useCounter()

  const {children} = props

  return (
    <li>
      <p>{valor}</p>
      <button onClick={restar}>Restar</button>
      <img src="/images/bag.png" className="carritobag" alt="Carrito" />
      {children}
    </li>
  );
};

export default CartWidget;

