import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import { AGENCY_DETAILS } from "../data";
import { MessageSquare, X, Send, Sparkles, User, ShieldAlert, Phone, HelpCircle } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      role: "model",
      content: `Hello! Welcome to **${AGENCY_DETAILS.name}** in Franklin, TN. 👋 

I'm Eric's AI virtual helper. I'm here to help you protect. How can I assist you with your **Home** or **Life** insurance goals today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const quickChips = [
    "Home Insurance Quote",
    "Storm & Tornado Deductibles",
    "Term vs Whole Life Advice",
    "How to call Eric?",
  ];

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Structure the history correctly for server expectation: { role: 'user' | 'model', content: string }
      const serverHistory = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: serverHistory
        })
      });

      const data = await res.json();
      
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        role: "model",
        content: data.response || "I am available to assist on our phone line at 615-364-4176 too!",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      // Fallback
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "model",
          content: "I'm having a brief connection hitch, but we're ready for you! You can reach Eric Farris directly at **615-364-4176** or email **efarris@ericfarrisinsurance.com** and we'll reply right away.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* FLOATING CHAT BALLOON CONTAINER */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] sm:h-[520px] max-h-[calc(100vh-110px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-navy-100 flex-shrink-0 mb-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Top Panel Header */}
          <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3.5">
              <div className="bg-gradient-to-br from-gold-300 to-gold-500 p-2 rounded-xl shadow-inner relative">
                <Sparkles className="w-4 h-4 text-navy-950 fill-navy-950" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm leading-tight text-white flex items-center">
                  <span>Eric's Virtual Assistant</span>
                </h4>
                <p className="text-[10px] text-navy-300 font-medium tracking-wide">AI Assistant • Franklin Office</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-white hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Hide assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div key={m.id} className={`flex items-start ${isUser ? "justify-end" : "justify-start"}`}>
                  {!isUser && (
                    <div className="w-7 h-7 bg-gold-400 text-navy-950 font-bold rounded-lg text-[10px] flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      EF
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs shadow-sm leading-relaxed ${
                    isUser
                      ? "bg-navy-900 text-white rounded-tr-none font-medium"
                      : "bg-white text-navy-900 border border-slate-200/85 rounded-tl-none font-light markdown-body"
                  }`}>
                    {/* Render basic markdown formatting like **bold** directly for nice spacing */}
                    <div className="whitespace-pre-wrap">
                      {m.content.split("\n").map((line, idx) => {
                        // Check for bold notation
                        let formatted = line;
                        const boldRegex = /\*\*(.*?)\*\*/g;
                        const parts = [];
                        let lastIndex = 0;
                        let match;
                        
                        while ((match = boldRegex.exec(line)) !== null) {
                          // Push preceding text
                          if (match.index > lastIndex) {
                            parts.push(line.substring(lastIndex, match.index));
                          }
                          // Push bold text
                          parts.push(<strong key={match.index} className="font-bold text-navy-950">{match[1]}</strong>);
                          lastIndex = boldRegex.lastIndex;
                        }
                        
                        if (lastIndex < line.length) {
                          parts.push(line.substring(lastIndex));
                        }

                        return (
                          <p key={idx} className={idx > 0 ? "mt-1.5" : ""}>
                            {parts.length > 0 ? parts : line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start">
                <div className="w-7 h-7 bg-gold-450 text-navy-950 font-bold rounded-lg text-[10px] flex items-center justify-center mr-2 flex-shrink-0">
                  EF
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none border border-slate-200 px-4 py-3 shadow-xs">
                  <div className="flex space-x-1.5 items-center">
                    <span className="w-2 h-2 bg-navy-450 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-navy-400 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-navy-350 rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick-select chips list at the bottom */}
          <div className="bg-white px-3 py-2 border-t border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-none flex space-x-1.5">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="inline-block px-3 py-1.5 bg-navy-50 hover:bg-gold-150 text-navy-900 border border-navy-100 text-[10px] rounded-full transition-colors font-medium flex-shrink-0 cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Form Input Tray */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask Eric's assistant anything..."
              className="flex-1 bg-slate-50 border border-slate-200 focus:bg-white focus:border-gold-450 py-2.5 px-3.5 rounded-xl text-xs focus:outline-none transition-all placeholder:text-navy-300"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 rounded-xl transition-all shadow-md shadow-gold-550/10 cursor-pointer disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* CHAT LAUNCH CIRCLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white cursor-pointer relative group"
        aria-label="Toggle live helper chat"
      >
        <MessageSquare className="w-6 h-6 stroke-[2]" />
        
        {/* Subtle hover tooltip */}
        <span className="absolute right-16 bg-navy-950 text-white font-semibold text-xs py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Have an insurance question? Ask AI ⚡
        </span>
      </button>

    </div>
  );
}
