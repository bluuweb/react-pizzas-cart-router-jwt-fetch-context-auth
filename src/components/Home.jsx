import CardPizza from "./CardPizza";
import Header from "./Header";

import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container my-5">
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
