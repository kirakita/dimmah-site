"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const RESPONSES: Record<string, string> = {
  default: "I can help you learn about Dimmah. Try asking about our services, process, pricing, or team. Or just tell me about your project!",
  
  hello: "Hey! 👋 I'm the Dimmah assistant. We're a software agency based in London that builds web apps, mobile apps, and AI-powered products. What brings you here today?",
  
  hi: "Hey! 👋 I'm the Dimmah assistant. We're a software agency based in London that builds web apps, mobile apps, and AI-powered products. What brings you here today?",
  
  services: "We offer:\n\n→ **Web Development** — Next.js, React, full-stack apps\n→ **Mobile Apps** — React Native, cross-platform\n→ **Backend & APIs** — Node.js, scalable systems\n→ **AI Integration** — LLMs, agents, automation\n→ **SaaS Products** — MVP to scale\n\nWhat are you looking to build?",
  
  pricing: "Our pricing depends on scope, but here's a rough guide:\n\n• Landing pages: £2-5k\n• Web apps (MVP): £10-25k\n• Full SaaS products: £25-75k+\n• Mobile apps: £15-40k\n• Ongoing retainers: £3-8k/month\n\nWe're transparent about costs. Tell me about your project and I can give you a better estimate.",
  
  process: "Our process is simple:\n\n1. **Discovery call** (30 min) — Understand your goals\n2. **Proposal** (2-3 days) — Scope, timeline, cost\n3. **Build** — Weekly updates, iterative delivery\n4. **Launch** — We help you ship\n5. **Support** — Optional ongoing partnership\n\nNo endless meetings. No surprises. Just shipping.",
  
  team: "We're a small, senior team. No juniors learning on your dime.\n\nOur founder has 10+ years building software, from startups to scale-ups. We work with a trusted network of specialists when needed.\n\nBased in London, working globally.",
  
  timeline: "Typical timelines:\n\n• Landing page: 1-2 weeks\n• MVP: 4-8 weeks\n• Full product: 2-4 months\n\nWe move fast. \"Speed is your only edge\" is our philosophy. If you need something faster, let's talk.",
  
  contact: "Ready to build something? Here's how to reach us:\n\n📧 **Email:** hello@dimmah.com\n💼 **LinkedIn:** linkedin.com/company/dimmah\n\nJust email us with:\n• What you're building\n• Your timeline\n• Any budget constraints\n\nWe typically respond within 24 hours.",
  
  project: "Tell me more about your project! I'd love to hear:\n\n• What problem are you solving?\n• Who are your users?\n• Do you have a deadline?\n• Any technical preferences?\n\nThe more detail, the better I can help.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return RESPONSES.hello;
  }
  if (lower.includes("service") || lower.includes("offer") || lower.includes("build") || lower.includes("do you")) {
    return RESPONSES.services;
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("budget")) {
    return RESPONSES.pricing;
  }
  if (lower.includes("process") || lower.includes("how do you work") || lower.includes("workflow")) {
    return RESPONSES.process;
  }
  if (lower.includes("team") || lower.includes("who") || lower.includes("founder")) {
    return RESPONSES.team;
  }
  if (lower.includes("time") || lower.includes("how long") || lower.includes("fast") || lower.includes("deadline")) {
    return RESPONSES.timeline;
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("talk")) {
    return RESPONSES.contact;
  }
  if (lower.includes("project") || lower.includes("idea") || lower.includes("want to build") || lower.includes("need")) {
    return RESPONSES.project;
  }
  
  return RESPONSES.default;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! I'm here to help you learn about Dimmah. We build software — web apps, mobile apps, AI products, the works.\n\nWhat would you like to know? You can ask about our services, pricing, process, or just tell me about your project.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    
    setIsTyping(true);
    
    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 800));
    
    const response = getResponse(userMessage);
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
  };

  const suggestions = ["What services do you offer?", "How much does it cost?", "Tell me about your process", "I have a project idea"];

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <div>
              <h1 className="font-semibold text-stone-900">Dimmah</h1>
              <p className="text-xs text-stone-500">Software Agency</p>
            </div>
          </div>
          <a 
            href="mailto:hello@dimmah.com"
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-stone-900 text-white rounded-br-md"
                    : "bg-white border border-stone-200 text-stone-700 rounded-bl-md"
                }`}
              >
                <p className="whitespace-pre-wrap text-[15px] leading-relaxed">
                  {message.content.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-stone-200 px-5 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggestions */}
      {messages.length < 3 && (
        <div className="px-6 pb-4">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors cursor-pointer"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white border-t border-stone-200 px-6 py-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Dimmah..."
            className="flex-1 px-5 py-3 bg-stone-100 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-300 focus:ring-2 focus:ring-stone-200"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors cursor-pointer disabled:opacity-50"
            disabled={!input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
