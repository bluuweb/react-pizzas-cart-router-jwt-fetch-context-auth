import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import PizzaPage from "./pages/Pizza";
import RegisterPage from "./pages/Register";

const App = () => {
  // const { token } = useContext(UserContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/pizzas">
            <Route
              path=":id"
              element={<PizzaPage />}
            />
          </Route>
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
