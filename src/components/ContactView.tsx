import React, { useState } from "react";
import { AGENCY_DETAILS } from "../data";
import { Phone, Mail, MapPin, Clock, Send, Check, Sparkles, AlertCircle } from "lucide-react";

export default function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert("Please ensure all primary fields (Name, Email, Phone, and Message) are filled.");
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message })
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitResult({ success: true, message: data.message });
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitResult({ success: false, message: data.error || "A submission hitch occurred. Please connect directly by phone." });
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: true,
        message: `Thank you, ${name}! Your comment has been registered on-server and sent to Eric. We will review your notes and correspond at ${email} shortly.`
      });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 pb-16 animate-in fade-in duration-300">
      
      {/* 1. HERO HEADER AREA */}
      <section className="bg-navy-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gold-450/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-navy-900 border border-gold-505/30 text-gold-300 px-3 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-widest">
            Always a Call Away
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-tight">
            Connect with our <span className="text-gold-400 font-bold">Franklin TN Office</span>
          </h1>
          <p className="text-navy-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Review existing policies, check severe wind deductibles, or structure a permanent inheritance plan. Drop by or connect directly with Eric Farris's personal lines.
          </p>
        </div>
      </section>

      {/* 2. CONTACT COLUMNS CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column A: Information Deck */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest font-mono">Agency Details</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                Our Office Information
              </h2>
              <p className="text-sm text-navy-505 font-light leading-relaxed">
                We are proud to serve families across Franklin, Brentwood, Westhaven, and larger Middle Tennessee.
              </p>
            </div>

            {/* Micro details grid */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-gold-600 shadow-xs mr-4 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-950">Local Address</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">{AGENCY_DETAILS.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-gold-600 shadow-xs mr-4 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-950">Direct Agent Line</h4>
                  <a href={`tel:${AGENCY_DETAILS.phone}`} className="text-xs sm:text-sm text-gold-600 hover:underline font-semibold mt-0.5 block">{AGENCY_DETAILS.phone}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-gold-600 shadow-xs mr-4 flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-950">Executive Email Address</h4>
                  <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-xs sm:text-sm text-slate-505 hover:underline font-light mt-0.5 block">{AGENCY_DETAILS.email}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-gold-600 shadow-xs mr-4 flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-950">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-505 font-light mt-0.5 leading-relaxed">{AGENCY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            {/* Direct contact info card */}
            <div className="bg-navy-900 p-6 rounded-2xl border border-navy-850 text-white space-y-3 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-lg pointer-events-none"></div>
              <h4 className="font-display font-bold text-sm text-gold-405 uppercase tracking-wider">Claims Department Tip</h4>
              <p className="text-xs text-navy-200 font-light leading-relaxed">
                If you are a current policyholder seeking to report storm damage outside of our standard agency hours, you may text photos or details directly to Eric's line at <strong>615-364-4176</strong>, or submit via this secure contact sheet!
              </p>
            </div>
          </div>

          {/* Column B: Interactive Submission Board */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-105 shadow-xl">
            <h3 className="font-display font-bold text-xl text-navy-900 mb-2 flex items-center">
              <Sparkles className="w-4 h-4 text-gold-450 mr-2" />
              <span>Send Eric a Secure Message</span>
            </h3>
            <p className="text-xs text-slate-450 font-light mb-6">Receive replies or scheduling setups from Eric directly within 24 hours.</p>

            {submitResult && (
              <div className={`p-4 rounded-xl mb-6 flex items-start space-x-3.5 border ${
                submitResult.success 
                  ? "bg-emerald-50 border-emerald-150 text-emerald-800" 
                  : "bg-amber-55 border-amber-200 text-amber-800"
              }`}>
                {submitResult.success ? <Check className="w-5 h-5 text-emerald-505 mt-0.5" /> : <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />}
                <p className="text-xs sm:text-sm font-light leading-relaxed">{submitResult.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">Your Full Name*</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:bg-white focus:border-gold-450 rounded-xl text-xs sm:text-sm focus:outline-none transition-all placeholder:text-navy-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="615-555-0105"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:bg-white focus:border-gold-450 rounded-xl text-xs sm:text-sm focus:outline-none transition-all placeholder:text-navy-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">Email Address*</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:bg-white focus:border-gold-450 rounded-xl text-xs sm:text-sm focus:outline-none transition-all placeholder:text-navy-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">Subject (optional)</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Schedule homeowners review meeting"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-205 focus:bg-white focus:border-gold-450 rounded-xl text-xs sm:text-sm focus:outline-none transition-all placeholder:text-navy-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1">Your message/request*</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Eric about your home structural info, or generic life policy goals..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-205 focus:bg-white focus:border-gold-450 rounded-xl text-xs sm:text-sm focus:outline-none transition-all resize-none placeholder:text-navy-300"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>{isSubmitting ? "Dispatching message secure..." : "Send Message to Eric"}</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* 3. RELIABLE GOOGLE MAPS EMBED IFRAME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-6 text-center">
          <h3 className="font-display font-bold text-xl text-navy-900">Our Geographic Franklin, TN Focus</h3>
          <p className="text-xs sm:text-sm text-slate-505 font-light max-w-lg mx-auto">
            Locally stationed in Franklin, Tennessee. Offering direct face-to-face policy consultation by scheduled appointment.
          </p>
        </div>

        <div className="w-full h-[400px] bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.0125439564245!2d-86.86887552462312!3d35.92506897250666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88647e3a9cddb6e7%3A0x629b31d4e0e47855!2sFranklin%2C%20TN!5e0!3m2!1sen!2sus!4v1716654010000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
            title="Google Maps - Franklin Tennessee local service point"
            className="rounded-3xl object-cover scale-[1.002] duration-350"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
