import React from "react";

const CartWidget = (props) => {

  const {children} = props

  return (
    <div id="bag">
      <span>0</span>
      <img src="/images/bag.png" className="carritobag" alt="Carrito" />
      {children}
    </div>
  );
};

export default CartWidget;

