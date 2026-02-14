import Link from "next/link";
import Image from "next/image";

function Card({
  href,
  title,
  description,
  image,
}: {
  href: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/20"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="bg-black px-6 pt-6 pb-8 text-left">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="mt-6 text-sm text-white opacity-80">
          View →
        </div>
      </div>
    </Link>
  );
}
