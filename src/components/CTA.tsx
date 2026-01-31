export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-stone-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-700/50 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to build something{" "}
          <span className="text-amber-500">amazing</span>?
        </h2>
        <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
          Let&apos;s turn your ideas into reality. Whether you have a detailed spec or just a rough concept, we&apos;re here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@dimmah.com"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 rounded-xl font-semibold text-lg transition-all duration-200 hover-lift flex items-center gap-3 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            hello@dimmah.com
          </a>
          <a
            href="https://linkedin.com/company/dimmah"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-lg transition-all duration-200 hover-lift flex items-center gap-3 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <p className="text-stone-500 text-sm mt-8">
          We typically respond within 24 hours
        </p>
      </div>
    </section>
  );
}
