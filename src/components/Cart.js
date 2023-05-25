import CartList from './CartList';
import { serverTimestamp } from 'firebase/firestore';
import { crearVenta } from '../utils';
import { useContext, useState } from 'react';
import { CartContext } from '../providers/CartProvider';
import CheckoutForm from './CheckoutForm';
import swal from 'sweetalert';


const Cart = () => {
  const { cartItems, emptyCart, getSubtotal } = useContext(CartContext); 
  const [checkoutData, setCheckoutData] = useState(null);

  const handleCheckoutData = (data) => {
    setCheckoutData(data);
  };

  const handleClickFinalizar = ({history}) => {
    if (!checkoutData) {
      swal({
        title: "Por favor",
        text: "Completa el formulario de checkout antes de finalizar la compra.",
        icon: "warning",
        button: "Aceptar"
      });      
      return;
    }

    // Agregar validaciones

    const productos = cartItems.map(item => ({
      titulo: item.title,
      precio: item.price,
      cantidad: item.quantity
    }));

    const venta = {
      productos: productos,
      user: {
        nombre: checkoutData.nombre,
        telefono: checkoutData.telefono,
        email: checkoutData.email
      },
      total: getSubtotal(),
      fecha: serverTimestamp()
    };

    crearVenta(venta)
      .then((id) => {
        console.log("El id de la venta es:", id);
      });

    setCheckoutData(null);

    swal("¡Gracias!", "su compra ya quedo ingresada.", "success");

    emptyCart();

  };

  const handleClickVaciar = () => {
    emptyCart();
  };


  if (cartItems.length === 0) {
    return (
      <div id="cart">
        <div className='emptycart'>
          <img src="/images/empty_shopping_cart.png"  alt="Carrito Vacio" />
          <h1>El carrito esta vacío</h1>
        </div>
      </div>
    );
  }

  return (
    <div id="cart">
      <h1>Hola, bienvenido a tu CARRITO</h1>
      
      <CheckoutForm onCheckoutData={handleCheckoutData} />
      
      <CartList/>
      <div className="totalcart">
        <h2>Total: ${getSubtotal()}</h2>
        <button onClick={handleClickVaciar}>Vaciar carrito</button>
        <button onClick={handleClickFinalizar}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
