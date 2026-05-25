import { AGENCY_DETAILS } from "../data";
import { PageId } from "../types";
import { Shield, Users, Heart, Phone, ArrowUpRight, Award, MapPin } from "lucide-react";

interface AboutViewProps {
  setCurrentPage: (page: PageId) => void;
  openQuoteModal: () => void;
}

export default function AboutView({ setCurrentPage, openQuoteModal }: AboutViewProps) {
  const handleContactClick = () => {
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-navy-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gold-450/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-navy-900 border border-gold-500/30 text-gold-300 px-3 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-widest">
            Community Rooted Since Inception
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-tight">
            Meet Eric Farris and our <br />
            <span className="text-gold-400 font-bold">Franklin TN Agency team</span>
          </h1>
          <p className="text-navy-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            At Eric Farris Insurance, we believe in guarding futures through direct personal service, competitive products, and authentic neighborhood availability.
          </p>
        </div>
      </section>

      {/* 2. THE STORY OF ERIC FARRIS INSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest font-mono">Our History</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
                A Neighborhood Agency Built on Direct Accountability
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-navy-650 font-light leading-relaxed">
              When Eric Farris first started consulting in Middle Tennessee, he noticed a critical problem: insurance was becoming increasingly automated. National websites promised rapid quotes but delivered generic coverage calculations, leaving local families severely underinsured during massive seasonal storm winds.
            </p>

            <p className="text-sm text-navy-600 font-light leading-relaxed">
              Eric founded our Franklin agency on a singular core promise: <strong>never hide behind algorithms or automated robot hold systems.</strong> When a homeowner in Williamson County encounters storm hail or needs term advice to protect their children's futures, they deserve direct access to an active local professional's phone number.
            </p>

            <div className="p-5 bg-navy-50 rounded-2xl border border-navy-100/90 text-[13px] text-navy-800 font-light flex items-start space-x-3.5">
              <Award className="w-5 h-5 text-gold-505 flex-shrink-0 mt-0.5" />
              <div>
                <strong>The Community Champion Award:</strong> Recognized for reliable business support, local sponsorships, and active participation in Williamson County neighborhood storm recovery operations.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Visual aesthetic photo frame placeholder for Eric Farris */}
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] bg-navy-900 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Eric Farris - Principal Agent portrait placeholder representation"
                  className="object-cover w-full h-full object-top grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-x-4 bottom-4 glass-panel-dark rounded-2xl p-4 text-white">
                  <h4 className="font-display font-medium text-base text-white">Eric Farris</h4>
                  <p className="text-xs text-gold-300 font-light mt-0.5">Agency Owner & Principal Advisor</p>
                  <p className="text-[9.5px] text-navy-450 font-mono uppercase tracking-wider mt-1.5">📍 Based in Franklin, Tennessee</p>
                </div>
              </div>

              {/* Behind highlights */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400/20 rounded-full blur-xl pointer-events-none z-1"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE CORE COMMITMENTS VALUES */}
      <section className="bg-gradient-to-b from-navy-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-wider font-mono">Our Pillars</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900">
              Personalized Service, Guaranteed
            </h2>
            <p className="text-sm text-navy-500 font-light leading-relaxed">
              We live and raise our families in the exact same neighborhoods we insure. That means we enforce stringent values:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="glass-card p-8 rounded-2xl border border-white/50 shadow-md hover:shadow-xl hover:border-gold-300 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-navy-950 text-gold-400 rounded-xl flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-display font-bold text-lg text-navy-950">Accuracy First</h4>
              <p className="text-xs sm:text-sm text-slate-550 font-light leading-relaxed">
                We perform intensive replacement cost analyses, utilizing real-world Tennessee code regulations so you aren't stuck with structural financial deficits after storms.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/50 shadow-md hover:shadow-xl hover:border-gold-300 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-navy-950 text-gold-400 rounded-xl flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-display font-bold text-lg text-navy-950">Zero Sales Pressure</h4>
              <p className="text-xs sm:text-sm text-slate-550 font-light leading-relaxed">
                We consult, calculate, and advise. We don't push unneeded coverage packages. We present logical facts so you make optimal, balanced budget decisions.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/50 shadow-md hover:shadow-xl hover:border-gold-300 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-navy-950 text-gold-400 rounded-xl flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-display font-bold text-lg text-navy-950">Active Claim Advocacy</h4>
              <p className="text-xs sm:text-sm text-slate-550 font-light leading-relaxed">
                During storm damage, sorting claims on digital apps is frustrating. We inspect high-wind roofs, file reports, and champion your payout approvals ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION PANEL AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden border border-navy-850 shadow-xl">
          <div className="absolute top-1/2 left-3/4 w-[300px] h-[300px] bg-gold-400/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-gold-300 font-mono text-xs uppercase tracking-widest font-semibold flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-gold-400" />
                <span>Williamson County Regional Support</span>
              </span>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
                Want to meet Eric or request custom policy reviews?
              </h3>
              <p className="text-navy-300 font-light text-sm sm:text-base leading-relaxed max-w-xl">
                Our offices are stationed near Downtown Franklin. Drop Eric an email or set an in-person meeting to analyze your dwelling and family inheritance plans today.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:space-x-4 lg:space-x-0 lg:space-y-3.5 space-y-3 sm:space-y-0 text-center">
              <button
                onClick={openQuoteModal}
                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold py-3.5 px-6 rounded-xl shadow-md transition-all hover:scale-[1.01]"
              >
                Request Free Quote Proposal
              </button>
              
              <button
                onClick={handleContactClick}
                className="bg-navy-800 border border-navy-700 hover:bg-navy-750 text-gold-300 font-bold py-3.5 px-6 rounded-xl transition-all"
              >
                Contact Our Offices
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
