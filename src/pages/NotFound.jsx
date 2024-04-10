import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound text-center">
      <h1 className="text-white py-5">Página no encontrada</h1>
      <Link
        className="volver-inicio"
        to="/"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
