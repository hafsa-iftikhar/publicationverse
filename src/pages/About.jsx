import React, { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./About.css";
import { useInView } from "react-intersection-observer";
import {
  FaWhatsapp,
  FaGraduationCap,
  FaBolt,
  FaHandsHelping,
  FaUserSecret,
  FaMoneyBillWave,
  FaCertificate
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

  <Helmet>
    <title>About | Publication Verse</title>
    <meta
      name="description"
      content="Publication Verse helps researchers publish with trusted global journals like Scopus, Elsevier, and Springer."
    />
    <meta
      name="keywords"
      content="research publication, Scopus, Elsevier, journal submission, academic publishing"
    />
    <link rel="canonical" href="https://yourdomain.com/about" />
  </Helmet>


const About = () => {
  // ====== Section 1 Data ======
  const slides = [
    {
      title: "GET THE RECOGNITION YOU DESERVE",
      subtitle: "Share Your Genius with the World for the Greater Good.",
      btnText: "SCHEDULE A CALL",
      image: "/images/01.webp",
      background: "/images/background1.webp",
      highlight: "RECOGNITION",
    },
    {
      title: "SHOWCASE YOUR RESEARCH TO THE WORLD",
      subtitle: "Publish with trusted global journals and gain recognition.",
      btnText: "SCHEDULE A CALL",
      image: "/images/02.webp",
      background: "/images/background2.webp",
      highlight: "RESEARCH",
    },
    {
      title: "CONNECT WITH PROFESSIONALS WORLDWIDE",
      subtitle: "Join a network of experts and innovators.",
      btnText: "SCHEDULE A CALL",
      image: "/images/03.webp",
      background: "/images/background3.webp",
      highlight: "PROFESSIONALS",
    },
    {
      title: "EXPAND YOUR ACADEMIC HORIZONS",
      subtitle: "Your ideas deserve a global audience.",
      btnText: "SCHEDULE A CALL",
      image: "/images/04.webp",
      background: "/images/background4.webp",
      highlight: "ACADEMIC",
    },
  ];

  // ====== Section 2 Logos ======
  const miniSlides = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
    "/images/logo7.png"
  ];

  // ====== Section 3 Experts ======
  const experts = [
    {
      name: "Prof. Elena",
      title:"As Editor-in-Chief at Modern Science Journal, she brings expertise across bioengineering and nanotechnology.",
      success: "93%",
      since: "Since 2000",
      citation: "8890",
      citedBy: "4211",
      hindex: "41",
      i10index: "138",
      img: "/images/professor1.webp",
      flag: "/images/flag1.webp"
    },
    {
      name: "Dr. Thomas",
      title:
        "As Editor-in-Chief at Renewable Energy Review, he specializes in sustainable and solar technologies.",
      success: "97%",
      since: "Since 2010",
      citation: "9456",
      citedBy: "9857",
      hindex: "75",
      i10index: "457",
      img: "/images/professor2.webp",
      flag: "/images/flag2.webp"
    },
    {
      name: "Prof. Sarah",
      title:
        "Senior Editor at Global Medical Insights, focusing on clinical innovation and biotechnology.",
      success: "95%",
      since: "Since 2012",
      citation: "8450",
      citedBy: "4211",
      hindex: "63",
      i10index: "301",
      img: "/images/professor3.webp",
      flag: "/images/flag3.webp"
    },
    {
      name: "Dr. Michael",
      title:
        "Chief Editor at Future Tech Publishers, driving research in AI and data sciences.",
      success: "94%",
      since: "Since 2015",
      citation: "7890",
      citedBy: "4250",
      hindex: "52",
      i10index: "210",
      img: "/images/professor4.webp",
      flag: "/images/flag4.webp"
    },
    {
      name: "Prof. Emily",
      title:
        "Leading editor at Health Sciences Review, specializing in neuroscience and innovation.",
      success: "92%",
      since: "Since 2011",
      citation: "8123",
      citedBy: "3890",
      hindex: "55",
      i10index: "276",
      img: "/images/professor5.webp",
      flag: "/images/flag1.webp"
    },
  ];

  // ====== Section 6 FAQs ======
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // ============ section: 07 ===========
  const awards = [
  { title: "Innovative Publishing Support", image: "/images/certificate1.png" },
  { title: "Best Research Publishing", image: "/images/certificate2.png" },
  { title: "Rising Star in Research Publishing", image: "/images/certificate3.png" },
  { title: "Publishing Team of the Year", image: "/images/certificate4.png" },
  { title: "Certificate of Client Satisfaction", image: "/images/certificate5.png" }
];
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide every 3 seconds
  React.useEffect(() => {
  const timer = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % awards.length);
  }, 3000);
  return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
 
    // ============section: 08 ===============
  const statsData = useMemo(() => [
  { 
    icon: <img src="/images/icon1.svg" alt="Published Research" className="stat-img" />, 
    number: 5000, 
    title: "Published Research" 
  },
  { 
    icon: <img src="/images/icon2.svg" alt="Published Manuscripts" className="stat-img" />, 
    number: 99, 
    title: "Published Manuscripts", 
    isPercent: true 
  },
  { 
    icon: <img src="/images/icon3.svg" alt="Satisfied Clients" className="stat-img" />, 
    number: 4000, 
    title: "Satisfied Clients" 
  },
  { 
    icon: <img src="/images/icon4.svg" alt="Successful Resubmissions" className="stat-img" />, 
    number: 99, 
    title: "Successful Resubmissions", 
    isPercent: true 
  },
], []);

const [counts, setCounts] = useState(statsData.map(() => 0));
const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

useEffect(() => {
  if (!statsInView) return;

  statsData.forEach((stat, index) => {
    let start = 0;
    const end = stat.number;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = start;
        return newCounts;
      });
    }, 50);
  });
}, [statsInView, statsData]);

