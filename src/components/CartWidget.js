import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../providers/CartProvider";

const CartWidget = (props) => {
  const { getTotalItems } = useContext(CartContext);
  const [bagUpdated, setBagUpdated] = useState(false);

  useEffect(() => {
    setBagUpdated(true);
    const timeout = setTimeout(() => {
      setBagUpdated(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [getTotalItems]);

  return (
    <div id="bag" className={bagUpdated ? "updated" : ""}>
      <span>{getTotalItems()}</span>
      <img src="/images/bag.png" className="carritobag" alt="Carrito" />
      {props.children}
    </div>
  );
};

export default CartWidget;
