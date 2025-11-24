import React, { useState } from "react";
import "./Fees.css";
import { Helmet } from "react-helmet-async"; 

const ApplicationModal = ({ isOpen, onClose, journalType }) => {
  if (!isOpen) return null;

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevents clicks inside the modal from closing it
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="application-modal-content" onClick={handleModalContentClick}>
        
        {/* Close button with 'x' icon */}
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        {/* Modal Header content based on your image */}
        <h3 className="modal-header-title">Initiate Your Application</h3>
        {/* FIX: Removed extraneous '>' at the end of this tag */}
        <p className="modal-header-subtitle">Kindly provide your essential contact details below.</p>

        {/* The little form matching your requested fields and the image design */}
        <form className="modal-apply-form" method="POST" action="/sendEmail.php">
            
            {/* Hidden input for context */}
            <input type="hidden" name="journal_category" value={journalType || 'General'} />

            {/* 👇 NEW CONTAINER FOR TWO-COLUMN LAYOUT (Full Name & Phone No) 👇 */}
            <div className="modal-row-fields">
                {/* Full Name (LEFT COLUMN) */}
                <div className="input-group">
                    <label htmlFor="modal-full-name">Full Name:*</label>
                    <input 
                      id="modal-full-name" 
                      type="text" 
                      name="full_name" 
                      required 
                    />
                </div>

                {/* Phone No (RIGHT COLUMN) */}
                <div className="input-group">
                    <label htmlFor="modal-phone">Phone No:*</label>
                    <input 
                      id="modal-phone" 
                      type="tel" 
                      name="phone" 
                      required 
                    />
                </div>
            </div>
            
            {/* Email (FULL WIDTH ROW BELOW) */}
            <div className="input-group">
                <label htmlFor="modal-email">Email:*</label>
                <input 
                  id="modal-email" 
                  type="email" 
                  name="email" 
                  required 
                />
            </div>

            {/* Message Box (FULL WIDTH ROW AT THE BOTTOM) */}
            <div className="input-group">
                <label htmlFor="modal-message">Message:</label>
                <textarea
                  id="modal-message" 
                  name="message"
                  rows="2" // Set to 2 rows to keep it very short
                  placeholder="Enter your message here (optional)"
                ></textarea>
            </div>

            {/* Register Button */}
            <button type="submit" className="submit-modal-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

const feesData = [
  { feature: "Ranking Percentile", Q1: "Top 25%", Q2: "25% - 50%", Q3: "50% - 75%", Q4: "Bottom 25%" },
  { feature: "Journal Selection", Q1: "✅", Q2: "✅", Q3: "✅", Q4: "✅" },
  { feature: "Research Level", Q1: "Senior Researchers", Q2: "Midcareer Researchers", Q3: "Early Researchers", Q4: "Quick Publications" },
  { feature: "Manuscript Formatting", Q1: "✅", Q2: "✅", Q3: "✅", Q4: "✅" },
  { feature: "Letter Drafting", Q1: "✅", Q2: "❌", Q3: "❌", Q4: "❌" },
  { feature: "Journal Quality", Q1: "✅", Q2: "Well-Reputed", Q3: "Average Citations", Q4: "Low Citations" },
  { feature: "Plagiarism Checking", Q1: "Very High", Q2: "✅", Q3: "✅", Q4: "✅" },
  { feature: "Reputation", Q1: "Very High", Q2: "High", Q3: "Moderate", Q4: "Low" },
  { feature: "Proofreading", Q1: "✅", Q2: "✅", Q3: "✅", Q4: "✅" },
  { feature: "Impact Factor", Q1: "High (>2.0 to 10.0+)", Q2: "Medium (1.0 - 3.0)", Q3: "Low (0.5 - 0.9)", Q4: "Very Low (<0.5)" },
  { feature: "Manuscript Submission", Q1: "✅", Q2: "✅", Q3: "✅", Q4: "✅" },
  { feature: "Article Promotion", Q1: "✅", Q2: "✅", Q3: "❌", Q4: "❌" },
  { feature: "Citation Strategies", Q1: "✅", Q2: "❌", Q3: "❌", Q4: "❌" },
  { feature: "Indexing & Archiving", Q1: "✅", Q2: "✅", Q3: "✅", Q4: "✅" },
  { feature: "Review Process", Q1: "Very Rigorous", Q2: "Rigorous", Q3: "Moderate", Q4: "Lenient" },
  // FIX: Ensured the last item uses the 'feature' key consistently for table rendering.
  { feature: "Indexing", Q1: "Web of Science, Scopus", Q2: "Web of Science, Scopus", Q3: "Scopus, DOAJ", Q4: "DOAJ, Scopus" },
];

const applicationFees = [
  { price: "$125/$250", label: "Apply Now", journal: "Q1" },
  { price: "$100/$200", label: "Apply Now", journal: "Q2" },
  { price: "$75/$150", label: "Apply Now", journal: "Q3" },
  { price: "$50/$100", label: "Apply Now", journal: "Q4" },
];

const Fees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState('');

  const handleApplyClick = (journal) => {
    setSelectedJournal(journal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJournal('');
  };

  return (
    <div className="fees-page">
      <Helmet>
        <title>Fees | Publication Verse</title>
        <meta
          name="description"
          content="Transparent publication fee structure with discounts for researchers. Explore fair pricing across Q1–Q4 journals with Publication Verse."
        />
        <meta
          name="keywords"
          content="publication fees, research pricing, journal cost, Q1 journals, academic publishing rates"
        />
        <link rel="canonical" href="https://publicationverse.com/fees" />
      </Helmet>

      <section className="fees-hero">
        <div className="fees-hero-content">
          <h1>Registration Fees</h1>
          <p>
            We believe great service shouldn’t come with a hefty price tag. That’s why our pricing is designed to be fair, transparent, and accessible—giving you the best value without compromising on quality.
          </p>
        </div>
      </section>

      <section className="fees-table-section">
        <div className="fees-table">
          <div className="fees-header-row">
            <div className="fees-feature">Feature / Metric</div>
            <div className="fees-col">Q1 </div>
            <div className="fees-col">Q2 </div>
            <div className="fees-col">Q3 </div>
            <div className="fees-col">Q4 </div>
          </div>

          {feesData.map((row, idx) => (
            <div key={idx} className={`fees-row ${idx % 2 === 0 ? "even-row" : "odd-row"}`}>
              <div className="fees-feature">{row.feature}</div>
              {[row.Q1, row.Q2, row.Q3, row.Q4].map((val, i) => (
                <div
                  key={i}
                  className={`fees-col ${val === "✅" ? "green-check" : val === "❌" ? "red-cross" : ""}`}
                >
                  {val}
                </div>
              ))}
            </div>
          ))}

          <div className="fees-row application-row">
            <div className="fees-feature">Application Fee</div>
            {applicationFees.map((fee, i) => {
              const [currentPrice, oldPrice] = fee.price.split("/");
              const journalCategory = fee.journal;

              return (
                <div key={i} className="fees-col">
                  {/* Using the correct class 'price-container-flex' defined in Fees.css */}
                  <div className="price-container-flex"> 
                    <div className="price">
                      <span className="price-small">{currentPrice}</span>
                      <span className="price-cut">{oldPrice}</span>
                    </div>
                    
                    <button 
                      className="apply-btn"
                      onClick={() => handleApplyClick(journalCategory)} 
                    >
                      APPLY NOW
                    </button>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fees-table-section">
        <div className="fees-tagline">
          50% OFF TILL November 21, 2025
          <span className="limited-slots">(Limited Slots)</span>
        </div>
      </section>

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        journalType={selectedJournal} 
      />
    </div>
  );
};

export default Fees;