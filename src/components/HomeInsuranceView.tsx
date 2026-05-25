import { AGENCY_DETAILS, HOME_COVERAGES, FAQS } from "../data";
import { Shield, Sparkles, Check, Phone, ArrowUpRight, HelpCircle } from "lucide-react";
import QuoteWorkflow from "./QuoteWorkflow";

export default function HomeInsuranceView() {
  const homeFaqs = FAQS.filter(f => f.category === "home");

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-navy-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gold-450/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-navy-900 border border-gold-500/30 text-gold-300 px-3 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-widest">
            Homeowners Hazard Protection
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-tight">
            Reliable Homeowners Insurance in <br />
            <span className="text-gold-400 font-bold">Franklin, Tennessee</span>
          </h1>
          <p className="text-navy-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From historic craftsman bungalows near downtown Franklin to luxury brick estates in Brentwood, we customize dwellying and high-wind structures protection to matches Middle Tennessee storm factors.
          </p>
        </div>
      </section>

      {/* 2. COVERAGE SPLITS & BENEFIT BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOME_COVERAGES.map((cov, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-white/50 shadow-md hover:shadow-xl hover:border-gold-350 hover:-translate-y-1 transition-all duration-300 space-y-4 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy-950 text-gold-400 rounded-xl flex items-center justify-center font-bold shadow-md">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy-950">{cov.title}</h3>
                  <p className="text-xs text-gold-600 font-mono tracking-wider font-semibold uppercase">Category Guaranteed</p>
                </div>
              </div>
              
              <p className="text-sm font-semibold text-navy-900 leading-relaxed pt-1">
                {cov.description}
              </p>
              
              <p className="text-xs sm:text-sm text-slate-550 font-light leading-relaxed">
                {cov.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STORM INSURANCE CLAIM SUPPORT STATEMENT */}
      <section className="bg-gold-50 border-y border-gold-150 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-block bg-gold-200 text-gold-900 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
            Severe Weather Protection
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-950">
            Rapid Personal Claim Management
          </h2>
          <p className="text-sm sm:text-base text-navy-900 font-light leading-relaxed max-w-2xl mx-auto">
            When major thunderstorms, tornado winds, or hail hits Williamson County, the last thing you want is a generic national insurance robot claiming your area is out of network. 
            <strong> Eric Farris stands with you.</strong> We work with storm adjusters directly to guarantee your rebuilding operations begin immediately.
          </p>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <span className="text-xs text-navy-600 font-medium">Have damage or emergency claim concerns? Call Eric:</span>
            <a href={`tel:${AGENCY_DETAILS.phone}`} className="text-gold-950 font-bold hover:underline inline-flex items-center text-sm sm:text-base flex-shrink-0">
              <Phone className="w-4 h-4 mr-1.5" />
              {AGENCY_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION SPLIT ROW with inline Quote form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest font-mono">Risk Mitigations</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
                Check Rebuilding Valuation Variables
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-navy-650 font-light leading-relaxed">
              Franklin building material fees fluctuate. Rebuilding costs have increased over 20% in the last few years. If your home has not had its replacement cost recalculations reviewed in over 18 months, you might be significantly under-covered.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start">
                <div className="w-5 h-5 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-navy-800 font-light">
                  <strong className="font-semibold text-navy-950">Free replacement cost calculation</strong> using regional Williamson building metrics.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-navy-800 font-light">
                  <strong className="font-semibold text-navy-950">Loss of Use allocations</strong> ensuring temporary housing budgets match local Franklin rents.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-navy-800 font-light">
                  <strong className="font-semibold text-navy-950">Personal belongings valuation</strong> securing expensive heirloom decor & tech appliances.
                </p>
              </div>
            </div>
            
            <div className="bg-navy-900 p-5 rounded-xl border border-navy-800 text-white space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-400">Claims Tip</p>
              <p className="text-xs text-navy-200 font-light leading-relaxed">
                Take high-definition photos of your roof, detached structures, and high-value interior jewelry once a year. Keeping records on virtual cloud servers makes claim payouts much smoother!
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteWorkflow defaultInterest="home" />
          </div>

        </div>
      </section>

      {/* 5. FAQs CATEGORY LIST */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <HelpCircle className="w-8 h-8 text-gold-550 mx-auto" />
          <h2 className="font-display font-medium text-2xl text-navy-900 tracking-tight">
            Home Insurance Frequently Answered Questions
          </h2>
          <p className="text-xs sm:text-sm text-navy-500 font-light max-w-lg mx-auto">
            Learn more about Williamson County home coverage requirements and storm claims process with Eric's simple guidelines.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs text-left">
              <h4 className="font-display font-bold text-base text-navy-900">{faq.question}</h4>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2 pl-2 border-l-2 border-gold-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
