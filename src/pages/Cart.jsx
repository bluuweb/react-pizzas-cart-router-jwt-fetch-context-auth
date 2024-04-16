import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatNumber } from "../helpers/formatNumber";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Cart = () => {
  const { carrito, increment, decrement, total } = useContext(CartContext);

  const { token } = useContext(UserContext);

  const processPayment = async () => {
    const response = await fetch(`${API_BASE_URL}/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: carrito,
      }),
    });

    const data = await response.json();
    alert(JSON.stringify(data));
  };

  return (
    <main className="container">
      <div className="p-5">
        <h5>Detalles del pedido:</h5>
        <div>
          {carrito.map((producto, i) => (
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
            disabled={!carrito.length || !token}
            onClick={processPayment}
          >
            {!token ? "Inicia sesión para continuar" : "Pagar"}
          </button>
        </div>
      </div>
    </main>
  );
};
export default Cart;
