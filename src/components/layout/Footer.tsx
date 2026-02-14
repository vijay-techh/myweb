export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">

          {/* Brand */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide">
              VRM
            </h3>
          </div>

          {/* Platform */}
          <FooterColumn
            title="Platform"
            links={["Media", "Data", "Intelligence", "Consultancy"]}
          />

          {/* Features */}
          <FooterColumn
            title="Features"
            links={["Core features", "Pro experience", "Integrations"]}
          />

          {/* Learn more */}
          <FooterColumn
            title="Learn more"
            links={["Blog", "Case studies", "Customer stories", "Best practices"]}
          />

          {/* Support */}
          <FooterColumn
            title="Support"
            links={["Contact", "Support", "Legal"]}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="text-sm font-medium text-white tracking-wide">
        {title}
      </h4>

      <ul className="mt-4 space-y-2 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
