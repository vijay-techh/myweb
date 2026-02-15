export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow" />

      <div className="hero-inner">
        <p className="hero-tag animate-fade-up delay-1">VRM GROUP</p>

        <h1 className="hero-title animate-fade-up delay-2">
          Happiness
          <br />
          For Life
        </h1>

        <p className="hero-subtitle animate-fade-up delay-3">
          Building clarity in a world overloaded with noise.
        </p>

        <div className="hero-actions animate-fade-up delay-4">
          <button className="hero-primary">Explore Platform</button>
          <button className="hero-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