// ========section:09================
const testimonials = [
  {
    text: "The team at Fast Publications exceeded our expectations. They delivered high-quality content ahead of schedule and tailored it perfectly to our needs. Their dedication to excellence is evident in every project they undertake. Fast Publications is our go-to for all our content needs.",
    name: "Jessica M",
    title: "Head of Content at Bright Future Ventures",
  },
  {
    text: "Working with Fast Publications was a pleasure. Their professionalism and quality of work were top-notch. They truly understand our requirements and always deliver on time.",
    name: "David R",
    title: "Lead Research Analyst at KnowledgeCorp",
  },
  {
    text: "Fast Publications has been our trusted partner for years. Their consistent quality and communication make them a standout in the field.",
    name: "Emily S",
    title: "Publishing Manager at Insight Media",
  },
];

const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  }, 3000);

  return () => clearInterval(timer);
}, [testimonials.length]); // include testimonials.length

  return (
    <>
      {/* ===== Section 1: Hero Slider ===== */}
      <section className="about-section">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="about-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="about-slide"
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <div className="about-content">
                  <div className="text-side">
                    <h1>
                      {slide.title.split(" ").map((word, i) =>
                        word === slide.highlight ? (
                          <span key={i} className="highlight">
                            {word + " "}
                          </span>
                        ) : (
                          word + " "
                        )
                      )}
                    </h1>
                    <p>{slide.subtitle}</p>
                    <button className="cta-btn">{slide.btnText}</button>
                  </div>
                  <div className="image-side">
                    <img src={slide.image} alt="slide visual" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===== Section 2: Logo Slider ===== */}
      <section className="logo-slider-section">
        <div className="logo-slider">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={40}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {miniSlides.concat(miniSlides).map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo} alt={`logo-${index}`} className="logo-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== Section 3: Publication Excellence ===== */}
