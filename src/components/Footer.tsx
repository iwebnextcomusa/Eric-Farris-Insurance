import { AGENCY_DETAILS } from "../data";
import { PageId } from "../types";
import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  openQuoteModal: () => void;
}

export default function Footer({ setCurrentPage, openQuoteModal }: FooterProps) {
  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-900 pt-16 pb-8">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick("home")}>
              <div className="bg-gold-400 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-navy-950" />
              </div>
              <span className="font-display font-bold text-lg text-white">Eric Farris Insurance</span>
            </div>
            
            <p className="text-sm text-navy-300 leading-relaxed font-light">
              Trusted, local, and neighborhood-focused home and life insurance agents based in beautiful Franklin, Tennessee. Dedicated to safeguarding Williamson County families.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-navy-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center text-navy-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">
              Insurance Programs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick("home-insurance")} 
                  className="hover:text-gold-400 transition-colors text-left font-light hover:underline"
                >
                  Franklin Home Insurance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("home-insurance")} 
                  className="hover:text-gold-400 transition-colors text-left font-light hover:underline"
                >
                  Dwelling & Hazard Protection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("life-insurance")} 
                  className="hover:text-gold-400 transition-colors text-left font-light hover:underline"
                >
                  Term Life Insurance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("life-insurance")} 
                  className="hover:text-gold-400 transition-colors text-left font-light hover:underline"
                >
                  Whole Family Life Protection
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">
              Agency Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-gold-400 font-light transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-gold-400 font-light transition-colors">
                  Meet Eric Farris
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="hover:text-gold-400 font-light transition-colors">
                  Contact Our Office
                </button>
              </li>
              <li>
                <button onClick={openQuoteModal} className="text-gold-400 hover:text-gold-300 font-semibold transition-colors flex items-center">
                  <span>Request a Free Quote</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Local Offices
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="font-light">{AGENCY_DETAILS.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0" />
                <a href={`tel:${AGENCY_DETAILS.phone}`} className="hover:text-gold-400 transition-colors font-medium">
                  {AGENCY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0" />
                <a href={`mailto:${AGENCY_DETAILS.email}`} className="hover:text-gold-400 transition-colors font-light">
                  {AGENCY_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-navy-900 my-8"></div>

        {/* Bottom Section with Author Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-navy-400 space-y-4 md:space-y-0">
          <div>
            <p>© {new Date().getFullYear()} {AGENCY_DETAILS.name}. All Rights Reserved.</p>
            <p className="mt-1 font-light">Custom policies underwritten by premier local and national carriers.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-navy-300 font-medium">
              Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors font-bold select-all">iWebNext</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
