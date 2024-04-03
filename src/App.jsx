import Footer from "./components/Footer";
import LoginPage from "./components/Login";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import RegisterPage from "./components/Register";

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
