import { FAQItem, Testimonial } from "./types";

export const AGENCY_DETAILS = {
  name: "Eric Farris Insurance",
  domain: "ericfarrisinsurance.com",
  phone: "615-364-4176",
  email: "efarris@ericfarrisinsurance.com",
  location: "Franklin, Tennessee",
  city: "Franklin",
  state: "Tennessee",
  hours: "Monday - Friday: 8:30 AM - 5:00 PM | Sat & Sun: By Appointment",
  tagline: "Protecting What Matters Most in Middle Tennessee"
};

export const HOME_COVERAGES = [
  {
    title: "Dwelling Coverage",
    icon: "Home",
    description: "Replaces or repairs the physical structure of your house in the event of fire, tornado, hail, or other covered perils in Middle Tennessee.",
    details: "Your dwelling policy covers the walls, roof, built-in appliances, and structural foundation. Given Tennessee's variable weather and spring storms, we ensure your replacement cost estimation is accurate and up-to-date."
  },
  {
    title: "Personal Property Protection",
    icon: "ShieldAlert",
    description: "Protects your furniture, clothing, electronics, and personal valuables, whether they are inside your home or off-premises.",
    details: "From expensive appliances to heirloom goods, we help you calculate the replacement value so you don't absorb massive losses after a catastrophic event or burglary."
  },
  {
    title: "Personal Liability Coverage",
    icon: "Users",
    description: "Financial protection against lawsuits or claims if someone is injured on your property or you accidentally cause damage elsewhere.",
    details: "Covers legal defense costs and medical expenses associated with accidental slips, falls, or property damage claims. Absolute safety net for self-employed, homeowners, and active families."
  },
  {
    title: "Storm & Tornado Security",
    icon: "CloudLightning",
    description: "Specialized hazard analysis for severe seasonal thunderstorms, lightning strikes, and high-wind tornado damage in Williamson County.",
    details: "Franklin homeowners know spring storms can be sudden. This coverage guarantees peace of mind with tailored deductibles for windstorm damage so you aren't left with unexpected out-of-pocket bills."
  }
];

export const LIFE_COVERAGES = [
  {
    title: "Term Life Insurance",
    icon: "TrendingUp",
    subtitle: "Affordable, high-value security for active working years.",
    description: "Provides maximum coverage for a set duration (typically 10, 20, or 30 years). Ideal for young families in Williamson County locking in low rates to cover mortgages, child care, and college tuitions.",
    benefits: [
      "Extremely affordable rates for young homeowners",
      "Matches structural debt durations, like a 30-year home loan",
      "Provides straightforward, pure safety net protection",
      "Guaranteed level premium guarantees over the chosen term"
    ]
  },
  {
    title: "Whole & Permanent Life",
    icon: "HeartHandshake",
    subtitle: "Lifetime coverage with permanent asset growth.",
    description: "Builds guaranteed cash value over time. Perfect for estate planning, legacy creation, and tax-advantaged savings that support secure retirements and multi-generation support.",
    benefits: [
      "Policy never expires as long as premiums are met",
      "Builds an emergency high-liquidity financial cash value",
      "Guaranteed death benefit payout with complete tax advantages",
      "Secures long-term wealth transfer for your loved ones"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Thomas S.",
    role: "Local Homeowner",
    location: "Franklin, TN",
    text: "Eric helped me transfer both our home and auto policies when we moved to Westhaven last year. He got us way better terms than our national provider, and a direct cell line to call when we have questions. Absolute game changer!",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah & Marcus G.",
    role: "Family Business Owners",
    location: "Cool Springs, TN",
    text: "Getting term life insurance felt overwhelming, but Eric Farris walked us through our options with zero sales pressure. He understood our budget, helped protect our children's college plans, and was incredibly easy to talk to.",
    rating: 5
  },
  {
    id: "t3",
    name: "Amanda K.",
    role: "Historic District Resident",
    location: "Downtown Franklin",
    text: "The storm last April damaged several shingles. I called Eric's personal line, and he guided us step-by-step through the dwelling claim process. Having a local agent who actually answers makes Franklin feel like a small town.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need special tornado or storm coverage in Franklin, TN?",
    answer: "Most standard home insurance policies cover storm wind and hail damage. However, understanding your wind deductibles (especially after major seasons in Williamson County) is vital. We personalize your coverage terms so there are no surprises.",
    category: "home"
  },
  {
    question: "What is the difference between Term Life and Whole Life?",
    answer: "Term Life provides coverage for a fixed period (such as 20 years) and pays a death benefit only if the insured passes during that window. Whole Life offers permanent protection and accrues cash value that you can borrow against while living.",
    category: "life"
  },
  {
    question: "Is shopping for local insurance better than buying online?",
    answer: "Yes, tremendously. National online quotes often miss key local risks, Tennessean building code updates, and state-specific hazard disclosures. Plus, when a claim happens, you text or call Eric directly rather than sorting through robot waitlists.",
    category: "general"
  },
  {
    question: "How do I request an official home evaluation to check coverage amounts?",
    answer: "Simply submit our free quote request form or call 615-364-4176. Eric will perform a comprehensive replacement cost analysis based on Williamson County building costs to determine the exact dwelling coverage you need.",
    category: "home"
  },
  {
    question: "Can I convert my Term Life policy to Whole Life in the future?",
    answer: "Many term policies allow for convertible options without requiring a new health exam as you grow. We always structure term agreements with conversion riders to protect your future eligibility as financial goals evolve.",
    category: "life"
  }
];

export const BLOG_POSTS = [
  {
    title: "Navigating Middle Tennessee Storm Seasons: Is Your Dwelling Insurance Up to Date?",
    summary: "High winds, hail, and unpredictable tornados can severely test standard homeowners policies. Learn how Williamson County rebuilding costs affect your safety margins.",
    date: "May 15, 2026",
    readTime: "4 min read",
    slug: "navigating-storm-seasons-franklin"
  },
  {
    title: "Term vs. Whole Life Insurance: A Simple Decision Tree For Franklin Families",
    summary: "Deciding on term or permanent protection depends on your mortgage size, business debt, and desire for cash value growth. Let's break down the mechanics simply.",
    date: "April 22, 2026",
    readTime: "5 min read",
    slug: "term-vs-whole-life-franklin-families"
  }
];
