import React, { useRef, useEffect } from "react";
import "./ScienceEngineering.css";
import { Helmet } from "react-helmet-async";
import { FaHeartbeat, FaHospitalUser, FaMicroscope, FaSyringe, FaVials, FaDna } from "react-icons/fa";

const HealthSciences = () => {
  const circleTextRef = useRef();

  // --- UPDATED CIRCULAR TEXT LOGIC ---
  useEffect(() => {
    const container = circleTextRef.current;
    if (!container) return; // Safety check

    // Determine radius based on screen width
    let radius = 130; // default
    if (window.innerWidth <= 480) {
      radius = 90;    // small phones
    } else if (window.innerWidth <= 768) {
      radius = 100;   // tablets
    } else if (window.innerWidth <= 992) {
      radius = 120;   // small desktops
    }

    const text = "Innovative • Reliable • Efficient • Professional • Accurate • ";
    const degStep = 360 / text.length;

    container.innerHTML = ""; // clear previous spans

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.position = "absolute";
      const angle = i * degStep;
      span.style.transform = `rotate(${angle}deg) translateY(-${radius}px)`;
      container.appendChild(span);
    });
  }, []);

  return (
    <div className="science-page">

        <Helmet>
  <title>Health & Life Sciences | Publication Verse</title>

  <meta 
    name="description" 
    content="Explore Health & Life Sciences publications, research topics, academic journals, and educational resources at Publication Verse." 
  />

  <meta 
    name="keywords" 
    content="Science, Engineering, Research, Publications, Journals, STEM, Academic resources, Educational articles" 
  />

  {/* Open Graph */}
  <meta property="og:title" content="Science & Engineering | Publication Verse" />
  <meta 
    property="og:description" 
    content="Discover high-quality Science & Engineering journals, articles, and research materials at Publication Verse." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/images/science-engineering-banner.webp" />
  <meta property="og:url" content="https://publicationverse.com/subjects/science-engineering" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Science & Engineering | Publication Verse" />
  <meta 
    name="twitter:description" 
    content="Access curated Science & Engineering resources, journals, and academic publications." 
  />
  <meta name="twitter:image" content="/images/science-engineering-banner.webp" />
</Helmet>


      {/* ===== HERO SECTION ===== */}
      <section className="subjects-hero">
        <div className="subjects-hero-content">
          <h1>Expert Support in Health & Life Sciences</h1>
          <p>
            From clinical research to medical writing, we provide reliable and precise assistance across all major health science disciplines.
          </p>
        </div>
      </section>
      {/* ===============section: 02 ================ */}
       <section className="manuscript-info">

  {/* LEFT TEXT */}
  <div className="manuscript-left">
    <h2>Health & Life Sciences</h2>
    <p>
      At Publication Verse, we provide expert support across multiple Health Science domains. Whether you're a student, researcher, or professional, our team helps craft high-quality, structured, and impactful academic and research content tailored to your field.    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="manuscript-right">
    <img 
      src="/images/subject2.webp" 
      alt="Science and Engineering"
    />
  </div>

</section>

      {/* ================section: 03  SUBJECT BOXES=========== */}
      <section className="subjects-section">
      <div className="subjects-grid">

        <div className="subject-box">
          <FaHospitalUser className="subject-icon" />
          <h3>Medicine & Surgery</h3>
          <p>We provide expert support for medical research, surgical studies, and clinical documentation.</p>
        </div>

        <div className="subject-box">
          <FaHeartbeat className="subject-icon" />
          <h3>Public Health</h3>
          <p>Services for epidemiology, health policy, and community health research projects.</p>
        </div>

        <div className="subject-box">
          <FaMicroscope className="subject-icon" />
          <h3>Biomedical Sciences</h3>
          <p>Support for lab-based research, diagnostics, and biomedical publications.</p>
        </div>

        <div className="subject-box">
          <FaSyringe className="subject-icon" />
          <h3>Nursing & Allied Health</h3>
          <p>We help with nursing studies, physiotherapy, and allied health research documents.</p>
        </div>

        <div className="subject-box">
          <FaVials className="subject-icon" />
          <h3>Molecular Biology</h3>
          <p>Guidance and services for genetic studies, molecular experiments, and lab reports.</p>
        </div>

        <div className="subject-box">
          <FaDna className="subject-icon" />
          <h3>Biotechnology</h3>
          <p>Assistance with biotech research, innovations, and scientific publications.</p>
        </div>

      </div>
    </section>

    {/* ===============section: 04 ================ */}
    <section className="aesthetic-section">
        <div className="aesthetic-container">
          {/* Left rotating circle - now uses the corrected logic from useEffect */}
          <div className="circle-wrapper">
            <div className="circle-text" ref={circleTextRef}></div>
            <div className="circle-center">
              <h3>Publication Verse</h3>
            </div>
          </div>

          {/* Right paragraph */}
          <div className="circle-description max-w-lg">
            <h2 className="mainheading">Professional Research Support!</h2>
            <p>
              We provide professional support for Health Science research. Accurate, reliable, and innovative services tailored for your projects.
            </p>
          </div>
        </div>
      </section>

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
    </div>

  );
};

export default HealthSciences;
