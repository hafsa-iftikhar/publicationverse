import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin, Send } from 'lucide-react'


const Contact = () => {
  return (
    <div className="contact-page">

      {/* ---------------------- SECTION 1 — HERO ---------------------- */}
      <section className="fees-hero">
        <div className="fees-hero-content">
          <h1>Get In Touch With Our Experts</h1>
          <p>Ready to elevate your research? We're here to support your academic journey.</p>
        </div>
      </section>

      {/* ---------------------- SECTION 2 — FORM ---------------------- */}
      {/******************** section:06 *********************/}
<section className="contact-section">
  <div className="contact-wrapper">
    {/* Left Image */}
    <div className="contact-image">
      <img src="/images/sideimage.webp" alt="Manuscript Support" />
      <div className="overlay"></div>
      <h2 className="overlay-text">
        Let’s Shape <span>Your Story Together!</span>
      </h2>
    </div>

    {/* Right Form */}
    <div className="contact-form-container">
      <h3>Transform Your Ideas into a Masterpiece!</h3>


      <form className="contact-form" method="POST" action="/sendEmail.php">
  <div className="input-group">
    <label>Full Name*</label>
    <input 
      type="text" 
      name="full_name" 
      placeholder="Enter Your Full Name" 
      required 
    />
  </div>

  <div className="input-group">
    <label>Email*</label>
    <input 
      type="email" 
      name="email" 
      placeholder="Enter Your Email Address" 
      required 
    />
  </div>

  <div className="input-group">
    <label>Phone No*</label>
    <input 
      type="tel" 
      name="phone" 
      placeholder="Enter Your Phone No" 
      required 
    />
  </div>

  <div className="input-group">
    <label>Select Service</label>
    <div className="custom-select">
      <select name="service">
        <option>Research Article Writing</option>
        <option>Manuscript Editing</option>
        <option>Journal Submission Support</option>
        <option>Reviewer Comment Support</option>
        <option>Plagiarism & Similarity Reports</option>
        <option>Advanced Formatting</option>
        <option>Thesis to Article Conversion</option>
        <option>Publication Strategy Services</option>
      </select>
    </div>
  </div>

  <div className="row-fields-editing">
    <div className="input-group">
      <label>Research Field</label>
      <input 
        type="text" 
        name="research_field" 
        placeholder="e.g., Engineering, Medical, AI" 
      />
    </div>

    <div className="input-group">
      <label>Word Count</label>
      <div className="custom-select">
        <select name="word_count">
          <option>1000 - 2000</option>
          <option>2000 - 4000</option>
          <option>4000 - 6000</option>
          <option>6000+</option>
        </select>
      </div>
    </div>
  </div>

  <button type="submit">APPLY NOW</button>
</form>
    </div>
  </div>
</section>
      {/* ---------------------- SECTION 3 — CONTACT CARDS ---------------------- */}
      {/* -------- SECTION 03: PROFESSIONAL CONTACT INFO -------- */}
<section className="contact-pro-section">
  <div className="contact-pro-container">

    <div className="contact-pro-item">
      <div className="pro-icon-box blue">
        <MapPin size={28} />
      </div>
      <h3>Main Office</h3>
      <p>123 Research Blvd, Suite 400</p>
      <p>Knowledge City, RSR 12345</p>
    </div>

    <div className="contact-pro-item">
      <div className="pro-icon-box green">
        <Phone size={28} />
      </div>
      <h3>Call or WhatsApp</h3>
      <p>+1 (555) 123-4567</p>
      <p>+1 (555) 987-6543</p>
    </div>

    <div className="contact-pro-item">
      <div className="pro-icon-box red">
        <Mail size={28} />
      </div>
      <h3>Email Support</h3>
      <p>support@publicationverse.com</p>
      <p>sales@publicationverse.com</p>
    </div>

  </div>
</section>

    </div>
  );
};

export default Contact;
