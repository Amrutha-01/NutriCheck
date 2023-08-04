import React from "react";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div id="aboutUs">
        <h2>About Us</h2>
        <p>
          At <b>NutriCheck</b>, we believe that good nutrition is the foundation
          of a healthy life. That's why we're committed to providing accurate
          and easy-to-understand information about the nutritional content of
          the foods you eat. Our goal is to empower you to make informed choices
          that support your health and wellbeing
        </p>
      </div>
      <div id="socials">
        <h2>Socials</h2>
        <a href="#">
          <i className="fa-brands fa-facebook fa-xl"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter fa-xl"></i>
        </a>
      </div>
      <div id="contactInfo">
        <h2>Contact Info</h2>
        <p>
          <i className="fa-solid fa-phone fa-lg"></i> +91 8639757945
        </p>
        <p>
          <i className="fa-solid fa-envelope fa-lg"></i>
          nithinkumarsavitini@gmail.com
        </p>
      </div>
      <div id="support">
        <nav>
          <h2>Support</h2>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
