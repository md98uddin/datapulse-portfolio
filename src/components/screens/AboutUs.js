import React from "react";
import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <main>
        <section id="about" className="about-section">
          <div className="about-content">
            <h2>About Us</h2>
            <p className="p-text">
              Welcome to Your IT Solutions, where innovation meets excellence in
              providing cutting-edge technology solutions. Our dedicated team is
              committed to delivering high-quality services tailored to meet the
              unique needs of our clients.
            </p>

            <h3>Our Mission</h3>
            <p className="p-text">
              To empower businesses through advanced technology, fostering
              growth, and ensuring a competitive edge in the digital landscape.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>Expertise in a wide range of IT solutions</li>
              <li>Customer-centric approach</li>
              <li>Proven track record of successful projects</li>
              <li>Commitment to innovation and continuous improvement</li>
            </ul>

            <h3>Meet Our Team</h3>
            <p className="p-text">
              Our team of experienced professionals brings diverse skills and a
              shared passion for solving complex challenges. Meet the minds
              behind Your IT Solutions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
