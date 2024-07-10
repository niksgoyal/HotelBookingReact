import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 mb-1">Login</h1>
      <LoginForm />
    </div>
  );
}
