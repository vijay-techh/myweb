import Link from "next/link";

const pillars = [
  {
    title: "VRM MEDIA",
    description: "We cover stories within India and across the world.",
    href: "/media",
    art: "art-soft-lime",
  },
  {
    title: "VRM DATA",
    description: "Let the data say what matters most.",
    href: "/data",
    art: "art-rose-sand",
  },
  {
    title: "Intelligence",
    description:
      "We connect signals across systems to form judgment and clarity.",
    href: "/intelligence",
    art: "art-aqua",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="content-shell space-y-12">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Platform
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            What we do
          </h2>
        </div>

        <div className="cards-row">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="pillar-card group flex flex-col transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`pillar-art ${pillar.art}`} aria-hidden />

              <div className="p-7 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white">
                  {pillar.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed flex-1">
                  {pillar.description}
                </p>

                <div className="inline-flex items-center text-white font-semibold opacity-80 group-hover:opacity-100">
                  View
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
