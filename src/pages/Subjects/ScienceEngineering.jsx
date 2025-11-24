import React, { useRef, useEffect } from "react";
import "./ScienceEngineering.css";
import { Helmet } from "react-helmet-async";
import {
  FaFlask,
  FaLaptopCode,
  FaTools,
  FaAtom,
  FaGlobeAsia
} from "react-icons/fa";



const ScienceEngineering = () => {
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
  <title>Science & Engineering | Publication Verse</title>

  <meta 
    name="description" 
    content="Explore Science & Engineering publications, research topics, academic journals, and educational resources at Publication Verse." 
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
          <h1>Expert Support in Science & Engineering</h1>
          <p>
            From technical research to academic writing, we provide reliable and
            precise assistance across all major scientific and engineering disciplines.
          </p>
        </div>
      </section>
      {/* ===============section: 02 ================ */}
       <section className="manuscript-info">

  {/* LEFT TEXT */}
  <div className="manuscript-left">
    <h2>Science & Engineering</h2>
    <p>
      At Publication Verse, we provide expert support across multiple Science 
      and Engineering domains. Whether you're a student, researcher, or 
      professional, our team helps craft high-quality, structured, and 
      impactful academic and research content tailored to your field.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="manuscript-right">
    <img 
      src="/images/subject1.webp" 
      alt="Science and Engineering"
    />
  </div>

</section>

      {/* ================section: 03  SUBJECT BOXES=========== */}
      <section className="subjects-section">
  <div className="subjects-grid">

    <div className="subject-box">
      <FaLaptopCode className="subject-icon" />
      <h3>Computer Science</h3>
      <p>We provide support for research, publications, and academic projects in all areas of computer science.</p>
    </div>

    <div className="subject-box">
      <FaTools className="subject-icon" />
      <h3>Engineering</h3>
      <p>Assistance for research papers, projects, and publications across all engineering disciplines.</p>
    </div>

    <div className="subject-box">
      <FaAtom className="subject-icon" />
      <h3>Physics</h3>
      <p>Support for academic writing, research, and publications in physics from basics to advanced topics.</p>
    </div>

    <div className="subject-box">
      <FaFlask className="subject-icon" />
      <h3>Chemistry</h3>
      <p>We assist with research, papers, and publications in organic, inorganic, and applied chemistry.</p>
    </div>

    <div className="subject-box">
      <FaGlobeAsia className="subject-icon" />
      <h3>Environmental Science</h3>
      <p>Guidance for research, projects, and publications in climate, ecology, geology, and sustainability studies.</p>
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
              At Publication Verse, we provide professional support for Science & Engineering.
              Accurate, reliable, and innovative services tailored for your research and projects.
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

export default ScienceEngineering;
