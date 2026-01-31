"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// All the content lives here - easy to edit
const CONTENT = {
  boot: [
    "DIMMAH OS v1.0.0",
    "Copyright (c) 2024 Dimmah Ltd.",
    "",
    "Initializing systems...",
    "[OK] Core modules loaded",
    "[OK] Service registry online", 
    "[OK] Client interface ready",
    "",
  ],
  welcome: [
    "Welcome to Dimmah — we build software that works.",
    "",
    "Type a command or click below to explore:",
  ],
  commands: {
    help: {
      output: [
        "┌─────────────────────────────────────────┐",
        "│  AVAILABLE COMMANDS                     │",
        "├─────────────────────────────────────────┤",
        "│  about      → Who we are               │",
        "│  services   → What we build            │",
        "│  work       → Selected projects        │",
        "│  stack      → Technologies we use      │",
        "│  contact    → Get in touch             │",
        "│  clear      → Clear terminal           │",
        "└─────────────────────────────────────────┘",
      ],
    },
    about: {
      output: [
        "",
        "  ██████╗ ██╗███╗   ███╗███╗   ███╗ █████╗ ██╗  ██╗",
        "  ██╔══██╗██║████╗ ████║████╗ ████║██╔══██╗██║  ██║",
        "  ██║  ██║██║██╔████╔██║██╔████╔██║███████║███████║",
        "  ██║  ██║██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██╔══██║",
        "  ██████╔╝██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║  ██║",
        "  ╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝",
        "",
        "  Software Development Agency",
        "",
        "  We build software that works. No fluff. No endless",
        "  meetings. No excuses. Just shipping.",
        "",
        "  Founded by engineers who got tired of agencies that",
        "  overpromise and underdeliver.",
        "",
        "  → Speed is our edge",
        "  → Quality is non-negotiable", 
        "  → Partners, not vendors",
        "",
      ],
    },
    services: {
      output: [
        "",
        "  SERVICES",
        "  ════════════════════════════════════════════════",
        "",
        "  [01] WEB DEVELOPMENT",
        "       Marketing sites, web apps, SaaS platforms",
        "       Any stack. Any scale.",
        "",
        "  [02] MOBILE APPS",
        "       iOS, Android, cross-platform",
        "       Native or hybrid — whatever fits",
        "",
        "  [03] E-COMMERCE",
        "       Custom stores, marketplaces, integrations",
        "       Shopify, WooCommerce, or fully custom",
        "",
        "  [04] CLOUD & INFRASTRUCTURE",
        "       AWS, GCP, Azure — architecture & DevOps",
        "       Scalable, secure, cost-optimized",
        "",
        "  [05] AI & AUTOMATION",
        "       LLMs, agents, computer vision, ML pipelines",
        "       Make your business intelligent",
        "",
        "  [06] BACKEND & APIS",
        "       Microservices, serverless, real-time systems",
        "       Built to scale from day one",
        "",
        "  ════════════════════════════════════════════════",
        "  Type 'contact' to discuss your project",
        "",
      ],
    },
    work: {
      output: [
        "",
        "  SELECTED PROJECTS",
        "  ════════════════════════════════════════════════",
        "",
        "  ┌────────────────────────────────────────────┐",
        "  │ E-COMMERCE MARKETPLACE                     │",
        "  │ Stack: Custom storefront + AWS + Stripe    │",
        "  │ Result: 340% conversion increase           │",
        "  └────────────────────────────────────────────┘",
        "",
        "  ┌────────────────────────────────────────────┐",
        "  │ FINTECH PLATFORM                           │",
        "  │ Stack: Microservices + Kubernetes + GCP    │",
        "  │ Result: Processing $2M+ daily              │",
        "  └────────────────────────────────────────────┘",
        "",
        "  ┌────────────────────────────────────────────┐",
        "  │ HEALTHCARE MOBILE APP                      │",
        "  │ Stack: Flutter + Python + AWS              │",
        "  │ Result: 4.8★ rating, 100k downloads        │",
        "  └────────────────────────────────────────────┘",
        "",
        "  ┌────────────────────────────────────────────┐",
        "  │ AI-POWERED ANALYTICS                       │",
        "  │ Stack: ML pipeline + LLMs + real-time      │",
        "  │ Result: 10x faster insights for clients    │",
        "  └────────────────────────────────────────────┘",
        "",
        "  More case studies available on request.",
        "  Type 'contact' to discuss your project.",
        "",
      ],
    },
    stack: {
      output: [
        "",
        "  TECHNOLOGY STACK",
        "  ════════════════════════════════════════════════",
        "",
        "  FRONTEND",
        "  ├── React, Next.js, Vue, Angular",
        "  ├── TypeScript, JavaScript",
        "  └── Tailwind, CSS-in-JS, Sass",
        "",
        "  MOBILE",
        "  ├── React Native, Flutter",
        "  ├── Swift (iOS), Kotlin (Android)",
        "  └── PWAs",
        "",
        "  BACKEND",
        "  ├── Node.js, Python, Go, Java",
        "  ├── REST, GraphQL, gRPC",
        "  └── PostgreSQL, MongoDB, Redis, MySQL",
        "",
        "  CLOUD & DEVOPS",
        "  ├── AWS, GCP, Azure",
        "  ├── Docker, Kubernetes, Terraform",
        "  └── CI/CD, monitoring, scaling",
        "",
        "  E-COMMERCE",
        "  ├── Shopify, WooCommerce, Medusa",
        "  └── Custom storefronts, payment integrations",
        "",
        "  AI & ML",
        "  ├── OpenAI, Anthropic, open-source LLMs",
        "  ├── Computer vision, NLP, embeddings",
        "  └── MLOps, fine-tuning, RAG pipelines",
        "",
        "  We're stack-agnostic.",
        "  We pick the right tool for YOUR job.",
        "",
      ],
    },
    contact: {
      output: [
        "",
        "  GET IN TOUCH",
        "  ════════════════════════════════════════════════",
        "",
        "  EMAIL",
        "  └── hello@dimmah.com",
        "",
        "  LINKEDIN", 
        "  └── linkedin.com/company/dimmah",
        "",
        "  TWITTER",
        "  └── @dimmahHQ",
        "",
        "  ──────────────────────────────────────────────",
        "",
        "  Response time: Usually within 24 hours.",
        "",
        "  Ready to build something? Email us:",
        "",
        "    Subject: New Project",
        "    Body: What you're building + timeline",
        "",
        "  That's it. No forms. No calls unless needed.",
        "",
        "  ════════════════════════════════════════════════",
        "",
      ],
    },
  },
};

