"use client";

import { useState, useEffect } from "react";

// Simulated live data
function useTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

function usePing() {
  const [ping, setPing] = useState(42);
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * 30) + 30);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return ping;
}

export default function BentoPage() {
  const time = useTime();
  const ping = usePing();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@dimmah.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-stone-950 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">
            Dimmah<span className="text-amber-500">.</span>
          </h1>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Systems operational
            </span>
            <span>{time.toLocaleTimeString("en-GB")}</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Hero Card - Large */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-amber-100 text-sm font-medium mb-2">Software Agency</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We build
                <br />
                software that
                <br />
                <span className="text-stone-900">works.</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <a href="#contact" className="px-5 py-2.5 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors cursor-pointer">
                Start Project
              </a>
              <a href="#work" className="px-5 py-2.5 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors cursor-pointer">
                View Work
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 flex flex-col justify-between">
            <span className="text-stone-500 text-sm">Projects Shipped</span>
            <div>
              <span className="text-5xl font-bold">50+</span>
              <p className="text-stone-500 text-sm mt-1">and counting</p>
            </div>
          </div>

          {/* Live Ping */}
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 flex flex-col justify-between">
            <span className="text-stone-500 text-sm">API Response</span>
            <div>
              <span className="text-5xl font-bold text-green-400">{ping}</span>
              <span className="text-2xl text-green-400">ms</span>
              <p className="text-stone-500 text-sm mt-1">avg latency</p>
            </div>
          </div>

          {/* Code Preview */}
          <div className="md:col-span-2 bg-stone-900 border border-stone-800 rounded-3xl p-6 font-mono text-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-stone-500 ml-2">dimmah.ts</span>
            </div>
            <pre className="text-stone-300">
<span className="text-purple-400">const</span> <span className="text-blue-400">dimmah</span> = {"{"}
  <span className="text-stone-500">speed:</span> <span className="text-orange-400">&quot;fast&quot;</span>,
  <span className="text-stone-500">quality:</span> <span className="text-orange-400">&quot;uncompromising&quot;</span>,
  <span className="text-stone-500">excuses:</span> <span className="text-amber-400">0</span>,
{"}"}</pre>
          </div>

          {/* Services List */}
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6">
            <span className="text-stone-500 text-sm">We Build</span>
            <div className="mt-4 space-y-2">
              {["Web Apps", "Mobile", "APIs", "AI"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 flex flex-col justify-between">
            <span className="text-stone-500 text-sm">Based in</span>
            <div>
              <span className="text-2xl font-bold">London</span>
              <p className="text-stone-500 text-sm">Working globally</p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="md:col-span-2 bg-stone-900 border border-stone-800 rounded-3xl p-6">
            <span className="text-stone-500 text-sm">Tech Stack</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind", "Vercel", "OpenAI"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div id="contact" className="md:col-span-2 bg-stone-900 border border-stone-800 rounded-3xl p-6 flex items-center justify-between">
            <div>
              <span className="text-stone-500 text-sm">Ready to build?</span>
              <p className="text-xl font-semibold mt-1">hello@dimmah.com</p>
            </div>
            <button 
              onClick={handleCopy}
              className="px-5 py-2.5 bg-amber-500 text-stone-900 rounded-xl font-medium hover:bg-amber-400 transition-colors cursor-pointer"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Philosophy Quote */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 rounded-3xl p-8 flex items-center">
            <blockquote className="text-xl md:text-2xl font-medium text-stone-300 italic">
              &ldquo;In a world where everyone is intelligent,{" "}
              <span className="text-amber-400 not-italic">speed is your only edge.</span>&rdquo;
            </blockquote>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between text-sm text-stone-500">
          <p>© 2024 Dimmah. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/company/dimmah" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a>
            <a href="https://twitter.com/dimmahHQ" className="hover:text-white transition-colors cursor-pointer">Twitter</a>
            <a href="https://github.com/dimmah" className="hover:text-white transition-colors cursor-pointer">GitHub</a>
          </div>
        </div>
      </div>
    </main>
  );
}
