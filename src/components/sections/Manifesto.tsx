export default function Manifesto() {
  return (
    <section className="relative py-32 border-t border-white/10 overflow-hidden">
      <div className="content-shell max-w-3xl mx-auto text-center space-y-16">

        {/* Intro Statement */}
        <div className="space-y-6 animate-fadeUp">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            The world is loud.
          </h2>
          <p className="text-2xl text-gray-300">
            Most of it is noise.
          </p>
        </div>

        {/* Core Beliefs */}
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed animate-fadeUp delay-150">
          <p>Clarity is built, not claimed.</p>
          <p>Data without context misleads.</p>
          <p>Narratives without structure decay.</p>
        </div>

        {/* Mission */}
        <div className="space-y-6 animate-fadeUp delay-300">
          <p className="text-gray-300 text-xl leading-relaxed">
            VRM Group exists to slow things down,
            examine systems beneath the surface,
            and turn complexity into understanding.
          </p>
        </div>

      </div>
    </section>
  );
}
