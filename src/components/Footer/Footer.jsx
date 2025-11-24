import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  // Unicode character for Right Arrow: → (\u2192)
  const RightArrow = '\u2192'; 

  return (
    <footer className="footer">
      {/* Container for the main content */}
      <div className="footer-top-section">
        
        {/* LEFT COLUMN: Logo, Contact, Social, Verification */}
        <div className="footer-col contact-col-full">
          <div className="logo-section">
            <div className="logo-text">PUBLICATION</div>
            <div className="logo-text-2">VERSE</div>
          </div>

          <div className="get-in-touch">
            <h3 className="footer-heading-contact">Get In Touch</h3>
            <p className="contact-item"><FaPhone /> +44 20 3807 6005</p>
            <p className="contact-item"><FaPhone /> +1 570 800 2533</p>
            <p className="contact-item"><FaEnvelope /> info@fastpublications.com</p>
          </div>

          <div className="footer-social-icons">
            {/* Using href="" for compliant placeholders */}
            <a href="" className="social-icon-link"><FaFacebookF /></a>
            <a href="" className="social-icon-link"><FaInstagram /></a>
            <a href="" className="social-icon-link"><FaPinterestP /></a>
            <a href="" className="social-icon-link"><FaLinkedinIn /></a>
            <a href="" className="social-icon-link"><FaTiktok /></a>
          </div>

          <div className="meta-verified-container">
            <span className="verified-badge">✅ Meta Verified</span>
          </div>
        </div>

        {/* MIDDLE COLUMN: Quick Links */}
        <div className="first-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href=""><span className="arrows">{RightArrow}</span> English Editing</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Thesis Editing</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Advance Editing</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Scientific Editing</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Premium Editing</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Plagiarism Check</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Contact</a></li>
          </ul>
        </div>

        {/* RIGHT COLUMN: Information */}
        <div className="second-column">
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-links-list">
            <li><a href=""><span className="arrows">{RightArrow}</span> Our Story</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Insights</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Write My Case Study</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Research Paper Help</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Medical Science</a></li>
            <li><a href=""><span className="arrows">{RightArrow}</span> Business Economics</a></li>
          </ul>
        </div>
      </div>

      {/* Global Locations Section */}
      <div className="global-locations-section">
        <h2 className="global-heading">Global Locations</h2>
        <div className="locations-row">
          <div className="location-box">
            <h3>United Kingdom</h3>
            <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="flag-icon" />
            <p>9 Cedar Ct Glasgow, Scotland</p>
          </div>
          <div className="location-box">
            <h3>United States of America</h3>
            <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="flag-icon" />
            <p>2 Box St Brooklyn, NY 11222</p>
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT LINE */}
      <div className="footer-copyright">
        <p>© 2025 Fast Publications All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;