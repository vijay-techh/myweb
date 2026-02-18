import MediaNavbar from "@/components/layout/MediaNavbar";

export default function MediaPage() {
  return (
    <>
      <MediaNavbar />

      <main className="py-28">
        <div className="content-shell max-w-5xl space-y-16">

          {/* Header */}
          <section className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              VRM Group
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              VRM Media
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              We build narratives that explain reality without simplifying it.
              Media that prioritizes understanding over attention.
            </p>
          </section>

          {/* Philosophy Block */}
          <section className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-gray-400 leading-relaxed">
                We slow down the news cycle. We examine systems, incentives,
                and power structures beneath headlines.
                No noise. No outrage bait.
              </p>
            </div>
          </section>

          {/* Articles */}
          <section className="border-t border-white/10 pt-16">
            <h2 className="text-2xl font-semibold mb-8">
              Latest Analysis
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <ArticleCard 
                title="Why GDP Growth Can Mislead"
                excerpt="Understanding structural growth vs nominal expansion."
              />
              <ArticleCard 
                title="India's Policy Cycles"
                excerpt="How electoral timing shapes economic decisions."
              />
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

function ArticleCard({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{excerpt}</p>
      <div className="text-white opacity-80">Read →</div>
    </div>
  );
}