const AVAILABLE_COMMANDS = ["help", "about", "services", "work", "stack", "contact", "clear"];

interface Line {
  type: "system" | "input" | "output";
  content: string;
}

export default function TerminalPage() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Rotating placeholder hints - conversational prompts
  const placeholderHints = [
    "who are we? → type 'about'",
    "what do we build? → type 'services'",
    "see our projects → type 'work'",
    "our tech? → type 'stack'",
    "let's talk → type 'contact'",
  ];

  // Cycle through placeholder hints
  useEffect(() => {
    if (isBooting) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderHints.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isBooting, placeholderHints.length]);

  // Boot sequence animation
  useEffect(() => {
    let lineIndex = 0;
    const bootLines = [...CONTENT.boot];
    
    const bootInterval = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setLines(prev => [...prev, { type: "system", content: bootLines[lineIndex] }]);
        lineIndex++;
      } else {
        clearInterval(bootInterval);
        // After boot, show welcome with typing effect
        setTimeout(() => {
          CONTENT.welcome.forEach((line, i) => {
            setTimeout(() => {
              setLines(prev => [...prev, { type: "system", content: line }]);
              if (i === CONTENT.welcome.length - 1) {
                setIsBooting(false);
                inputRef.current?.focus();
              }
            }, i * 100);
          });
        }, 300);
      }
    }, 80);

    return () => clearInterval(bootInterval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input on click
  const handleTerminalClick = () => {
    if (!isBooting) inputRef.current?.focus();
  };

  // Autocomplete suggestions
  useEffect(() => {
    if (input.length > 0) {
      const matches = AVAILABLE_COMMANDS.filter(cmd => 
        cmd.startsWith(input.toLowerCase()) && cmd !== input.toLowerCase()
      );
      setSuggestions(matches);
      setSelectedSuggestion(-1);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    const newLines: Line[] = [
      ...lines,
      { type: "input", content: `visitor@dimmah ~ % ${cmd}` },
    ];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      setSuggestions([]);
      return;
    }

    if (trimmed === "") {
      setLines(newLines);
      setInput("");
      return;
    }

    const command = CONTENT.commands[trimmed as keyof typeof CONTENT.commands];
    if (command) {
      command.output.forEach((line) => {
        newLines.push({ type: "output", content: line });
      });
    } else {
      newLines.push({ type: "output", content: `Command not found: ${trimmed}` });
      newLines.push({ type: "output", content: "Type 'help' for available commands." });
      newLines.push({ type: "output", content: "" });
    }

    setLines(newLines);
    setInput("");
    setSuggestions([]);
  }, [lines]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Tab autocomplete
    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        const index = selectedSuggestion >= 0 ? selectedSuggestion : 0;
        setInput(suggestions[index]);
        setSuggestions([]);
      }
      return;
    }

    // Arrow keys for suggestions
    if (e.key === "ArrowDown" && suggestions.length > 0) {
      e.preventDefault();
      setSelectedSuggestion(prev => Math.min(prev + 1, suggestions.length - 1));
      return;
    }
    if (e.key === "ArrowUp" && suggestions.length > 0) {
      e.preventDefault();
      setSelectedSuggestion(prev => Math.max(prev - 1, 0));
      return;
    }

    // Enter to execute
    if (e.key === "Enter") {
      if (selectedSuggestion >= 0 && suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion]);
        setSuggestions([]);
        setSelectedSuggestion(-1);
      } else {
        executeCommand(input);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Scanline effect */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]" style={{
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
      }} />

      {/* Terminal window */}
      <div className="flex-1 flex flex-col max-w-5xl w-full mx-auto p-4 md:p-8">
        {/* Window chrome */}
        <div className="bg-[#1a1a1a] rounded-t-xl border border-[#333] border-b-0 px-4 py-3 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff8a84] transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#ffd074] transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#5ee077] transition-colors cursor-pointer" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[#666] text-sm font-mono">visitor@dimmah — zsh — 80×24</span>
          </div>
          <div className="w-[52px]" /> {/* Spacer for symmetry */}
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="flex-1 bg-[#0d0d0d] border border-[#333] border-t-0 rounded-b-xl p-6 overflow-y-auto font-mono text-sm md:text-base leading-relaxed cursor-text min-h-[60vh]"
        >
          {/* Lines */}
          {lines.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap ${
                line.type === "input" 
                  ? "text-[#50fa7b]" 
                  : line.type === "system" 
                    ? "text-[#6272a4]"
                    : "text-[#f8f8f2]"
              }`}
            >
              {line.content}
            </div>
          ))}

          {/* Input line */}
          {!isBooting && (
            <div className="relative">
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-[#50fa7b]">visitor@dimmah ~ %&nbsp;</span>
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent text-[#f8f8f2] outline-none caret-[#50fa7b]"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                  />
                  {/* Rotating placeholder hint when empty */}
                  {input.length === 0 && (
                    <span className="absolute left-0 top-0 text-[#555] pointer-events-none transition-opacity duration-300">
                      {placeholderHints[placeholderIndex]}
                    </span>
                  )}
                  {/* Inline ghost suggestion */}
                  {suggestions.length > 0 && input.length > 0 && (
                    <span className="absolute left-0 top-0 text-[#6272a4] pointer-events-none">
                      {input}<span className="opacity-50">{suggestions[0].slice(input.length)}</span>
                    </span>
                  )}
                </div>
              </form>

              {/* Autocomplete dropdown */}
              {suggestions.length > 1 && (
                <div className="absolute left-0 top-full mt-1 bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden z-10">
                  {suggestions.map((suggestion, i) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setInput(suggestion);
                        setSuggestions([]);
                        inputRef.current?.focus();
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm cursor-pointer transition-colors ${
                        i === selectedSuggestion 
                          ? "bg-[#50fa7b] text-[#0d0d0d]" 
                          : "text-[#f8f8f2] hover:bg-[#333]"
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick command buttons */}
        {!isBooting && (
          <div className="mt-4">
            <p className="text-[#555] text-xs font-mono mb-3">or click one ↓</p>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_COMMANDS.filter(cmd => cmd !== "clear").map((cmd, i) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-4 py-2.5 bg-[#1a1a1a] border border-[#444] rounded-lg text-[#aaa] hover:text-[#50fa7b] hover:border-[#50fa7b] hover:bg-[#1f1f1f] text-sm font-mono transition-all cursor-pointer hover:scale-105 active:scale-95"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Hint */}
        {!isBooting && (
          <p className="mt-3 text-center text-[#444] text-xs font-mono">
            Tab to autocomplete • Enter to run
          </p>
        )}
      </div>
    </main>
  );
}