<section className="publication-section" id="excellence">
  <h2 className="section-title">
    Advancing <span>Publication Excellence</span>
  </h2>

  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    slidesPerView={1}
    spaceBetween={30}
    breakpoints={{
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 2 },
    }}
    className="publication-slider"
  >
    {experts.map((person, index) => (
      <SwiperSlide key={index}>
        <div className="publication-card">

          {/* ===== Card Header (Image, Name + Flag, Description) ===== */}
          <div className="card-header">
            <img src={person.img} alt={person.name} className="editor-img" />

            <div className="editor-info">
              <div className="name-flag-row">
                <h3 className="editor-name">{person.name}</h3>
                <img src={person.flag} alt={`${person.name} Flag`} className="flag-img" />
              </div>
              <p className="editor-title">{person.title}</p>

              <button className="success-btn">
                {person.success} Successful Publications
              </button>
            </div>
          </div>
          {/* ===== Awards + WhatsApp Section ===== */}
          {/* ===== Bottom Section: Award + Table ===== */}
           <div className="card-bottom">
             <div className="bottom-row">
               {/* Left side: Award + WhatsApp */}
               <div className="award-side">
                 <img src="/images/award2.png" alt="Award" className="award-img" />
                 <a
                    href="https://wa.me/123456789"
                    className="whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk on WhatsApp
                    <span className="whatsapp-icon">
                      <FaWhatsapp />
                    </span>
                  </a>
               </div>
    {/* Right side: Table */}
    <div className="table-side">
      <table>
        <thead>
          <tr>
            <th>Cited By</th>
            <th>All</th>
            <th>{person.since}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Citation</td>
            <td>{person.citation}</td>
            <td>{person.citedBy}</td>
          </tr>
          <tr>
            <td>h-index</td>
            <td>{person.hindex}</td>
            <td>{Math.floor(person.hindex / 2)}</td>
          </tr>
          <tr>
            <td>i10-index</td>
            <td>{person.i10index}</td>
            <td>{Math.floor(person.i10index / 2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* ========== section: 04 ============= */}
     <section className="features-section">
  <div className="features-container">

    <div className="feature-box box1">
      <div className="feature-header">
        <FaGraduationCap className="feature-icon" />
        <h3>High Quality Research</h3>
      </div>
      <p>
        We ensure every publication meets top academic standards with thorough peer review and expert editing.
      </p>
    </div>

    <div className="feature-box box2">
      <div className="feature-header">
        <FaBolt className="feature-icon" />
        <h3>Fast & Reliable Process</h3>
      </div>
      <p>
        From submission to publication, our streamlined process saves you time without compromising quality.
      </p>
    </div>

    <div className="feature-box box3">
      <div className="feature-header">
        <FaHandsHelping className="feature-icon" />
        <h3>Dedicated Author Support</h3>
      </div>
      <p>
        Our team assists at every stage — from formatting to indexing — ensuring a stress-free experience.
      </p>
    </div>

  </div>
</section>

      {/* ===== Section 5: Why Choose Us ===== */}
<section className="why-modern">
  {/* Heading at top */}
  <div className="why-header">
    <h2 className="why-title">Why Choose Us!</h2>
    <p className="why-subtext">
      We combine expertise, precision, and trust to deliver excellence in every project.
    </p>
  </div>

  {/* Main content: image left, cards right */}
  <div className="why-container">
    <div className="why-image">
      <img src="/images/section3.webp" alt="Why Choose Us" />
    </div>

    <div className="why-cards">
      {[ 
        { icon: <FaGraduationCap />, title: "Expert Guidance", desc: "Get top-tier academic and publishing support." },
        { icon: <FaUserSecret />, title: "Confidentiality", desc: "Your data and identity remain private and protected." },
        { icon: <FaMoneyBillWave />, title: "Affordable Plans", desc: "We deliver premium services that fit your budget." },
        { icon: <FaCertificate />, title: "Quality Assurance", desc: "Every project passes multiple quality checks." }
      ].map((item, i) => (
        <div className="why-card" key={i}>
          <div className="why-card-icon">{item.icon}</div>
          <div className="why-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ========== section: 06 ============= */}
<section className="about-intro" id="about">
      {/* Main Header */}
      <h2 className="main-title">
        Your Partner In Global Publishing!
      </h2>
      <p className="main-desc">
        Publication Verse has earned the trust of researchers around the world.
        We make research publishing simple by providing you with editorial
        services and <strong>submission support</strong> to meet your
        publication goals. Our confidentiality policy ensures that your
        manuscripts are well secured and protected at all times. Our highly
        qualified team assists scholars in publishing in world-renowned
        journals.
      </p>

      {/* Read More / Show Less (STATIC) */}
      <div
        className={`readmore-bar ${isExpanded ? "active" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? "Show Less" : "Read More"}</span>
        <span className={`arrow ${isExpanded ? "rotate" : ""}`}></span>
      </div>

      {/* Expandable Text */}
      <div className={`intro-box ${isExpanded ? "open" : ""}`}>
        <h3 className="intro-title">Organised and Clean and World Magazines</h3>
        <p>
          It should be rewarding, not daunting, to publish research. At
          <strong> Publication Verse</strong>, we assist researchers across the
          globe in achieving a smooth publishing journey. Regardless of your
          writing requirements—preparation, editing, or submission—our expert
          team ensures your work reaches internationally recognised journals
          like <strong>Elsevier, Web of Science, Scopus, and Wiley</strong>. Your
          research remains safe under our strict confidentiality policy.
        </p>

        <h3>Why Publication Verse?</h3>
        <ul>
          <li>
            <strong>Track Record with Published Journals:</strong> Years of
            experience in helping manuscripts reach high-ranking journals.
          </li>
          <li>
            <strong>Personalised Service:</strong> We guide your journey from
            the first draft to the final submission.
          </li>
          <li>
            <strong>Confidentiality First:</strong> You own your ideas—we guard
            your manuscripts with complete privacy.
          </li>
          <li>
            <strong>Reliability:</strong> Researchers worldwide trust our
            process for smooth and secure publishing.
          </li>
        </ul>

        <h3>Our Experience, Your Advantage</h3>
        <p>
          Our editorial team understands compliance, formatting, and reviewer
          expectations. With expert technical editing, your research gains the
          professional touch required for global recognition.
        </p>

        <h3>Who Can Benefit?</h3>
        <ul>
          <li>Researchers and PhD students targeting reputable journals.</li>
          <li>Institutions improving academic reputation.</li>
          <li>New authors seeking step-by-step submission guidance.</li>
          <li>Scholars wanting faster, trusted publication support.</li>
        </ul>

        <h3>Our Guarantee</h3>
        <p>
          You keep full authorship of your work. We never store or sell
          manuscripts. With our <strong>No Repository Guarantee</strong>, your
          research stays 100% confidential and yours alone.
        </p>

        <h3>Step Into Global Publishing Today</h3>
        <p>
          Publishing shouldn’t be stressful. With Publication Verse, your work
          is valued, protected, and recognised internationally.
        </p>
      </div>

      {/* FAQ Section (Same Section, Continues Below) */}
      <div className="faq-section" id="faqs">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-container">
          {[
            {
              question: "What services does Fast Publications offer?",
              answer:
                "We specialize in journal publication support for research articles, including expert English editing, plagiarism checks, formatting for journal guidelines, and submission preparation for Scopus, Elsevier, Springer, IEEE, and other indexed journals.",
            },
            {
              question: "Can you help me publish in Scopus, Elsevier, or IEEE journals?",
              answer:
                "Yes, we provide guidance and submission assistance for reputed journals including Scopus, Elsevier, IEEE, and Springer.",
            },
            {
              question: "What is the difference between Open Access and Closed Access publishing?",
              answer:
                "Open Access allows free availability of your research to everyone, while Closed Access restricts it to subscribers.",
            },
            {
              question: "Do you offer journal selection or matching services?",
              answer:
                "Yes, our experts recommend suitable journals based on your manuscript’s topic, impact factor, and indexing preferences.",
            },
            {
              question: "How fast can you deliver editing services?",
              answer:
                "We typically deliver editing services within 3 to 5 business days, depending on the manuscript length and complexity.",
            },
          ].map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="faq-number">{index + 1}.</span>
                {faq.question}
                <span className="faq-toggle">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>    
    {/* ****************section: 07 ******************** */}
     <section className="awards-section">
  <h2 className="award-title">Awards</h2> {/* Heading on top */}
  <div className="awards-container">
    {/* Left image */}
    <div className="awards-left">
      <img
        src={awards[activeIndex].image}
        alt={awards[activeIndex].title}
        className="award-image"
      />
    </div>

    {/* Right list */}
    <div className="awards-right">
      {awards.map((award, index) => (
        <div
          key={index}
          className={`award-item ${index === activeIndex ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          {award.title}
        </div>
      ))}
    </div>
  </div>
</section>
{/* ****************section: 08 ******************** */}
<section className="stats-section" ref={statsRef}>
  <div className="stats-container">
    {statsData.map((stat, index) => (
      <div className="stat-item" key={index}>
        <div className="stat-icon">{stat.icon}</div>
        <h3 className="stat-number">
          {stat.isPercent 
            ? `${Math.floor(counts[index])}%` 
            : counts[index] >= 1000 
              ? `${(counts[index] / 1000).toFixed(0)}K` 
              : counts[index]
          }
        </h3>
        <p className="stat-title">{stat.title}</p>
      </div>
    ))}
  </div>
</section>

{/* ===== Section 10: Quote Section ===== */}
{/* ===== Section 10: Quote Section ===== */}
<section className="quote-section">
  <p className="quote-text">"Your research deserves to be seen, valued, and remembered. Let Publication Verse be your guide to global recognition."</p>
</section>
    

{/* ****************section: 09 ******************** */}
<section className="testimonial-overlap-section">
      <div className="testimonial-image"></div>

      <div className="testimonial-box">
        <h2>What Researchers Say About Us</h2>
        <div className="testimonial-content">
          <p className="quote-mark">❝</p>
          <p className="testimonial-text">
            {testimonials[activeTestimonialIndex].text}
          </p>
          <p className="author-name">
            {testimonials[activeTestimonialIndex].name}
          </p>
          <p className="author-title">
            {testimonials[activeTestimonialIndex].title}
          </p>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === activeTestimonialIndex ? "active" : ""
              }`}
              onClick={() => setActiveTestimonialIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
