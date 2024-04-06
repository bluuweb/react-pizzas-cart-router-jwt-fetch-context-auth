# Hito 3 - Renderización dinámica de componentes

El objetivo de este hito es implementar la renderización dinámica de componentes en la aplicación web.

En el material de apoyo encontrás un archivo pizzas.js que contiene un array de objetos con información de pizzas. Utilizá este archivo para cargar la información de las pizzas en la aplicación según las siguientes instrucciones:

## Home.jsx

Vamos a trabajar con el componente `<Home />`, no elimines los componentes `<RegisterPage />` y `<LoginPage />` que creaste en el hito anterior, simplemente comenta su importación en el archivo `App.js`, ya que los vamos a utilizar en hitos futuros.

Ejemplo de `App.js`:

```js
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};
export default App;
```

En el componente `<Home />`:

- Importa `pizzas` del archivo `pizzas.js`.
- Recorre el array de pizzas y renderiza un componente `<CardPizza />` por cada pizza, pasándole las props necesarias.
- El resultado final deberían ser 6 tarjetas de pizza con la información correspondiente.

## CardPizza.jsx

Itera por la lista de ingredientes de cada pizza y renderiza un `<li>` por cada ingrediente. Puedes basarte en los pantallazos de referencia para ver cómo debería quedar.

## Cart.jsx

Vamos a simular un carrito de compras en la aplicación. Para esto crea un nuevo componente `<Cart />` que se renderice en `App.jsx`.

Deja comentado el componente `<Home />` por ahora en `App.jsx`.

En próximas secciones conoceremos cómo trabajar con rutas y hará sentido tener estos componentes, por ahora solo dejalos comentados para su evaluación.

Ejemplo de `App.js`:

```js
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
};
export default App;
```

En el componente `<Cart />`:

- Importa `pizzaCart` del archivo `pizzas.js`, este array de objetos simula el carrito de compras.
- Recorre el array de `pizzaCart` (puedes basarte en las capturas de referencia adjuntadas al final de las instrucciones), lo importante es que se muestre la información de cada pizza en el carrito, como imagen de la pizza, nombre, precio y cantidad.
- Agrega botones para aumentar y disminuir la cantidad de pizzas en el carrito. En caso de que la cantidad sea 0, la pizza debe eliminarse del carrito.
- Calcula el total de la compra y muéstralo en el carrito.
- Agrega un botón de pagar, este por ahora no hará nada, pero en hitos futuros lo utilizaremos para simular la compra.

**Tips:** Puedes utilizar el hook `useState` para manejar el array de pizzas en el carrito, ejemplo: `const [cart, setCart] = useState(pizzaCart);`

En el componente `Navbar` también tienes un botón de carrrito, este por ahora permanece estático, pero en hitos futuros lo utilizaremos para mostrar el carrito de compras.
