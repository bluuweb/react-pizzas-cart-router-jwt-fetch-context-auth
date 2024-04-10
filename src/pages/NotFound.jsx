import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-5">
      <h1>🌵 404 🦖</h1>
      <h2>Página no encontrada</h2>
      <p className="lead mb-5">
        La página que buscas no existe o fue eliminada.
      </p>
      <Link
        className="btn btn-dark btn-lg"
        to="/"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
