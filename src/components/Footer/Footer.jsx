import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-col">
          <h2 className="footer-logo">Sanjeevani</h2>
          <p>
            Organic cooking masala crafted with natural ingredients.
            Boost immunity, enhance flavor, and cook with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: support@sanjeevani.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sanjeevani. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;