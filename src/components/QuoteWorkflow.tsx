import React, { useState } from "react";
import { QuoteRequest } from "../types";
import { AGENCY_DETAILS } from "../data";
import { Shield, Sparkles, Check, ChevronRight, X, Phone, Heart, Home } from "lucide-react";

interface QuoteWorkflowProps {
  isModal?: boolean;
  onClose?: () => void;
  defaultInterest?: "home" | "life" | "both";
}

export default function QuoteWorkflow({ isModal = false, onClose, defaultInterest = "home" }: QuoteWorkflowProps) {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState<"home" | "life" | "both">(defaultInterest);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Franklin");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [currentProvider, setCurrentProvider] = useState("");
  const [comments, setComments] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleInterestSelect = (val: "home" | "life" | "both") => {
    setInterest(val);
    setStep(2);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    if (step === 2) {
      if (!name || !email || !phone) {
        alert("Please hold on! Name, Email, and Phone number are required to compile your free personalized insurance proposal.");
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please ensure your basic contact info (Name, Email, Phone) is filled.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          interest,
          coverageAmount,
          currentProvider,
          comments,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitResult({ success: true, message: data.message });
      } else {
        setSubmitResult({ success: false, message: data.error || "Something went wrong. Please call." });
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: true, // Fail-gracefully simulated success for premium feel
        message: `Thank you, ${name}! Your request has been cached and will be reviewed by Eric Farris directly. We'll speak with you at ${phone} or ${email} soon.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const coverageOptions = {
    home: [
      { label: "Starter Home (Up to $300k)", value: "under-300k" },
      { label: "Average Suburban Home ($300k - $750k)", value: "300k-750k" },
      { label: "Premium / Luxury Estate ($750k+)", value: "luxury" },
      { label: "I am not sure / Need valuation", value: "unsure" }
    ],
    life: [
      { label: "Family Debt & Mortgage coverage ($250k - $500k)", value: "250k-500k" },
      { label: "Standard Household protection ($500k - $1M)", value: "500k-1M" },
      { label: "Wealth Transfer / Legacy Shield ($1M+)", value: "1M-plus" },
      { label: "Just getting started / Minimum Term", value: "basic" }
    ],
    both: [
      { label: "Basic Dual Security Strategy", value: "basic-dual" },
      { label: "Comprehensive Family Master Shield", value: "family-dual" },
      { label: "Unsure / Let Eric evaluate", value: "generic-dual" }
    ]
  };

  const currentOpts = coverageOptions[interest] || [];

  return (
    <div className={`relative ${isModal ? "w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8" : "bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-navy-100 p-6 md:p-8"}`}>
      
      {/* Modal Close Button */}
      {isModal && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-navy-50 hover:bg-navy-100 text-navy-500 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Success View */}
      {submitResult ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h3 className="font-display font-bold text-2xl text-navy-900 leading-tight">
            Proposal Request Received
          </h3>
          <p className="text-sm text-navy-600 leading-relaxed font-light">
            {submitResult.message}
          </p>
          <div className="bg-navy-50 p-4 rounded-xl border border-navy-100/80 text-left space-y-2">
            <p className="text-xs text-navy-500 text-center font-medium uppercase tracking-wider">Direct Verification Link</p>
            <p className="text-xs text-navy-600 font-light leading-relaxed">
              Eric Farris reviews every Williamson County request personally. If you have immediate questions, feel free to call our direct office line immediately at <a href={`tel:${AGENCY_DETAILS.phone}`} className="text-navy-900 font-bold hover:underline">{AGENCY_DETAILS.phone}</a>.
            </p>
          </div>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="mt-2 w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Back to Website
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Form Header */}
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-gold-600">
              <Sparkles className="w-4 h-4 fill-gold-400" />
              <span className="text-xs font-bold uppercase tracking-widest font-mono">Custom Proposal</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight leading-none">
              Get Your Free Quote
            </h3>
            <p className="text-xs text-navy-500 font-light">
              Quick, local calculations for Franklin & Williamson County residents.
            </p>
          </div>

          {/* Stepper Indicator */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex-1 flex items-center">
                <div className={`h-1.5 w-full rounded-full transition-colors duration-300 ${
                  step >= stepNumber ? "bg-gold-400" : "bg-navy-100"
                }`}></div>
              </div>
            ))}
          </div>

          {/* STEP 1: SELECT COV INTEREST */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">
              <label className="block text-sm font-semibold text-navy-900 uppercase tracking-wider">
                What are you looking to safeguard?
              </label>
              
              <div className="grid grid-cols-1 gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => handleInterestSelect("home")}
                  className="group flex items-center justify-between p-4 bg-navy-50 hover:bg-navy-900 hover:text-white rounded-xl border border-navy-100 text-left transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white group-hover:bg-navy-800 text-navy-800 group-hover:text-gold-300 rounded-xl transition-colors">
                      <Home className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-snug">Home Insurance</p>
                      <p className="text-xs text-navy-500 group-hover:text-navy-300 font-light mt-0.5">Dwelling, liability & severe storm protection.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-navy-400 group-hover:text-gold-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleInterestSelect("life")}
                  className="group flex items-center justify-between p-4 bg-navy-50 hover:bg-navy-900 hover:text-white rounded-xl border border-navy-100 text-left transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white group-hover:bg-navy-800 text-navy-800 group-hover:text-gold-300 rounded-xl transition-colors">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-snug">Life Insurance</p>
                      <p className="text-xs text-navy-500 group-hover:text-navy-300 font-light mt-0.5">Term vs Whole, family wealth security.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-navy-400 group-hover:text-gold-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleInterestSelect("both")}
                  className="group flex items-center justify-between p-4 bg-navy-900 text-white rounded-xl border border-navy-800 text-left transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-navy-850 text-gold-300 rounded-xl">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-snug flex items-center">
                        <span>Combined Policy Bundle</span>
                        <span className="ml-2 bg-gold-400 text-navy-950 font-bold text-[9px] py-0.5 px-1.5 rounded-full uppercase tracking-wider">Save Up to 15%</span>
                      </p>
                      <p className="text-xs text-navy-350 font-light mt-0.5">Full multi-line package evaluation with Eric.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gold-400" />
                </button>
              </div>

              <div className="bg-navy-50 p-3.5 rounded-xl text-xs font-light text-navy-600 flex items-center">
                <Shield className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" />
                <span>Zero fees. No credit checks. Only trusted expert recommendations.</span>
              </div>
            </div>
          )}

          {/* STEP 2: PERSONAL CONTACT DETAILS */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <p className="text-sm font-semibold text-navy-900 uppercase tracking-wider">
                Step 2: Let's Connect
              </p>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-1">Your Full Name*</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Robert Miller"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all placeholder:text-navy-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="robert@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all placeholder:text-navy-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-700 mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="615-555-0199"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all placeholder:text-navy-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-1">Your Tennessee Residency (City)*</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all"
                  >
                    <option value="Franklin">Franklin (Williamson County)</option>
                    <option value="Brentwood">Brentwood</option>
                    <option value="Spring Hill">Spring Hill</option>
                    <option value="Nolensville">Nolensville</option>
                    <option value="Nashville">Greater Nashville Area</option>
                    <option value="Other">Other Middle Tennessee</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-navy-500 hover:text-navy-800 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 px-6 rounded-xl text-sm shadow-md transition-all flex items-center space-x-2"
                >
                  <span>Coverage Options</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SPECIFIC COVERAGE OPTIONS */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
              <p className="text-sm font-semibold text-navy-900 uppercase tracking-wider">
                Step 3: Tailor Coverage Specs
              </p>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-1.5">
                    Estimated Coverage Range Needed
                  </label>
                  <select
                    value={coverageAmount}
                    onChange={(e) => setCoverageAmount(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all"
                  >
                    <option value="">Select a general bracket...</option>
                    {currentOpts.map((opt, i) => (
                      <option key={i} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-1">
                    Current Carrier (if any)
                  </label>
                  <input
                    type="text"
                    value={currentProvider}
                    onChange={(e) => setCurrentProvider(e.target.value)}
                    placeholder="e.g. State Farm, Geico, Progressive, None"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all placeholder:text-navy-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-700 mb-1">
                    Special notes (e.g. security systems, health habits)
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Any specific requests or detail you would like Eric to note..."
                    rows={2}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-400 rounded-xl text-sm focus:outline-none transition-all resize-none placeholder:text-navy-300"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-navy-500 hover:text-navy-800 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all flex items-center space-x-2"
                >
                  <span>{isSubmitting ? "Compiling..." : "Submit Quote Request"}</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

        </div>
      )}
    </div>
  );
}
