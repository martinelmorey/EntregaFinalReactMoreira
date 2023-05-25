import { useState } from "react";

const CheckoutForm = ({ onCheckoutData }) => {
    const [formData, setFormData] = useState({
      nombre: '',
      telefono: '',
      email: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      onCheckoutData(formData); // actualiza los datos en el componente padre cada vez que cambian
    };
  
    return (
      <>
        <h1>Formulario de Checkout</h1>
        <p>Completa el fomulario para realizar la compra.</p>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>
        </form>
      </>
    );
  };
  
  export default CheckoutForm;
  