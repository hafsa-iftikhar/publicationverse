import React from "react";
import { FaSearch, FaClock, FaUserEdit, FaUnlockAlt, FaChartLine, FaHeadset } from "react-icons/fa";
import "./Journals.css";
import { Helmet } from "react-helmet-async";

const journals = [
  {
    name: "Elsevier",
    logo: "/images/elsevier.webp",
    color: "#F36D21",
    url: "https://www.elsevier.com/",
    tagline: "Leading publisher of scientific research",
  },
  {
    name: "Springer Nature",
    logo: "/images/springer.webp",
    color: "#005B9E",
    url: "https://www.springernature.com/",
    tagline: "Advancing discovery through publishing",
  },
  {
    name: "Wiley",
    logo: "/images/wiley2.webp",
    color: "#231F20",
    url: "https://www.wiley.com/",
    tagline: "Empowering researchers worldwide",
  },
  {
    name: "Taylor & Francis",
    logo: "/images/taylor.webp",
    color: "#1E4FA1",
    url: "https://www.tandfonline.com/",
    tagline: "Global academic knowledge network",
  },
  {
    name: "Frontiers",
    logo: "/images/frontiers.webp",
    color: "#c90000ff",
    url: "https://www.frontiersin.org/",
    tagline: "Open-access leader in research",
  },
  {
    name: "IEEE",
    logo: "/images/ieee.webp",
    color: "#00629B",
    url: "https://ieeexplore.ieee.org/",
    tagline: "Innovating technology for humanity",
  },
  {
    name: "Sage Publishers",
    logo: "/images/sage.webp",
    color: "#002D72",
    url: "https://us.sagepub.com/",
    tagline: "Independent academic publisher",
  },
  {
    name: "ACS",
    logo: "/images/acs.webp",
    color: "#0033A0",
    url: "https://pubs.acs.org/",
    tagline: "Chemistry research excellence",
  },
  {
    name: "MDPI",
    logo: "/images/mdpi.webp",
    color: "#002B49",
    url: "https://www.mdpi.com/",
    tagline: "Open access pioneer",
  },
  {
    name: "Emerald",
    logo: "/images/emerald.webp",
    color: "#00806E",
    url: "https://www.emeraldgrouppublishing.com/",
    tagline: "Publishing impactful research",
  },
];

const cards = [
    { icon: <FaSearch />, title: "High Visibility", desc: "Reach a global audience of researchers and scholars in your field." },
    { icon: <FaClock />, title: "Fast Publication", desc: "Efficient review process ensures your research is published promptly." },
    { icon: <FaUserEdit />, title: "Expert Review", desc: "Peer review by leading experts guarantees the quality of your work." },
    { icon: <FaUnlockAlt />, title: "Open Access", desc: "Your research will be accessible to everyone worldwide without paywalls." },
    { icon: <FaChartLine />, title: "Impactful Research", desc: "Our platform maximizes the visibility and impact of your findings." },
    { icon: <FaHeadset />, title: "Professional Support", desc: "Guidance throughout the publication process from submission to post-publication." },
  ];

  const services = [
    {
      icon: "/images/book.webp",
      title: "Book Writing",
      description:
        "Ignite your imagination and craft captivating stories with our expert book-writing support, designed to help your ideas flourish.",
    },
    {
      icon: "/images/edit.webp",
      title: "Book Editing",
      description:
        "Perfect your manuscript with the expertise of our seasoned editors in London, ensuring clarity, consistency, and engaging storytelling throughout.",
    },
    {
      icon: "/images/publishing.webp",
      title: "Book Publishing",
      description:
        "Navigate the entire publishing process with confidence. From editing and design to global distribution, we manage every step with precision.",
    },
    {
      icon: "/images/occupation.webp",
      title: "Book Marketing",
      description:
        "Reach your ideal readers through strategic, results-driven marketing campaigns tailored to highlight your book's unique appeal.",
    },
  ];

export default function Journals() {
  return (
    <div className="journals-page">
      <Helmet>
        <title>Top Publishers & Journals - Publication Verse</title>
        <meta
          name="description"
          content="Discover top journals and publishers supported by Publication Verse. Maximize your research visibility and impact."
        />
        <link rel="canonical" href="https://publicationverse.com/journals" />
      </Helmet>
      {/* Hero Section */}
      {/******************** section:01 *********************/}
      <section className="journals-hero">
        <div className="hero-content">
          <h1>Top Publishers & Journals We Support</h1>
          <p>
            We proudly collaborate with globally recognized publishers to help
            researchers share their work with the world.
          </p>
        </div>
      </section>
{/******************** section:02 *********************/}
      {/* Journals Book Section */}
      <section className="journals-books">
        <h2>Top Publishers & Journal We Support</h2>
        <div className="book-grid">
          {journals.map((journal, index) => (
            <a
              href={journal.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="book-card"
              style={{ backgroundColor: journal.color }}
            >
              <div className="book-cover">
                <img src={journal.logo} alt={journal.name} />
              </div>
             <div className="book-info">
  {/* Badge */}
  <span className="book-badge">🏆</span>

  {/* Tagline */}
  <p className="tagline">{journal.tagline}</p>

  {/* Open Access or any stat */}
  <p className="book-stat">Open Access</p>

  {/* Arrow */}
  <div className="book-arrow">→</div>
</div>
            </a>
          ))}
        </div>
      </section>
{/******************** section:03 *********************/}
      {/* Slide Section Below Journals */}
{/* Journal Logos Slider Section */}
<section className="journals-slider">
  <div className="slider-track">
    {journals.concat(journals).map((journal, index) => (
      <div className="slide" key={index}>
        <img src={journal.logo} alt={journal.name} />
      </div>
    ))}
  </div>
</section>
{/******************** section:04 *********************/}
<section className="why-publish">
      <div className="why-bg"></div>
      <div className="why-content">
        <h2>Why Publish With Us?</h2>
        <div className="publish-grid">
          {cards.map((card, index) => (
            <div className="publish-card animate" key={index}>
              <div className="publish-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/******************** section:05 *********************/}
<section className="book-services">
      {/* Section Heading */}
      <header className="services-header">
        <h2>Publication Verse, Where Every Story Finds Its Voice</h2>
        <p>
          Book a consultation today and discover how we can help you unlock your
          full creative potential.
        </p>
      </header>

      {/* Services Grid */}
      <div className="services-container">
        {services.map((service, index) => (
          <article className="service-card" key={index}>
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>

            <div className="service-content">
              <div className="service-line" aria-hidden="true" />
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </article>
        ))}
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
<p className="form-disclaimer">
  Your information is safe with us, we never share your details with anyone.
</p>
    </div>
  </div>
</section>
    </div>
  );
}
