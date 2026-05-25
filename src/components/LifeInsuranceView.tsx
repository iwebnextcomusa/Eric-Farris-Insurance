import { AGENCY_DETAILS, LIFE_COVERAGES, FAQS } from "../data";
import { Heart, Sparkles, CheckCircle2, TrendingUp, AlertTriangle, ArrowUpRight } from "lucide-react";
import QuoteWorkflow from "./QuoteWorkflow";

export default function LifeInsuranceView() {
  const lifeFaqs = FAQS.filter(f => f.category === "life");

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-navy-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-navy-800 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-navy-900 border border-gold-500/30 text-gold-300 px-3 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-widest">
            Family Wealth Security
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-tight">
            Secure Your Family's Future <br />
            with <span className="text-gold-400 font-bold">Life Insurance protection</span>
          </h1>
          <p className="text-navy-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Safeguarding your loved ones doesn't have to be complex. Eric Farris specializes in structuring simple, high-value Term and Whole plans that protect home mortgages and guarantee wealth legacy.
          </p>
        </div>
      </section>

      {/* 2. TERM VS WHOLE SPLIT TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {LIFE_COVERAGES.map((cov, idx) => {
            const isTerm = idx === 0;
            return (
              <div key={idx} className={`rounded-3xl p-8 border ${isTerm ? "glass-card border-white/40 shadow-md hover:shadow-xl hover:border-gold-300 transition-all duration-300" : "bg-navy-950 border-white/10 text-white shadow-2xl hover:shadow-gold-500/5 transition-all duration-300"} flex flex-col justify-between space-y-6`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${isTerm ? "bg-navy-950 text-gold-400" : "bg-white/10 text-gold-400"}`}>
                      {isTerm ? <TrendingUp className="w-6 h-6" /> : <Heart className="w-6 h-6" />}
                    </div>
                    <div className="text-left">
                      <h3 className={`font-display font-bold text-xl ${isTerm ? "text-navy-950" : "text-white"}`}>{cov.title}</h3>
                      <p className={`text-xs ${isTerm ? "text-slate-500" : "text-navy-300 font-light"}`}>{cov.subtitle}</p>
                    </div>
                  </div>

                  <p className={`text-left text-sm ${isTerm ? "text-slate-600" : "text-navy-200 font-light"} leading-relaxed`}>
                    {cov.description}
                  </p>

                  <div className={`h-[1px] ${isTerm ? "bg-slate-100" : "bg-navy-800"} my-2`}></div>
                  
                  <p className="text-left text-xs uppercase tracking-wider font-bold text-gold-550">Core Benefits Included:</p>
                  <ul className="space-y-2 text-left">
                    {cov.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm">
                        <CheckCircle2 className="w-4.5 h-4.5 text-gold-505 mr-2.5 flex-shrink-0 mt-0.5" />
                        <span className={isTerm ? "text-navy-950 font-light" : "text-navy-200 font-light"}>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-navy-400">Guaranteed Williamson policy</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DUAL VALUE MESSAGING BOARD */}
      <section className="bg-navy-100/50 border-y border-slate-200/80 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-navy-850 uppercase tracking-wider font-mono">Calculators & Metrics</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-950">
              How Much Life Coverage Is Correct?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
              A general financial safety benchmark is aiming for 10-12x your annual gross earnings. Let's look at the financial variables standard policies protect:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-350 space-y-2">
              <h4 className="font-display font-bold text-base text-navy-950">Outstanding Debt</h4>
              <p className="text-xs text-slate-550 font-light leading-relaxed">
                Replaces income required to pay off mortgages, ensuring your spouse and children are never displaced from their home.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-350 space-y-2">
              <h4 className="font-display font-bold text-base text-navy-950">Education Funds</h4>
              <p className="text-xs text-slate-550 font-light leading-relaxed">
                Establishes locked college budgets for children, guaranteeing their academic prospects in the future regardless of life's curveballs.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-350 space-y-2">
              <h4 className="font-display font-bold text-base text-navy-950">Income Replacement</h4>
              <p className="text-xs text-slate-550 font-light leading-relaxed">
                Provides your partner with sustainable ongoing liquid cash to cover property taxes, food, and standard daily life requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION SPLIT ROW WITH INLINE QUOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest font-mono">Guaranteed Peace Of Mind</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
                Direct Consultations. No Medical Hassles.
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-navy-650 font-light leading-relaxed">
              Securing life insurance is an act of deep caring. When you structure quotes with Eric, we identify underwriting carriers that bypass traditional high-stress medical examinations where possible, streamlining approval times to under 48 hours.
            </p>

            <div className="p-5 bg-gold-55/40 border border-gold-150/70 rounded-2xl space-y-2">
              <span className="flex items-center space-x-2 text-gold-750 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-gold-505" />
                <span>Lock In Youth Rates Today</span>
              </span>
              <p className="text-xs text-navy-800 font-light leading-relaxed">
                Life insurance rates scale significantly as we age. Every year you postpone, standard base premiums can climb by 8% to 12%. Securing long-term agreements while young and healthy preserves massive monetary savings!
              </p>
            </div>

            <div className="bg-navy-900 p-5 rounded-2xl border border-navy-800 text-white space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-400">Eric's Direct Commitment</p>
              <p className="text-xs text-navy-200 font-light leading-relaxed">
                "We don't sell fear. We structure realistic math calculations so that you sleep well knowing your household balance sheet is absolutely stable, no matter the future."
              </p>
              <p className="text-xs font-semibold text-gold-400">— Eric Farris, Agency Principal</p>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7">
            <QuoteWorkflow defaultInterest="life" />
          </div>

        </div>
      </section>

      {/* 5. FAQs CATEGORY LIST */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <Heart className="w-8 h-8 text-gold-550 mx-auto" />
          <h2 className="font-display font-medium text-2xl text-navy-900 tracking-tight">
            Life Insurance FAQ Guide
          </h2>
          <p className="text-xs sm:text-sm text-navy-500 font-light max-w-lg mx-auto">
            Review standard client questions about benefit payouts and term policy expirations.
          </p>
        </div>

        <div className="space-y-4">
          {lifeFaqs.map((faq, i) => (
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
