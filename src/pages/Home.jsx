import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  // API http://localhost:5000/api/pizzas
  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <main className="container my-5 pb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              id={pizza.id}
            />
          ))}
        </div>
      </main>
    </>
  );
};
export default Home;
