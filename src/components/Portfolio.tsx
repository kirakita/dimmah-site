const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A high-performance e-commerce solution with real-time inventory and seamless checkout.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "FinTech Dashboard",
    category: "SaaS Product",
    description: "Real-time financial analytics dashboard for tracking investments and market trends.",
    tech: ["React", "TypeScript", "D3.js", "WebSocket"],
    color: "from-stone-700 to-stone-900",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Patient management system with appointment booking and telemedicine features.",
    tech: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 relative bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-wide uppercase text-sm">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-6">
            Projects that speak
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            A selection of work we&apos;re proud of. Each project represents a unique challenge solved with creativity and technical excellence.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              {/* Project image placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/70 font-medium text-sm uppercase tracking-wider">
                    Case Study Coming Soon
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-amber-600 text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-stone-900 mt-2 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-stone-100 border border-stone-200 rounded-md text-xs text-stone-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 font-medium transition-colors duration-200 cursor-pointer"
          >
            Want to see more? Let&apos;s talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
