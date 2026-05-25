import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Create the Google Gen AI client with appropriate telemetry header and api key
const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON payloads
  app.use(express.json());

  // API router for our interactive AI Chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      // Build context and formatted system instructions
      const systemInstruction = 
        `You are Eric's Virtual Assistant at Eric Farris Insurance, a senior-level, trusted insurance helper located in Franklin, Tennessee. 
Key Information:
- Agency Name: Eric Farris Insurance
- Website: ericfarrisinsurance.com
- Principal Agent: Eric Farris
- Phone: 615-364-4176 (Direct line & Click-to-call)
- Email: efarris@ericfarrisinsurance.com
- Location: Franklin, Tennessee (community-centered, family-oriented, specializing in Middle Tennessee homeowners and families).
- Services Offered:
  1. Home Insurance (including Dwelling Coverage, Liability Protection, Personal Property, and Storm/Tornado Protection).
  2. Life Insurance (including Term Life and Whole Life, Family Wealth protection, and Retirement planning).

Your Tone:
- Professional, reassuring, warm, neighborhood-focused, trustworthy, and expert.
- Emphasize Franklin, TN community values (local, reliable, available for in-person consultations, and always a call away).

Your Objective:
- Help users learn about Home and Life insurance policies.
- Answer their questions clearly without jargon.
- Suggest they request an official quote using our online quote workflow, or call Eric directly at 615-364-4176.
- Do not manufacture specific price numbers or premium calculations. Rather, explain coverage details and invite them to leave their name, phone number, and needs so we can reach out immediately.

Instructions: Be concise, clear, and output formatted Markdown (with bullet points and highlight bold names) for readability. Keep replies brief and conversational.`;

      // Map client-side history to contents array for generateContent
      // client-side history structure: { role: 'user' | 'model', content: string }
      const contents: any[] = [];
      
      if (Array.isArray(history)) {
        history.forEach((turn: any) => {
          contents.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.content }],
          });
        });
      }

      // Add the final user message
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      // Call the new Gemini SDK generateContent
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || "I'm sorry, I couldn't generate a response. Please call us directly at 615-364-4176!";
      return res.json({ response: reply });
    } catch (error: any) {
      console.error("Gemini Chat Error:", error);
      return res.status(500).json({
        error: "Failed to connect to AI assistant. Please try again or call us at 615-364-4176.",
      });
    }
  });

  // API router to accept a web Quote Request simulation
  app.post("/api/quote", (req, res) => {
    const { name, email, phone, city, county, interest, coverageAmount, currentProvider, comments } = req.body;
    
    if (!name || !email || !phone || !interest) {
      return res.status(400).json({ error: "Missing required fields (Name, Email, Phone, and Coverage Interest)." });
    }

    // Capture the lead on-server (simulate saving/notifying Eric Farris)
    console.log(`[NEW QUOTE REQUEST DETECTED]:`, {
      name, email, phone, city, county, interest, coverageAmount, currentProvider, comments,
      timestamp: new Date().toISOString()
    });

    return res.json({
      success: true,
      message: `Thank you, ${name}! Your quote request for ${interest} has been submitted successfully. Eric Farris or a member of our Franklin office will call you at ${phone} shortly.`,
    });
  });

  // API router to handle contact forms
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log(`[NEW CONTACT FORM SUBMISSION]:`, { name, email, phone, subject, message });

    return res.json({
      success: true,
      message: `Thank you, ${name}! Your message has been sent successfully. We will follow up with you at ${email} or ${phone}.`,
    });
  });

  // Vite development middleware vs. static file serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
    console.log(`Fallback Gemini Key loaded: ${apiKey ? "Active" : "Inactive"}`);
  });
}

startServer();
