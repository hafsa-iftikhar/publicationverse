import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";   // ✅ IMPORT FOOTER

import About from "./pages/About";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
import Journals from "./pages/Journals";
import ScienceEngineering from "./pages/Subjects/ScienceEngineering";
import Socialsciences from "./pages/Subjects/Socialsciences";
import HealthSciences from "./pages/Subjects/Healthsciences";
import JournalSubmissionSupport from "./pages/Services/journalsubmission";
import ManuscriptEditing from "./pages/Services/manuscriptediting";
import ResearchArticleWriting from "./pages/Services/researcharticlewriting";
import ReviewerCommentSupport from "./pages/Services/reviewercommentsupport";
import PlagiarismReports from "./pages/Services/plagiarismandsimilarity";
import AdvancedFormatting from "./pages/Services/advancedformatting";
import ThesisToArticle from "./pages/Services/thesistoarticle";
import PublicationStrategy from "./pages/Services/publicationstrategy";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/researcharticlewriting" element={<ResearchArticleWriting />} />
          <Route path="/manuscriptediting" element={<ManuscriptEditing />} />
          <Route path="/journalsubmission" element={<JournalSubmissionSupport />} />
          <Route path="/reviewercommentsupport" element={<ReviewerCommentSupport />} />
          <Route path="/services/plagiarismandsimilarity" element={<PlagiarismReports />} />
          <Route path="/advancedformatting" element={<AdvancedFormatting />} />
          <Route path="/thesistoarticle" element={<ThesisToArticle />} />
          <Route path="/publicationstrategy" element={<PublicationStrategy />} />

          {/* Subjects */}
          <Route path="/subjects/science-engineering" element={<ScienceEngineering />} />
          <Route path="/subjects/health-sciences" element={<HealthSciences />} />
          <Route path="/subjects/social-sciences" element={<Socialsciences />} />
        </Routes>

        <Footer /> {/* ✅ SHOW FOOTER ON ALL PAGES */}
      </Router>
    </HelmetProvider>
  );
}

export default App;
