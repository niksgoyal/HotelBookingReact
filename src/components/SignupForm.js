import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    await store.signup();
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="form-container">
            <form className="my-4" onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  value={store.signupForm.email}
                  name="email"
                  onChange={store.updateSignupForm}
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
                  value={store.signupForm.password}
                  name="password"
                  autoComplete="off"
                  onChange={store.updateSignupForm}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
