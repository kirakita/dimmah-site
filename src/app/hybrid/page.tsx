"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Terminal component (easter egg)
function Terminal({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const COMMANDS: Record<string, string[]> = {
    help: ["Commands: about, services, work, stack, contact, exit"],
    about: ["DIMMAH — Software agency, London", "We build software that works. No fluff."],
    services: ["→ Web apps (Next.js, React)", "→ Mobile (React Native)", "→ Backend & APIs", "→ AI integration"],
    work: ["E-commerce: 340% conversion lift", "FinTech dashboard: 50k users", "Healthcare app: 4.8★"],
    stack: ["Next.js, React, Node.js, TypeScript", "PostgreSQL, Redis, Vercel, OpenAI"],
    contact: ["→ hello@dimmah.com", "→ linkedin.com/company/dimmah"],
  };

  useEffect(() => {
    inputRef.current?.focus();
    setLines(["DIMMAH v1.0 // Type 'help' or 'exit'", ""]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (cmd === "exit" || cmd === "quit" || cmd === "q") { onClose(); return; }
    if (cmd === "clear") { setLines([]); setInput(""); return; }
    const newLines = [...lines, `$ ${input}`];
    if (cmd && COMMANDS[cmd]) { COMMANDS[cmd].forEach(line => newLines.push(line)); }
    else if (cmd) { newLines.push(`Command not found: ${cmd}`); }
    newLines.push("");
    setLines(newLines);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-stone-900 rounded-t-xl border border-stone-700 border-b-0 px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-stone-500 text-sm font-mono">dimmah — bash</span>
          <span className="text-stone-600 text-xs">ESC to close</span>
        </div>
        <div ref={terminalRef} className="bg-stone-950 border border-stone-700 rounded-b-xl p-4 h-[400px] overflow-y-auto font-mono text-sm" onClick={() => inputRef.current?.focus()}>
          {lines.map((line, i) => (
            <div key={i} className={line.startsWith("$") ? "text-green-400" : "text-stone-300"}>{line}</div>
          ))}
          <form onSubmit={handleSubmit} className="flex">
            <span className="text-green-400">$&nbsp;</span>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-transparent text-green-400 outline-none" autoFocus />
          </form>
        </div>
      </div>
    </div>
  );
}

// Device mockup component for project screenshots
function DeviceMockup({ type, gradient, title }: { type: "desktop" | "mobile"; gradient: string; title: string }) {
  if (type === "mobile") {
    return (
      <div className="relative mx-auto w-[140px] h-[280px]">
        {/* Phone frame */}
        <div className="absolute inset-0 bg-stone-900 rounded-[2rem] shadow-2xl border-4 border-stone-800">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-stone-800 rounded-full" />
          {/* Screen */}
          <div className={`absolute top-6 left-2 right-2 bottom-2 rounded-[1.25rem] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-white/60 text-xs font-medium text-center px-2">{title}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[400px]">
      {/* Browser frame */}
      <div className="bg-stone-900 rounded-xl shadow-2xl border border-stone-800 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-stone-800 border-b border-stone-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-stone-900 rounded-md px-3 py-1 text-xs text-stone-500 truncate">
              dimmah.com/projects/{title.toLowerCase().replace(/\s/g, "-")}
            </div>
          </div>
        </div>
        {/* Screen content */}
        <div className={`aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <span className="text-white/60 text-sm font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default function HybridPage() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "Escape") {
        if (e.key === "Escape" && showTerminal) setShowTerminal(false);
        else if (e.key === "`") setShowTerminal(!showTerminal);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showTerminal]);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@dimmah.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    { name: "E-commerce Platform", stack: "Next.js, Stripe, PostgreSQL", result: "340% conversion increase", type: "desktop" as const, gradient: "from-violet-600 to-indigo-700" },
    { name: "FinTech Dashboard", stack: "React, D3.js, WebSocket", result: "50k active users", type: "desktop" as const, gradient: "from-emerald-600 to-teal-700" },
    { name: "Healthcare App", stack: "React Native, Node.js", result: "4.8★ App Store rating", type: "mobile" as const, gradient: "from-rose-500 to-pink-600" },
    { name: "AI Writing Tool", stack: "Next.js, OpenAI, Vercel", result: "0 → 10k users in 3 months", type: "desktop" as const, gradient: "from-amber-500 to-orange-600" },
  ];

  return (
    <>
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
      
      <main className="min-h-screen bg-stone-50 overflow-hidden">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-stone-200 z-40">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-semibold text-stone-900">
              Dimmah<span className="text-amber-500">.</span>
            </span>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600">
                <a href="#services" className="hover:text-stone-900 transition-colors cursor-pointer">Services</a>
                <a href="#work" className="hover:text-stone-900 transition-colors cursor-pointer">Work</a>
                <a href="#pricing" className="hover:text-stone-900 transition-colors cursor-pointer">Pricing</a>
              </nav>
              <a href="mailto:hello@dimmah.com" className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors cursor-pointer">
                Get in Touch
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative pt-32 pb-24 px-6">
          {/* Background decorations */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-[100px] -z-10" />
          <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-[80px] -z-10" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-700 mb-6">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                  Available for new projects
                </div>
                
                <h1 className="text-5xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-[1.1] mb-6">
                  We build software
                  <br />
                  <span className="text-stone-400">that works.</span>
                </h1>
                
                <p className="text-xl text-stone-500 mb-10 max-w-xl">
                  London-based software agency. Web apps, mobile apps, AI products. 
                  Fast delivery, no excuses.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:hello@dimmah.com?subject=New%20Project" className="px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                    Start a Project
                  </a>
                  <a href="#work" className="px-6 py-3 bg-white border border-stone-200 text-stone-700 rounded-xl font-medium hover:border-stone-300 hover:bg-stone-50 transition-all cursor-pointer">
                    View Our Work
                  </a>
                </div>
              </div>

              {/* Hero visual - floating devices */}
              <div className="relative hidden lg:block">
                <div className="relative h-[500px]">
                  {/* Desktop mockup */}
                  <div className="absolute top-0 right-0 w-[380px] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <DeviceMockup type="desktop" gradient="from-violet-600 to-indigo-700" title="Dashboard" />
                  </div>
                  {/* Mobile mockup */}
                  <div className="absolute bottom-8 left-8 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <DeviceMockup type="mobile" gradient="from-amber-500 to-orange-600" title="Mobile App" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center transform rotate-12">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="absolute bottom-32 right-20 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl shadow-lg shadow-rose-500/25 flex items-center justify-center transform -rotate-12">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="mt-20 pt-12 border-t border-stone-200">
              <p className="text-sm text-stone-400 text-center mb-8 uppercase tracking-wider">Technologies we work with</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "OpenAI"].map((tech) => (
                  <span key={tech} className="text-stone-400 font-medium text-lg hover:text-stone-600 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">What We Build</h2>
              <p className="text-3xl md:text-4xl font-semibold text-stone-900">Full-stack capabilities</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Web Applications", desc: "Next.js, React, full-stack. From landing pages to complex SaaS platforms.", icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5", color: "violet" },
                { title: "Mobile Apps", desc: "React Native, cross-platform. One codebase, iOS + Android.", icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3", color: "rose" },
                { title: "Backend & APIs", desc: "Node.js, PostgreSQL, scalable systems. Secure, documented, fast.", icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3", color: "emerald" },
                { title: "AI Integration", desc: "LLMs, agents, automation. Make your product intelligent.", icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z", color: "amber" },
              ].map((service, i) => {
                const colorClasses: Record<string, string> = {
                  violet: "bg-violet-50 group-hover:bg-violet-100 text-violet-600",
                  rose: "bg-rose-50 group-hover:bg-rose-100 text-rose-600",
                  emerald: "bg-emerald-50 group-hover:bg-emerald-100 text-emerald-600",
                  amber: "bg-amber-50 group-hover:bg-amber-100 text-amber-600",
                };
                return (
                  <div key={i} className="p-8 bg-stone-50 border border-stone-100 rounded-2xl hover:border-stone-200 hover:shadow-lg transition-all cursor-pointer group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${colorClasses[service.color]}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">Selected Work</h2>
              <p className="text-3xl md:text-4xl font-semibold text-stone-900">Projects we&apos;re proud of</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                  {/* Project visual */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                    {project.type === "mobile" ? (
                      <div className="transform group-hover:scale-105 transition-transform duration-500">
                        <DeviceMockup type="mobile" gradient="from-white/20 to-white/5" title="" />
                      </div>
                    ) : (
                      <div className="w-full max-w-[300px] transform group-hover:scale-105 transition-transform duration-500">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                          <div className="flex gap-1.5 mb-3">
                            <div className="w-2 h-2 rounded-full bg-white/40" />
                            <div className="w-2 h-2 rounded-full bg-white/40" />
                            <div className="w-2 h-2 rounded-full bg-white/40" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-white/20 rounded w-3/4" />
                            <div className="h-2 bg-white/20 rounded w-1/2" />
                            <div className="h-2 bg-white/20 rounded w-5/6" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Project info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-stone-900 mb-1">{project.name}</h3>
                        <p className="text-sm text-stone-400">{project.stack}</p>
                      </div>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium rounded-full whitespace-nowrap">
                        {project.result}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">Transparent Pricing</h2>
              <p className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">No surprises</p>
              <p className="text-stone-500 max-w-xl mx-auto">We&apos;ll give you an accurate quote after understanding your needs. Here&apos;s what typical projects cost.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { type: "Landing Page", time: "1-2 weeks", price: "£2-5k", features: ["Design + Development", "Mobile responsive", "Basic SEO", "1 round revisions"] },
                { type: "Web App (MVP)", time: "4-8 weeks", price: "£10-25k", features: ["Full-stack app", "Auth + Database", "Admin dashboard", "Deployment"], popular: true },
                { type: "Full Product", time: "2-4 months", price: "£25-75k+", features: ["Custom design system", "Complex features", "Integrations", "Ongoing support"] },
              ].map((tier, i) => (
                <div key={i} className={`relative p-8 rounded-2xl border ${tier.popular ? "border-amber-300 bg-amber-50/50" : "border-stone-200 bg-stone-50"}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-medium text-stone-900 mb-2">{tier.type}</h3>
                  <div className="text-3xl font-semibold text-stone-900 mb-1">{tier.price}</div>
                  <p className="text-sm text-stone-400 mb-6">{tier.time}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                        <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-stone-900 rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Ready to build?</h2>
                  <p className="text-stone-400 text-lg">Let&apos;s turn your idea into reality.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={handleCopy} className="px-8 py-4 bg-amber-500 text-stone-900 rounded-xl font-medium hover:bg-amber-400 transition-all hover:shadow-lg cursor-pointer">
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                  <a href="mailto:hello@dimmah.com" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all cursor-pointer text-center">
                    hello@dimmah.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <span className="font-medium text-stone-900">Dimmah<span className="text-amber-500">.</span></span>
              <span>© 2024. London.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="https://linkedin.com/company/dimmah" className="hover:text-stone-900 transition-colors cursor-pointer">LinkedIn</a>
              <a href="https://twitter.com/dimmahHQ" className="hover:text-stone-900 transition-colors cursor-pointer">Twitter</a>
              <a href="https://github.com/dimmah" className="hover:text-stone-900 transition-colors cursor-pointer">GitHub</a>
              <button onClick={() => setShowTerminal(true)} className="hover:text-stone-900 transition-colors cursor-pointer font-mono" title="Press ` for terminal mode">
                ~/dev
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
