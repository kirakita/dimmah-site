export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 grid-bg">
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-stone-200/60 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6 leading-[1.1]">
          Seamless Solutions,
          <br />
          <span className="gold-text">Superior Results</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          We build world-class software that drives growth. Your dedicated technology partner for the digital age.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover-lift cursor-pointer"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="px-8 py-4 bg-white hover:bg-stone-50 border border-stone-200 text-stone-900 rounded-xl font-semibold text-lg transition-all duration-200 hover-lift cursor-pointer"
          >
            View Our Work
          </a>
        </div>

        {/* Clients/Trust bar */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <p className="text-sm text-stone-400 mb-6 uppercase tracking-wider">Trusted by forward-thinking companies</p>
          <div className="flex items-center justify-center gap-12 opacity-40 grayscale">
            {/* Placeholder logos - replace with actual client logos */}
            {["Client 1", "Client 2", "Client 3", "Client 4"].map((client, i) => (
              <div key={i} className="text-stone-400 font-semibold text-lg">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-stone-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
