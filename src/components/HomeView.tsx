import { PageId } from "../types";
import { AGENCY_DETAILS, TESTIMONIALS, FAQS } from "../data";
import { Shield, Phone, ArrowUpRight, CheckCircle2, Star, CloudLightning, Home, Heart, Users } from "lucide-react";

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  openQuoteModal: () => void;
}

export default function HomeView({ setCurrentPage, openQuoteModal }: HomeViewProps) {
  const handlePageChange = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative bg-navy-950 text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Radial Glows */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gold-400/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none animate-pulse duration-5000"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[550px] bg-navy-600/20 rounded-full blur-[140px] -ml-40 -mb-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Main Hero Copys */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-navy-900 border border-gold-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-widest font-mono">
                Franklin, Tennessee Local Agency
              </span>
            </div>

            <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              Protect What <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-400 font-bold">Matters Most</span>
            </h1>

            <p className="text-navy-200 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              From historic downtown houses to securing your family's financial inheritances, Eric Farris Insurance brings premier local care and competitive home and life coverage directly to Williamson County families.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 select-none">
              <button
                onClick={openQuoteModal}
                className="bg-gold-400 hover:bg-gold-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-gold-500/20 glow-gold tracking-wide text-center transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Get a Free Quote
              </button>
              
              <a
                href={`tel:${AGENCY_DETAILS.phone}`}
                className="bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 px-8 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-white">Call {AGENCY_DETAILS.phone}</span>
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div>
                <p className="font-display font-bold text-xl sm:text-2xl text-gold-400">100%</p>
                <p className="text-[10px] sm:text-xs text-navy-200 font-light mt-0.5">Local Consultation</p>
              </div>
              <div>
                <p className="font-display font-medium text-xl sm:text-2xl text-gold-400">Direct</p>
                <p className="text-[10px] sm:text-xs text-navy-200 font-light mt-0.5">Cell & Personal Support</p>
              </div>
              <div>
                <p className="font-display font-bold text-xl sm:text-2xl text-gold-400">Franklin</p>
                <p className="text-[10px] sm:text-xs text-navy-200 font-light mt-0.5">Community Centered</p>
              </div>
            </div>
          </div>

          {/* Right side 3D glassmorphic mock panel */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Main premium illustration card */}
              <div className="glass-panel-dark rounded-2xl p-6 border border-white/20 shadow-2xl relative z-15 backdrop-blur-xl rotate-1 group hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider bg-gold-405/20 text-gold-300 p-1 rounded font-mono font-medium">Policy status: active</span>
                    <h3 className="font-display font-bold text-lg text-white mt-2">Williamson County Shield</h3>
                  </div>
                  <Shield className="w-8 h-8 text-gold-400" />
                </div>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 text-blue-300 rounded-lg flex items-center justify-center">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Homeowners Insurance</p>
                        <p className="text-[9px] text-navy-300">Dwelling replacement cost protected</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  {/* Item 2 */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-500/20 text-pink-300 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Life Benefit Shield</p>
                        <p className="text-[9px] text-navy-300">Guaranteed legacy wealth creation</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-900 text-center">
                  <p className="text-[10px] text-navy-450 uppercase tracking-widest font-mono">Verified agent credit: Eric Farris</p>
                </div>
              </div>

              {/* Backing stylized cards to emphasize 3D layered structure */}
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl shadow-xl -skew-y-2 -translate-y-2 z-5"></div>
              <div className="absolute top-8 left-8 right-8 bottom-8 bg-gold-450/40 rounded-2xl -skew-y-3 -translate-y-4 z-1 shadow-2xl blur-xs"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE ERIC FARRIS INSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy-900 tracking-tight">
            Why Middle Tennessee Families Single Out <span className="text-gold-600 font-bold">Eric Farris</span>
          </h2>
          <p className="text-base text-navy-600 font-light leading-relaxed">
            Unlike massive impersonal call centers or automated rate aggregators, our agency is built on immediate voice response, local storm analysis, and personalized reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:text-gold-300 transition-colors duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Direct Local Touch</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Skip the hold queues. When you call, you speak directly with our regional Tennessee office. We know Franklin's local neighborhoods and building costs inside and out.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:text-gold-300 transition-colors duration-300">
              <CloudLightning className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Storm Damage Ready</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Spring tornados and hail are factors here. We structure policies so you have realistic windstorm deductibles and don't end up absorbing thousands in out-of-pocket costs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 bg-navy-50 text-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:text-gold-300 transition-colors duration-300">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Multi-Carrier Options</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We shop around on your behalf. By comparing quotes across premier underwriters, we lock in maximum liability limits for your home or life coverage.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE OVERVIEWS (HOME & LIFE) */}
      <section className="bg-gradient-to-b from-navy-50 via-white to-navy-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Home Insurance Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <div className="w-10 h-10 bg-gold-400 text-navy-950 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 tracking-tight">
                Comprehensive Home & Dwelling Insurance
              </h3>
              <p className="text-sm sm:text-base text-navy-600 font-light leading-relaxed">
                Protecting your home is more than insuring walls. We check local real estate valuation models to ensure your dwelling, detached garage, personal structures, and interior assets are guarded fully.
              </p>
              
              <ul className="space-y-2.5 text-sm text-navy-800">
                <li className="flex items-center"><CheckCircle2 className="w-4.5 h-4.5 text-gold-500 mr-2" /> Dwelling Coverage (Replacement-cost calculation)</li>
                <li className="flex items-center"><CheckCircle2 className="w-4.5 h-4.5 text-gold-500 mr-2" /> Hail, Wind, & Tornado Hazard riders</li>
                <li className="flex items-center"><CheckCircle2 className="w-4.5 h-4.5 text-gold-500 mr-2" /> Comprehensive Personal Liability Shield</li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handlePageChange("home-insurance")}
                  className="text-navy-950 hover:text-gold-600 font-bold text-sm tracking-wide inline-flex items-center group cursor-pointer"
                >
                  <span>Explore Home Coverages</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 glass-card p-6 rounded-3xl shadow-xl border border-white/40 order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-50 relative group">
                <img
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80"
                  alt="Beautiful suburban home in Franklin Tennessee representation"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                  <p className="text-xs text-gold-300 font-semibold font-mono tracking-widest uppercase">Safe & Protected</p>
                  <h4 className="font-display font-bold text-lg mt-1">Insure Franklin homes including historic designs & modern Westhaven properties</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Life Insurance Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 glass-card p-6 shadow-xl border border-white/40">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-50 relative group">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Happy family laughing outdoors representing protection"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                  <p className="text-xs text-gold-300 font-semibold font-mono tracking-widest uppercase">Legacy Protection</p>
                  <h4 className="font-display font-bold text-lg mt-1">Term and Whole options structured for family inheritance</h4>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="w-10 h-10 bg-gold-400 text-navy-950 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 tracking-tight">
                Family Security through Life Insurance
              </h3>
              <p className="text-sm sm:text-base text-navy-600 font-light leading-relaxed">
                Whether selecting affordable 20/30-year Term agreements to cover mortgage debt or Whole policies generating solid wealth legacies, we consult with you directly to matches plans with household growth goals.
              </p>
              
              <ul className="space-y-2.5 text-sm text-navy-800">
                <li className="flex items-center"><CheckCircle2 className="w-4.5 h-4.5 text-gold-500 mr-2" /> Income protection models for active earners</li>
                <li className="flex items-center"><CheckCircle2 className="w-4.5 h-4.5 text-gold-500 mr-2" /> Outstanding debt & mortgage payout security</li>
                <li className="flex items-center"><CheckCircle2 className="w-4.5 h-4.5 text-gold-500 mr-2" /> Legacy planning options with convertible terms</li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handlePageChange("life-insurance")}
                  className="text-navy-950 hover:text-gold-600 font-bold text-sm tracking-wide inline-flex items-center group cursor-pointer"
                >
                  <span>Explore Life Policies</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LOCAL TRUST SIGNALS & COUNTY ROOTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-gold-100 text-gold-700 text-xs px-3 py-1 rounded-full font-semibold font-mono uppercase tracking-wider">
            Williamson County Rooted
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy-900 tracking-tight">
            We Know and Serve Franklin, Tennessee
          </h2>
          <p className="text-base text-navy-600 font-light leading-relaxed">
            Eric Farris Insurance is deeply woven into the local fabric. When we discuss policies, we aren't generic agent representations; we're analyzing actual Tennessean risks and municipal storm factors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold-300 transition-all duration-300 text-left">
            <h4 className="font-display font-bold text-lg text-navy-950 mb-1">Downtown Franklin</h4>
            <p className="text-xs text-slate-550 font-light">Heritage coverage specializing in protecting mature trees and aging historic structures on major roads.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold-300 transition-all duration-300 text-left">
            <h4 className="font-display font-bold text-lg text-navy-950 mb-1">Cool Springs</h4>
            <p className="text-xs text-slate-550 font-light">High-value residential and life packages for working young executives near primary commerce channels.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold-300 transition-all duration-300 text-left">
            <h4 className="font-display font-bold text-lg text-navy-950 mb-1">Westhaven</h4>
            <p className="text-xs text-slate-550 font-light">Modern master-planned neighborhood dwelling protection keeping up with standard building material cost trends.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gold-300 transition-all duration-300 text-left">
            <h4 className="font-display font-bold text-lg text-navy-950 mb-1">Brentwood</h4>
            <p className="text-xs text-slate-550 font-light">High-limit estate security and legacy term solutions safeguarding multi-generation goals.</p>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER TESTIMONIALS CAROUSEL BENTO */}
      <section className="bg-[#0a1d37] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[355px] bg-[#122e54] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-display text-3xl font-bold text-white tracking-tight">
              Honorable Reviews from Local Clients
            </h2>
            <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              Read real-world feedback from families in Westhaven and historic central Franklin who rely on Eric's coverage recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-8 rounded-2xl shadow-md border border-white/30 space-y-4 flex flex-col justify-between hover:border-gold-400/40 hover:-translate-y-1.5 transition-all duration-300">
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gold-550 space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed font-light italic">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                  <div className="text-left">
                    <h4 className="font-bold text-navy-950">{t.name}</h4>
                    <p className="text-slate-400 font-light mt-0.5">{t.role}</p>
                  </div>
                  <span className="bg-slate-100 text-gold-600 px-2.5 py-1 rounded-md font-semibold tracking-wide uppercase font-mono text-[9px]">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ PREVIEW SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display font-semibold text-3xl text-navy-900 tracking-tight">
            Frequently Answered Insurance Questions
          </h2>
          <p className="text-sm sm:text-base text-navy-600 font-light leading-relaxed">
            Quick, standard insights to help you guide your homeowners and permanent inheritance plans.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 3).map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-2 text-left">
              <h4 className="font-display font-bold text-base text-navy-900 flex items-start">
                <span className="text-gold-550 mr-2.5">Q.</span>
                {faq.question}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed pl-5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => handlePageChange("contact")}
            className="text-gold-600 hover:text-gold-700 font-bold text-sm tracking-wide inline-flex items-center cursor-pointer"
          >
            <span>Have another question? Speak to Eric directly</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </section>

      {/* 7. DYNAMIC CONTACT CTA ROW BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1d37] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-white/15 shadow-2xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-400/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="max-w-3xl space-y-6 relative z-10 text-left">
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-white tracking-tight leading-none">
              Ready to Lock in Secure <br />Home & Family Protection?
            </h2>
            <p className="text-slate-200 font-light text-base leading-relaxed max-w-xl">
              Don't leave your protection to automated online guesswork. Get a localized, precise consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={openQuoteModal}
                className="bg-gold-400 hover:bg-gold-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-gold-400/20 glow-gold transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Request Free Quote Proposal
              </button>
              <a
                href={`tel:${AGENCY_DETAILS.phone}`}
                className="bg-white/10 backdrop-blur-md text-gold-300 border border-white/20 hover:bg-white/20 px-8 py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {AGENCY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
