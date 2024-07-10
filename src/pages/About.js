import React from "react";
import "../components/About.css"; // Import custom CSS for additional styling
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <header className="hero-section text-center text-white">
          <div className="hero-content">
            <h1>Taj Hotels</h1>
            <p>Experience Luxury, Elegance, and Comfort</p>
          </div>
        </header>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card history-card">
                <div className="card-body">
                  <h5 className="card-title">Our History</h5>
                  <p className="card-text">
                    Founded in 1903, Taj Hotel has been a beacon of luxury and
                    hospitality. With its rich heritage and dedication to
                    excellence, it stands as an icon of elegance and comfort.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mission-card">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    Our mission is to provide unparalleled luxury and
                    exceptional service, creating memorable experiences for our
                    guests while maintaining the highest standards of
                    hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <div className="card values-card">
                <div className="card-body">
                  <h5 className="card-title">Our Values</h5>
                  <p className="card-text">
                    At Taj Hotel, we are committed to integrity, excellence, and
                    innovation. Our values guide us in delivering exceptional
                    service and creating an environment of respect and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center py-4">
          <p>
            &copy; {new Date().getFullYear()} Taj Hotel. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
