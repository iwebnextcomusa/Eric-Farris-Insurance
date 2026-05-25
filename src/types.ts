export type PageId = "home" | "home-insurance" | "life-insurance" | "about" | "contact";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "home" | "life";
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  city: string;
  interest: "home" | "life" | "both";
  coverageDetails?: string;
  currentProvider?: string;
  comments?: string;
}
