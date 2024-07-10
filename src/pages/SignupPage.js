import React from "react";
import SignupForm from "../components/SignupForm";
import Navbar from "../components/Navbar";
export default function SignupPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5 mb-1">Signup</h1>
        <SignupForm />
      </div>
    </div>
  );
}
