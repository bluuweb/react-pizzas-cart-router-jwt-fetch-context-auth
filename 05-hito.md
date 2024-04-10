# Hito 5 - React Router

El objetivo de este hito es implementar el enrutamiento en la aplicación web.

1. Realiza las instalaciones necesarias para trabajar con React Router y su respectiva configuración en el proyecto. (2 punto)

2. Traslada los componentes `Home`, `Register`, `Login`, `Cart` y `Pizza` a la carpeta `pages`. (1 punto)

3. Crea las rutas necesarias para los componentes: (2 puntos)

   - La ruta `/` debe mostrar el componente `Home`.
   - La ruta `/register` debe mostrar el componente `Register`.
   - La ruta `/login` debe mostrar el componente `Login`.
   - La ruta `/cart` debe mostrar el componente `Cart`.
   - La ruta `/pizza/p001` debe mostrar el componente `Pizza`.
   - La ruta `/profile` debe mostrar un componente `Profile`.
   - La ruta `/404` debe mostrar un componente `NotFound`.

4. Implementa un componente `NotFound` que se muestre cuando una ruta no exista. Utiliza tu creatividad para esta página, pero debe contener un enlace que redirija a la ruta `/`. (2 punto)

5. Implementa un componente `Profile` que muestre un email de un usuario y un botón para cerrar sesión. (1 punto)

Por ahora tanto el botón de cerrar sesión como el email del usuario pueden ser estáticos, en los siguientes hitos se trabajará en la implementación de la autenticación.

6. Crea un componente `Navbar` que contenga un menú de navegación con enlaces a las rutas anteriores (utilizando `Link`), Además el botón **"🛒 Total: $xxx"** debe redirigir a la ruta `/cart`. (2 puntos)

Nota: La ruta `/pizza/p001` no tienes que configurarla en el `Navbar`.
