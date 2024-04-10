import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        <Cart />
      </div>
      <Footer />
    </div>
  );
};
export default App;
