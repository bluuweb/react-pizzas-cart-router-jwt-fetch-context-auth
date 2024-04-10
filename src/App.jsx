import Footer from "./components/Footer";
import LoginPage from "./components/Login";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        {/* <Home /> */}
        {/* <RegisterPage /> */}
        <LoginPage />
      </div>
      <Footer />
    </div>
  );
};
export default App;
