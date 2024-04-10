import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    if (password.length < 5) {
      alert("Password must be at least 5 characters!");
      return;
    }

    alert("Authentication successful!");
  };

  return (
    <main className="container my-5">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!email || !password}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
