import { createContext, useState } from "react";

// Creación del context
export const CartContext = createContext();

// Provider con la fuente de datos
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        addToCart,
        increment,
        decrement,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
