import { useState, useEffect } from "react";
import { PageId } from "../types";
import { AGENCY_DETAILS } from "../data";
import { Shield, Phone, Menu, X, Clock, MapPin } from "lucide-react";

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  openQuoteModal: () => void;
}

export default function Header({ currentPage, setCurrentPage, openQuoteModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "home-insurance", label: "Home Insurance" },
    { id: "life-insurance", label: "Life Insurance" },
    { id: "about", label: "About Eric" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Notification Bar - Preheader */}
      <div className="bg-navy-950 text-navy-200 text-xs py-2 px-4 border-b border-navy-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center sm:px-6">
          <div className="flex items-center space-x-5">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              {AGENCY_DETAILS.location}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              {AGENCY_DETAILS.hours}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-navy-300">Direct Agent Line:</span>
            <a href={`tel:${AGENCY_DETAILS.phone}`} className="text-gold-300 hover:text-gold-200 font-semibold tracking-wide flex items-center transition-colors">
              <Phone className="w-3 h-3 mr-1 text-gold-400" />
              {AGENCY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/75 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white/70 backdrop-blur-sm border-b border-slate-200/50 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="bg-navy-950 p-2.5 rounded-xl shadow-md shadow-navy-950/10 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5.5 h-5.5 text-gold-400 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display text-lg sm:text-2xl font-extrabold tracking-tight text-navy-950 leading-none">
                  Eric Farris
                </span>
                <span className="font-display text-xs sm:text-sm font-bold text-gold-550 uppercase tracking-widest leading-none">
                  Insurance
                </span>
              </div>
              <p className="text-[10px] text-slate-450 -mt-0.5 tracking-wide hidden sm:block">
                {AGENCY_DETAILS.tagline}
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as PageId)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-250 cursor-pointer ${
                    isActive
                      ? "text-navy-950 underline underline-offset-4 decoration-gold-400 decoration-2 font-bold"
                      : "text-slate-600 hover:text-navy-950 hover:bg-slate-100/50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* DESKTOP CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${AGENCY_DETAILS.phone}`}
              className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200/75 px-4 py-2 rounded-lg text-sm text-navy-950 font-bold border border-slate-250/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-550" />
              <span>{AGENCY_DETAILS.phone}</span>
            </a>
            
            <button
              onClick={openQuoteModal}
              className="bg-gold-400 hover:bg-gold-500 text-white font-bold px-5 py-2.5 rounded-lg text-sm shadow-md shadow-gold-500/20 tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href={`tel:${AGENCY_DETAILS.phone}`}
              className="p-2.5 bg-slate-100 text-navy-950 rounded-xl hover:bg-slate-200 active:scale-95 transition-all shadow-sm"
              title="Call Eric Directly"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-navy-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-205 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as PageId)}
                    className={`w-full text-left py-3 px-4 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? "text-navy-950 bg-slate-50 border-l-4 border-gold-400 pl-3"
                        : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="h-[1px] bg-slate-100 my-2"></div>

            <div className="flex flex-col space-y-3 pt-2">
              <a
                href={`tel:${AGENCY_DETAILS.phone}`}
                className="w-full flex items-center justify-center space-x-3 bg-slate-50 border border-slate-200 text-navy-950 py-3 rounded-xl font-bold transition-transform active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-gold-550" />
                <span>Call {AGENCY_DETAILS.phone}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full bg-gold-400 hover:bg-gold-500 text-white font-bold py-3.5 rounded-xl shadow-md text-center"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
