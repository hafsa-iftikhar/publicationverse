import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPenNib, FaBullhorn, FaFileAlt, FaBookOpen, FaFeatherAlt, FaEdit, FaChartLine, FaMicroscope } from "react-icons/fa";
import { FaFlask, FaGlobe, FaHeartbeat } from "react-icons/fa";
import LogoIcon from "../../assets/icon.png";
import "./Header.css";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const services = [
    { icon: <FaPenNib />, title: "Research Article Writing" },
    { icon: <FaEdit />, title: "Manuscript Editing" },
    { icon: <FaFileAlt />, title: "Journal Submission Support" },
    { icon: <FaMicroscope />, title: "Reviewer Comment Support" },
    { icon: <FaBookOpen />, title: "Plagiarism & Similarity Reports" },
    { icon: <FaFeatherAlt />, title: "Advanced Formatting" },
    { icon: <FaChartLine />, title: "Thesis to Article Conversion" },
    { icon: <FaBullhorn />, title: "Publication Strategy Services" }
  ];

  const subjects = [
    { icon: <FaFlask />, title: "Science & Engineering", link: "/subjects/science-engineering" },
    { icon: <FaGlobe />, title: "Social Sciences & Humanities", link: "/subjects/social-sciences" },
    { icon: <FaHeartbeat />, title: "Health & Life Sciences", link: "/subjects/health-sciences" },
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src={LogoIcon} alt="Publication Verse Logo" className="logo-img" />
            <span className="logo-text">Publication <br /> Verse</span>
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/journals" onClick={() => setMenuOpen(false)}>Journals</Link></li>

          {/* Services Dropdown */}
          <li className={`dropdown ${openDropdown === "services" ? "open" : ""}`}>
            <button onClick={() => toggleDropdown("services")}>
              Services <span className={`arrow ${openDropdown === "services" ? "up" : ""}`}></span>
            </button>
            <div className={`dropdown-menu services-menu ${openDropdown === "services" ? "show" : ""}`}>
              {services.map((service, index) => (
                <Link
  key={index}
  to={
    service.title === "Research Article Writing"
      ? "/researcharticlewriting"
      : service.title === "Manuscript Editing"
      ? "/manuscriptediting"
      : service.title === "Journal Submission Support"
      ? "/journalsubmission"
      : service.title === "Reviewer Comment Support"
      ? "/reviewercommentsupport"
      : service.title === "Plagiarism & Similarity Reports"
      ? "/services/plagiarismandsimilarity"
      : service.title === "Advanced Formatting"
      ? "/advancedformatting"
      : service.title === "Thesis to Article Conversion"
      ? "/thesistoarticle"
      : service.title === "Publication Strategy Services"
      ? "/publicationstrategy"
      : "/services"
  }
  className="dropdown-item"
  onClick={() => setMenuOpen(false)}
>
  <span className="icon">{service.icon}</span>
  <span>{service.title}</span>
</Link>      
       ))}
            </div>
          </li>

          {/* Subjects Dropdown */}
          <li className={`dropdown ${openDropdown === "subjects" ? "open" : ""}`}>
            <button onClick={() => toggleDropdown("subjects")}>
              Subjects <span className={`arrow ${openDropdown === "subjects" ? "up" : ""}`}></span>
            </button>
            <div className={`dropdown-menu subjects-menu ${openDropdown === "subjects" ? "show" : ""}`}>
              {subjects.map((subj, index) => (
                <Link
                  key={index}
                  to={subj.link}
                  className="dropdown-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="icon">{subj.icon}</span>
                  <span>{subj.title}</span>
                </Link>
              ))}
            </div>
          </li>
          

          <li><Link to="/fees" onClick={() => setMenuOpen(false)}>Fees</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
