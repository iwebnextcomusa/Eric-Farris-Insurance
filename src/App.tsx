import { useState } from "react";
import { PageId } from "./types";

// Import modular layouts
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import HomeInsuranceView from "./components/HomeInsuranceView";
import LifeInsuranceView from "./components/LifeInsuranceView";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";

// Import utility widgets
import ChatbotWidget from "./components/ChatbotWidget";
import ScrollToTop from "./components/ScrollToTop";
import SEOContent from "./components/SEOContent";
import QuoteWorkflow from "./components/QuoteWorkflow";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  // Router dispatcher
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <HomeView setCurrentPage={setCurrentPage} openQuoteModal={openQuoteModal} />;
      case "home-insurance":
        return <HomeInsuranceView />;
      case "life-insurance":
        return <LifeInsuranceView />;
      case "about":
        return <AboutView setCurrentPage={setCurrentPage} openQuoteModal={openQuoteModal} />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} openQuoteModal={openQuoteModal} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-navy-950 font-sans selection:bg-gold-200 selection:text-navy-900 transition-colors duration-300">
      
      {/* 1. SEO Schema markup inject side-effects */}
      <SEOContent />

      {/* 2. Global Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        openQuoteModal={openQuoteModal} 
      />

      {/* 3. Primary Page Slots with subtle entry animations */}
      <main className="flex-grow">
        <div className="animate-in fade-in duration-300">
          {renderPageContent()}
        </div>
      </main>

      {/* 4. Global Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        openQuoteModal={openQuoteModal} 
      />

      {/* 5. Floating Interactive AI Helper widget */}
      <ChatbotWidget />

      {/* 6. Floating Scroll to Top button */}
      <ScrollToTop />

      {/* 7. Overlay Proposal Modal Trigger */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <QuoteWorkflow isModal={true} onClose={closeQuoteModal} />
        </div>
      )}

    </div>
  );
}
