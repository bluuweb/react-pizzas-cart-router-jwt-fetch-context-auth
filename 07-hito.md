# Hito 7 - React router II

1. Implementa useParams para obtener el **id** de la pizza en la página de `Pizza.jsx`. Con el **id** obtenido, realiza una petición a la API para obtener la información de la pizza y mostrarla en la página. (2 puntos)

**Tips:** Puedes además implementar `Link` en el componente `CardPizza.jsx` para redirigir a la página de `Pizza.jsx` con el **id** de la pizza.

2. Crea un UserContext para almacenar el token (simulado) que estamos utilizando en el `Navbar.jsx`, Por ahora este context tiene que tener las siguientes características: (2 puntos)

   - Un estado que almacene el token, por defecto estará en true.
   - Un método `logout` que cambie el estado del token a false.

3. Utiliza el UserContext en el `Navbar.jsx`, al hacer click en el botón de logout, se debe ejecutar el método `logout`. (2 puntos)

**Tips:** Recuerda que cuando el token es true, debe mostrar los botones de: Profile, Logout. Cuando el token es false, debe mostrar los botones de: Login, Register. Home y Total siempre deben estar visibles.

4. Utiliza el UserContext en la página de `Cart.jsx`, deshabilita el botón "pagar" en caso de que el token sea false. (1 punto)

5. Implementa la ruta protegida para "/profile". Si el token es false, redirige a "/login". Además si el token es true, los usuarios no deberían poder acceder a la página de login y register (los puedes redirigir al home). (3 puntos)

**En el próximo Hito vamos a implementar la autenticación real con el backend utilizando JWT**
