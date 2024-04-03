import { formatNumber } from "../helpers/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid justify-content-start">
        <span className="navbar-brand">Pizzería Mamma Mia!</span>
        <div>
          <button className="btn btn-sm btn-outline-light me-2">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-sm btn-outline-light me-2">
                🔓 Profile
              </button>
              <button className="btn btn-sm btn-outline-danger me-2">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-sm btn-outline-light me-2">
                🔐 Login
              </button>
              <button className="btn btn-sm btn-outline-light me-2">
                🔐 Register
              </button>
            </>
          )}
        </div>
        <div className="ms-auto">
          <button className="btn btn-sm btn-outline-info me-2 ms-auto">
            🛒 Total: ${formatNumber(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
