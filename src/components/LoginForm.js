import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/notespage");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="form-container">
            <form className="my-4" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  value={store.loginForm.email}
                  name="email"
                  onChange={store.updateLoginForm}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={store.loginForm.password}
                  name="password"
                  autoComplete="off"
                  onChange={store.updateLoginForm}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <p className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link className="active" aria-current="page" to="/signup">
                  Signup
                </Link>
                <span> Here</span>
              </p>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
