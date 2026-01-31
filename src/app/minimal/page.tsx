import Link from "next/link";

export default function MinimalPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* Nav - Bare minimum */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-stone-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold">Dimmah</span>
          <a href="mailto:hello@dimmah.com" className="text-sm text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
            hello@dimmah.com
          </a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero - Direct */}
        <section className="mb-32">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
            Software agency.
            <br />
            <span className="text-stone-400">London.</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-xl mb-10">
            We build web apps, mobile apps, and AI products for companies that need to ship fast.
          </p>
          <a
            href="mailto:hello@dimmah.com?subject=New%20Project"
            className="inline-flex px-6 py-3 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Start a project →
          </a>
        </section>

        {/* What we build - List format */}
        <section className="mb-32">
          <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-8">What we build</h2>
          <div className="space-y-6">
            {[
              { title: "Web Applications", desc: "Next.js, React, Node.js. Landing pages to full SaaS." },
              { title: "Mobile Apps", desc: "React Native. One codebase, both platforms." },
              { title: "Backend & APIs", desc: "Scalable systems. PostgreSQL, Redis, GraphQL." },
              { title: "AI Products", desc: "LLM integration, agents, intelligent automation." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 py-6 border-b border-stone-100">
                <span className="text-sm text-stone-400 font-mono">0{i + 1}</span>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-stone-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How we work - No fluff */}
        <section className="mb-32">
          <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-8">How we work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-medium mb-2">Fast</h3>
              <p className="text-stone-500">MVPs in 4-8 weeks. Full products in 2-4 months. We don&apos;t waste time.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Direct</h3>
              <p className="text-stone-500">No account managers. You talk to the people building your product.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Transparent</h3>
              <p className="text-stone-500">Fixed prices where possible. Weekly updates. No surprises.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Senior</h3>
              <p className="text-stone-500">No juniors learning on your project. Experienced engineers only.</p>
            </div>
          </div>
        </section>

        {/* Pricing - Upfront */}
        <section className="mb-32">
          <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-8">Typical pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-4 font-medium">Project type</th>
                  <th className="text-left py-4 font-medium">Timeline</th>
                  <th className="text-left py-4 font-medium">Investment</th>
                </tr>
              </thead>
              <tbody className="text-stone-600">
                <tr className="border-b border-stone-100">
                  <td className="py-4">Landing page</td>
                  <td className="py-4">1-2 weeks</td>
                  <td className="py-4">£2-5k</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4">Web app (MVP)</td>
                  <td className="py-4">4-8 weeks</td>
                  <td className="py-4">£10-25k</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4">Full SaaS product</td>
                  <td className="py-4">2-4 months</td>
                  <td className="py-4">£25-75k+</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4">Mobile app</td>
                  <td className="py-4">6-12 weeks</td>
                  <td className="py-4">£15-40k</td>
                </tr>
                <tr>
                  <td className="py-4">Retainer</td>
                  <td className="py-4">Ongoing</td>
                  <td className="py-4">£3-8k/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-400 mt-4">Prices depend on scope. We&apos;ll give you an accurate quote after understanding your project.</p>
        </section>

        {/* Selected work - Minimal */}
        <section className="mb-32">
          <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-8">Selected work</h2>
          <div className="space-y-8">
            {[
              { name: "E-commerce platform", result: "340% conversion increase", stack: "Next.js, Stripe" },
              { name: "FinTech dashboard", result: "50k active users", stack: "React, D3.js" },
              { name: "Healthcare app", result: "4.8★ App Store", stack: "React Native" },
              { name: "AI writing tool", result: "0→10k users in 3 months", stack: "Next.js, OpenAI" },
            ].map((project, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-stone-100">
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-sm text-stone-400">{project.stack}</p>
                </div>
                <span className="text-stone-500">{project.result}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact - Simple */}
        <section className="py-16 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Ready to build?</h2>
              <p className="text-stone-500">Email us with your project details.</p>
            </div>
            <a
              href="mailto:hello@dimmah.com?subject=New%20Project"
              className="inline-flex px-8 py-4 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors cursor-pointer"
            >
              hello@dimmah.com
            </a>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer className="pt-16 border-t border-stone-100 flex items-center justify-between text-sm text-stone-400">
          <span>© 2024 Dimmah</span>
          <div className="flex gap-6">
            <a href="https://linkedin.com/company/dimmah" className="hover:text-stone-900 transition-colors cursor-pointer">LinkedIn</a>
            <a href="https://twitter.com/dimmahHQ" className="hover:text-stone-900 transition-colors cursor-pointer">Twitter</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
