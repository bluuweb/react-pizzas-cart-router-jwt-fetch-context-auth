import { useContext } from "react";
import { formatNumber } from "../helpers/formatNumber";

import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);

  const { token, logout } = useContext(UserContext);

  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      <div className="container justify-content-start">
        <span className="navbar-brand">Pizzería Mamma Mia!</span>
        <div className="">
          <Link
            to="/"
            className="btn btn-sm btn-outline-light me-2"
          >
            🍕 Home
          </Link>
          {token ? (
            <>
              <Link
                to="/profile"
                className="btn btn-sm btn-outline-light me-2"
              >
                🔓 Profile
              </Link>
              <button
                className="btn btn-sm btn-outline-danger me-2"
                onClick={logout}
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm btn-outline-light me-2"
              >
                🔐 Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm btn-outline-light me-2"
              >
                🔐 Register
              </Link>
            </>
          )}
        </div>
        <div className="ms-auto">
          <Link
            to="/cart"
            className="btn btn-sm btn-outline-info me-2 ms-auto"
          >
            🛒 Total: ${formatNumber(total)}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
