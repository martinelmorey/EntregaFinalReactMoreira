import { createContext, useState } from 'react';

export const CartContext = createContext();
export const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const id = product.id;
  
    if (isItemInCart(id)) {
      updateQuantity(id, product.quantity);
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
  };

  const isItemInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (subtotal, item) => subtotal + item.price * item.quantity,0
    );
  };

  return (
    <Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        updateQuantity,
        emptyCart,
        getTotalItems,
        getSubtotal,
        isItemInCart
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
