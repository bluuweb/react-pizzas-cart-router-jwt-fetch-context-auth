# Hito 2 - Estado y Eventos en React

## Correciones:

Página 28 guía 2 - Paso 10: Se puede mejorar la validación de los datos en el formulario de contacto utilizando el método `trim()`. Este método elimina los espacios en blanco al principio y al final de una cadena de texto. Si el campo está vacío, `trim()` devolverá `false`.

Esto es mucho mejor que simplemente comprobar si el campo está vacío, ya que si el usuario introduce espacios en blanco, el campo no se considerará vacío.

Utilizamos la negación `!` para comprobar si el campo está vacío o si solo contiene espacios en blanco.

```js
const validarDatos = (e) => {
  e.preventDefault();

  //Validación
  if (!nombre.trim() || !apellido.trim() || !edad.trim() || !email.trim()) {
    alert("Todos los campos son obligatorios");
    return;
  }
};
```

Si lo implementan también hay que cambiar el código de las páginas 29 y 31.

## Hito 2

El objetivo de este hito es aprender a manejar el estado y los eventos en React. Para ello, deberán crear los formularios de registro y login de nuestra aplicación.

### Formulario de Registro

Crea un componente `Register` que contenga un formulario con los siguientes campos:

- Email
- Contraseña
- Confirmar contraseña

El formulario debe tener un botón de enviar que, al hacer click, muestre un mensaje de éxito si los datos son correctos o un mensaje de error si los datos son incorrectos.

Aplica las siguientes validaciones mínimas:

- Todos los campos son obligatorios (no pueden estar vacíos).
- La password debe tener al menos 6 caracteres.
- La password y la confirmación de la password deben ser iguales.

**Tips:** Puedes dejar comentado el componente `Home` en `App.js` para que solo se muestre el formulario de registro. ej:

```jsx
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <Footer />
    </div>
  );
};
export default App;
```

### Formulario de Login

Crea un componente `Login` que contenga un formulario con los siguientes campos:

- Email
- Contraseña

El formulario debe tener un botón de enviar que, al hacer click, muestre un mensaje de éxito si los datos son correctos o un mensaje de error si los datos son incorrectos.

Aplica las siguientes validaciones mínimas:

- Todos los campos son obligatorios (no pueden estar vacíos).
- La password debe tener al menos 6 caracteres.

**Tips:** Puedes dejar comentado el componente `Home` y `RegisterPage` en `App.js` para que solo se muestre el formulario de login. ej:

```jsx
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
};
export default App;
```

## Capturas

Te dejamos el diseño final de la aplicación para que puedas comparar con tu resultado final:

![Capturas](https://i.imgur.com/1Q8Q6Zz.png)

## Rúbrica

- Componente `Register` con los campos email, password y confirmar password. (6 puntos)
  - Agrega los campos obligatorios utilizando useState. (3 puntos)
  - Valida que todos los campos sean obligatorios. (1 punto)
  - Valida que la contraseña tenga al menos 6 caracteres. (1 punto)
  - Valida que la contraseña y la confirmación de la contraseña sean iguales. (1 punto)
- Componente `Login` con los campos email y password. (4 puntos)
  - Agrega los campos obligatorios utilizando useState. (2 puntos)
  - Valida que todos los campos sean obligatorios. (1 punto)
  - Valida que la contraseña tenga al menos 6 caracteres. (1 punto)
