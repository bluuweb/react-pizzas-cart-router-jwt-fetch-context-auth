# Hito 1: Introducción a React - Componentes y Props

- Crear un nuevo proyecto de React con Vite.js
- Incorporar Bootstrap a nuestro proyecto. (Opcional)
- Crear los siguientes componentes:
  - `Navbar`
  - `Footer`
  - `Home`
  - `Header`
  - `CardPizza`

## App.jsx

Este componente debe contener los componentes: `Navbar`, `Home` y `Footer`.

## Header.jsx

Este componente tiene que ser llamado al interior de `Home.jsx` y debe contener un título y una descripción.

Puedes basarte en el siguiente diseño:

![Header](https://i.imgur.com/1Q8Q6Zz.png)

La imagen del fondo la encontrarás en el apoyo hito 1.

## Navbar.jsx

Este componente debe contener un menú de navegación con las siguientes opciones (para esto puedes utilizar `button` de Bootstrap ya que no es necesario que tengan funcionalidad por ahora):

- 🍕 Home
- 🔓 Profile
- 🔒 Logout
- 🔐 Login
- 🔐 Register
- 🛒 Total: $

Puedes basarte en el siguiente diseño:

![Navbar](https://i.imgur.com/1Q8Q6Zz.png)

Es importante señalar que este componente debe ser llamado en `App.jsx`.

Además debes incorporar dos variables al interior de este componente:

```js
const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    ...
  );
};
export default Navbar;
```

### Token

El `token` es una variable booleana que nos indicará si el usuario está logueado o no, por ahora es solo una simulación.

Si el usuario está logueado, se mostrarán los botones de `🔓 Profile` y `🔒 Logout`, en caso contrario, se mostrarán los botones de `🔐 Login` y `🔐 Register`.

**Tip:** Recuerda que puedes utilizar el operador ternario para esto.

### Total

La variable `total` es un número que representa el total de la compra (por ahora un valor fijo), este debe ser mostrado en el botón de `🛒 Total: $`.

Además debe estar formateado con el separador de miles, ej: `25.000`.

**Tip:** Puedes utilizar la función `toLocaleString` para esto.
**Tip:** Puedes llevar esto a una función en la carpeta `utils` o `helpers` para reutilizarlo en otros componentes.

## CardPizza.jsx

Este componente debe contener la información de una pizza, como el nombre, precio, imagen, etc.

Para esta operación tendrás que llamar a tres componentes desde `Home.jsx` con los siguientes props:

```jsx
<CardPizza
  name="Napolitana"
  price={5950}
  ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
/>
<CardPizza
  name="Española"
  price={6950}
  ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
/>
<CardPizza
  name="Pepperoni"
  price={6950}
  ingredients={["mozzarella", "pepperoni", "orégano"]}
  img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
/>
```

Estos props deben ser recibidos en el componente `CardPizza` y mostrados en el diseño que se muestra a continuación:

![CardPizza](https://i.imgur.com/1Q8Q6Zz.png)

Los botones de `Ver más` y `Añadir` no tienen funcionalidad por ahora.

## Footer.jsx

Finalmente el componente `Footer` debe contener:

- © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados

Este componente debe ser llamado en `App.jsx`.

Puedes agregar la información que consideres necesaria.
