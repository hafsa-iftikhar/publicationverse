import React from "react";
import "./manuscriptediting.css";
import { GiLaurels } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const AdvancedFormatting = () => {
  const portfolioItems = [
    {
      img: "/images/book1.webp",
      title: "The March To Freedom",
      tagline: "Expertly edited to perfection for clarity and flow.",
      link: "https://www.amazon.com/dp/B0DR965FPN?ref=cm_sw_r_ffobk_cp_ud_dp_MY8P5CG1G2GTAF6SND1B"
    },
    {
      img: "/images/book2.webp",
      title: "The Psychopath Next Door",
      tagline: "Polished for readability and academic excellence.",
      link: "https://www.amazon.com/Psychopath-Next-Door-Mark-Edwards-ebook/dp/B0D4RBH48Z"
    },
    {
      img: "/images/book3.webp",
      title: "Silent Echoes",
      tagline: "Editing ensures your message is crystal clear.",
      link: "https://example.com/book3"
    },
    {
      img: "/images/book4.webp",
      title: "Wanting Daisy Dead",
      tagline: "Refined content for professional publication.",
      link: "https://www.amazon.com/Wanting-Daisy-Dead-Sue-Watson-ebook/dp/B0DYK8D2MN"
    },
    {
      img: "/images/book5.webp",
      title: "Nash Falls",
      tagline: "Manuscript editing for flawless storytelling.",
      link: "https://www.amazon.com/Nash-Falls-David-Baldacci/dp/1538757982"
    },
    {
      img: "/images/book6.webp",
      title: "Only Way Out",
      tagline: "Professional polishing for maximum impact.",
      link: "https://www.amazon.com/Only-Way-Out-Tod-Goldberg-ebook/dp/B0DWPF2ST2"
    },
  ];

  return (
    <div className="manuscript-editing">

      {/* ---------- SEO METADATA ---------- */}
      <Helmet>
        <title>Publication Verse | Manuscript Editing</title>

        <meta 
          name="description" 
          content="Professional Manuscript Editing services. Ensure your research or manuscript is polished, clear, and publication-ready." 
        />

        <meta 
          name="keywords" 
          content="manuscript editing, academic editing, research paper editing, journal-ready manuscript, proofreading" 
        />

        <meta property="og:title" content="Manuscript Editing | Publication Verse" />
        <meta property="og:description" content="Expert manuscript editing to prepare your work for journals and academic publications." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.webp" />
        <meta property="og:url" content="https://publicationverse.com/manuscriptediting" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manuscript Editing | Publication Verse" />
        <meta name="twitter:description" content="High-quality manuscript editing services for professional publication." />
        <meta name="twitter:image" content="/images/og-image.webp" />
      </Helmet>

      {/* ---------- HERO SECTION ---------- */}
      <section className="manuscript-hero">
        <div className="manuscript-hero-content">
          <h1>Advanced Manuscript Formatting</h1>
          <p>
            We format your manuscript to meet journal guidelines, including references, figures, tables, and layout requirements.
          </p>
        </div>
      </section>
      {/* ---------- INFO SECTION ---------- */}
      <section className="manuscript-info">
        <div className="manuscript-left">
          <h2>Why Choose Us for Advanced Formatting?</h2>
          <p>
            With our Advanced Formatting service, your manuscript receives a complete professional makeover based on the exact requirements of your target journal. We ensure consistent fonts, headings, margins, spacing, references, tables, figures, and overall structure. This attention to detail not only improves readability but also creates a polished, publication-ready presentation that meets all technical guidelines and impresses journal editors.
          </p>
        </div>

        <div className="manuscript-right">
          <img src="/images/services6.png" alt="Manuscript Editing" />
        </div>
      </section>
      {/* ---------- TAGLINE ---------- */}
      <section className="manuscript-tagline">
        <GiLaurels className="laurel-left" />
        
        <div className="tagline-content">
          <h3>Polish Every Detail!</h3>
          <p>Achieve professional formatting that meets publication standards.</p>
        </div>

        <GiLaurels className="laurel-right" />
      </section>

      {/* ---------- FORM SECTION ---------- */}
      <section className="contact-section-editing">
        <div className="contact-wrapper-editing">

          {/* Left Image */}
          <div className="contact-image-editing">
            <img src="/images/formatting.webp" alt="Manuscript Editing" />
            <div className="overlay"></div>
            <h2 className="overlay-text">
              Publish Smart. <span>Publish Confidently!</span>
            </h2>
          </div>

          {/* Right Form */}
          <div className="contact-form-container-editing">
            <h3>
              Format Your Manuscript According to Journal Standards with Precision.
            </h3>
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

      {/* ---------- PORTFOLIO ---------- */}
      <section className="portfolio-section-editing">
        <h2 className="portfolio-heading-editing">Our Portfolio</h2>

        <div className="portfolio-grid-editing">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-card-editing" key={index}>
              <div className="portfolio-img-wrapper-editing">
                <img src={item.img} alt={item.title} className="portfolio-img-editing" />
              </div>

              <div className="portfolio-content-editing">
                <h3>{item.title}</h3>
                <p className="portfolio-tag-editing">{item.tagline}</p>

                <button
                  className="view-btn-editing"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  See More
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AdvancedFormatting;
