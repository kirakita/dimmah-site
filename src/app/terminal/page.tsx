"use client";

import { useState, useRef, useEffect } from "react";

const COMMANDS: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "",
    "  about       Who we are",
    "  services    What we build",
    "  work        Selected projects",
    "  stack       Our tech stack",
    "  contact     Get in touch",
    "  philosophy  How we think",
    "  clear       Clear terminal",
    "",
    "Type a command and press Enter.",
  ],
  about: [
    "┌─────────────────────────────────────────────────────────┐",
    "│  DIMMAH                                                 │",
    "│  Software Development Agency // London                  │",
    "├─────────────────────────────────────────────────────────┤",
    "│                                                         │",
    "│  We build software that works.                          │",
    "│  No fluff. No endless meetings. No excuses.             │",
    "│                                                         │",
    "│  Founded by engineers who got tired of agencies         │",
    "│  that overpromise and underdeliver.                     │",
    "│                                                         │",
    "│  We ship fast. We ship quality. We ship.                │",
    "│                                                         │",
    "└─────────────────────────────────────────────────────────┘",
  ],
  services: [
    "SERVICES",
    "========",
    "",
    "→ Web Development",
    "  Next.js, React, Node.js, TypeScript",
    "  From landing pages to full SaaS platforms",
    "",
    "→ Mobile Apps", 
    "  React Native, cross-platform",
    "  iOS + Android from one codebase",
    "",
    "→ Backend & APIs",
    "  Node.js, PostgreSQL, Redis, GraphQL",
    "  Scalable, secure, well-documented",
    "",
    "→ AI Integration",
    "  LLMs, embeddings, agents, automation",
    "  Make your product intelligent",
    "",
    "→ SaaS Products",
    "  MVP to scale. We've done it before.",
    "  Auth, billing, analytics — handled.",
    "",
    "Type 'contact' to start a project.",
  ],
  work: [
    "SELECTED WORK",
    "=============",
    "",
    "[01] E-Commerce Platform",
    "     Stack: Next.js + Node.js + Stripe",
    "     Result: 340% conversion increase",
    "",
    "[02] FinTech Dashboard",
    "     Stack: React + D3.js + WebSocket",
    "     Result: Real-time analytics for 50k users",
    "",
    "[03] Healthcare App",
    "     Stack: React Native + Node.js",
    "     Result: 4.8★ App Store rating",
    "",
    "[04] AI Writing Tool",
    "     Stack: Next.js + OpenAI + Vercel",
    "     Result: 0 to 10k users in 3 months",
    "",
    "More case studies available on request.",
    "Type 'contact' to discuss your project.",
  ],
  stack: [
    "TECH STACK",
    "==========",
    "",
    "Frontend    │ React, Next.js, TypeScript, Tailwind",
    "Mobile      │ React Native, Expo",
    "Backend     │ Node.js, Express, Fastify, tRPC",
    "Database    │ PostgreSQL, MongoDB, Redis, Prisma",
    "Cloud       │ Vercel, AWS, Railway, Cloudflare",
    "AI/ML       │ OpenAI, Anthropic, LangChain, Pinecone",
    "Auth        │ NextAuth, Clerk, Supabase Auth",
    "Payments    │ Stripe, Lemon Squeezy",
    "Analytics   │ PostHog, Plausible, Vercel Analytics",
    "",
    "We pick the right tool for the job.",
    "Not the trendiest. The right one.",
  ],
  philosophy: [
    "HOW WE WORK",
    "===========",
    "",
    "01. Speed is a feature",
    "    If something takes a year, we do it in a month.",
    "    If it takes a month, we do it in a week.",
    "",
    "02. Code is cheap, trust is expensive",
    "    We'd rather rebuild than compromise.",
    "    Your reputation is our reputation.",
    "",
    "03. Partners, not vendors",
    "    We're invested in your success.",
    "    Not just the invoice.",
    "",
    "04. Ship > Perfect",
    "    Done is better than perfect.",
    "    But done well is better than done.",
    "",
    "05. No bullshit",
    "    Clear communication. Honest timelines.",
    "    If we can't do it, we'll say so.",
  ],
  contact: [
    "GET IN TOUCH",
    "============",
    "",
    "Email    →  hello@dimmah.com",
    "LinkedIn →  linkedin.com/company/dimmah",
    "Twitter  →  @dimmahHQ",
    "",
    "Response time: Usually within 24 hours.",
    "Sometimes faster if we're excited about your project.",
    "",
    "────────────────────────────────────────",
    "",
    "Ready to build something? Just email us:",
    "",
    "  Subject: New Project",
    "  Body: What you're building + timeline",
    "",
    "That's it. No forms. No calls unless needed.",
  ],
};

interface Line {
  type: "input" | "output";
  content: string;
}

export default function TerminalPage() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", content: "DIMMAH v1.0.0 — Software Development Agency" },
    { type: "output", content: "Type 'help' for available commands." },
    { type: "output", content: "" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    const newLines: Line[] = [
      ...lines,
      { type: "input", content: `visitor@dimmah:~$ ${input}` },
    ];

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (cmd === "") {
      setLines(newLines);
      setInput("");
      return;
    }

    const response = COMMANDS[cmd];
    if (response) {
      const outputLines = Array.isArray(response) ? response : [response];
      outputLines.forEach((line) => {
        newLines.push({ type: "output", content: line });
      });
    } else {
      newLines.push({ type: "output", content: `Command not found: ${cmd}` });
      newLines.push({ type: "output", content: "Type 'help' for available commands." });
    }

    newLines.push({ type: "output", content: "" });
    setLines(newLines);
    setInput("");
  };

  return (
    <main 
      className="min-h-screen bg-stone-950 p-4 md:p-8 font-mono"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto">
        {/* Window chrome */}
        <div className="bg-stone-900 rounded-t-xl border border-stone-800 border-b-0 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-stone-500 text-sm ml-4">visitor@dimmah — bash</span>
        </div>

        {/* Terminal */}
        <div
          ref={terminalRef}
          className="bg-stone-950 border border-stone-800 rounded-b-xl p-4 h-[70vh] overflow-y-auto"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`${
                line.type === "input" ? "text-green-400" : "text-stone-300"
              } whitespace-pre-wrap leading-relaxed`}
            >
              {line.content}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400">visitor@dimmah:~$&nbsp;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 outline-none caret-green-400"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </form>
        </div>

        {/* Quick commands */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["help", "about", "services", "work", "contact"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="px-3 py-1.5 bg-stone-900 border border-stone-700 rounded-lg text-stone-400 hover:text-green-400 hover:border-green-400/50 text-sm transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
