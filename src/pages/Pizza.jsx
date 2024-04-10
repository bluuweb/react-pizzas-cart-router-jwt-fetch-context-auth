import { useEffect, useState } from "react";
import { formatNumber } from "../helpers/formatNumber";

const Pizza = () => {
  // http://localhost:5000/api/pizzas/p001
  const [pizza, setPizza] = useState({});

  const getPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    console.log(data);
    setPizza(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <main
      className="container mt-5"
      style={{}}
    >
      <article className="card mb-3">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img
              src={pizza.img}
              className="img-fluid rounded-start"
              alt={pizza.name}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-capitalize">{pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>
              <ul>
                {pizza.ingredients?.map((ingredient, i) => (
                  <li key={i}>&#127829; {ingredient}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-around align-items-center pt-2">
                <h4 className="m-0">Precio: ${formatNumber(pizza.price)}</h4>
                <button
                  className="btn btn-dark"
                  // onClick={() => addToCart(pizza)}
                >
                  Añadir &#128722;
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
export default Pizza;
