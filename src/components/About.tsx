const values = [
  {
    title: "Speed",
    description: "We move fast without breaking things. In a world where everyone is intelligent, speed is your only edge.",
  },
  {
    title: "Quality",
    description: "Every detail matters, every pixel counts. We don't ship until it's right.",
  },
  {
    title: "Transparency",
    description: "No surprises, no hidden costs. Clear communication throughout the entire process.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-amber-600 font-medium tracking-wide uppercase text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-6">
              More than just developers
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              At Dimmah, we&apos;re not just building software—we&apos;re building partnerships. We take the time to understand your business, your goals, and your vision before writing a single line of code.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              Based in London, we work with clients globally, bringing a unique blend of technical excellence and business acumen to every project. When you work with us, you get a team that&apos;s as invested in your success as you are.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">{value.title}</div>
                    <div className="text-stone-500">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual element */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-3xl border border-stone-200 p-8 relative overflow-hidden shadow-xl shadow-stone-200/50">
              {/* Code visual */}
              <div className="font-mono text-sm space-y-3">
                <div className="text-stone-400">// Our philosophy</div>
                <div>
                  <span className="text-amber-600">const</span>{" "}
                  <span className="text-stone-700">dimmah</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-stone-500">mission:</span>{" "}
                  <span className="text-emerald-600">&quot;Build exceptional software&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-stone-500">approach:</span>{" "}
                  <span className="text-emerald-600">&quot;Partner, not vendor&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-stone-500">quality:</span>{" "}
                  <span className="text-amber-600">Infinity</span>,
                </div>
                <div className="pl-4">
                  <span className="text-stone-500">excuses:</span>{" "}
                  <span className="text-amber-600">0</span>,
                </div>
                <div>{"}"}</div>
                <div className="mt-6 text-stone-400">// What we deliver</div>
                <div>
                  <span className="text-amber-600">function</span>{" "}
                  <span className="text-stone-700">buildSuccess</span>(client) {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-amber-600">return</span> client.goals
                </div>
                <div className="pl-8">
                  .<span className="text-stone-700">map</span>(goal ={">"}{" "}
                  <span className="text-stone-700">exceed</span>(goal))
                </div>
                <div>{"}"}</div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
