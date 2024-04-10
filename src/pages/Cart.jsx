import { useState } from "react";
import { formatNumber } from "../helpers/formatNumber";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increment = (i) => {
    const newCart = [...cart];
    newCart[i].count++;
    setCart(newCart);
  };

  const decrement = (i) => {
    const newCart = [...cart];
    newCart[i].count--;
    if (newCart[i].count === 0) {
      newCart.splice(i, 1);
    }
    setCart(newCart);
  };

  const total = cart.reduce((acc, el) => acc + el.price * el.count, 0);

  return (
    <main className="container">
      <div className="p-5">
        <h5>Detalles del pedido:</h5>
        <div>
          {cart.map((producto, i) => (
            <div
              key={i}
              className="d-flex justify-content-between py-2"
            >
              <div className="d-flex justify-content-between align-items-center">
                <img
                  src={producto.img}
                  width="50"
                  alt=""
                />
                <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
              </div>

              <div className="d-flex justify-content-end align-items-center">
                <h6 className="mb-0 pe-3">
                  ${formatNumber(producto.price * producto.count)}
                </h6>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => decrement(i)}
                >
                  -
                </button>
                <b className="px-3">{producto.count}</b>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => increment(i)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2 className="my-4">Total: ${formatNumber(total)}</h2>
          <button
            className="btn btn-dark"
            disabled={!cart.length}
            // onClick={processPayment}
          >
            {/* {!token ? "Inicia sesión para continuar" : "Pagar"} */}
            Pagar
          </button>
        </div>
      </div>
    </main>
  );
};
export default Cart;
