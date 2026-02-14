"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-gray-400 md:hidden"
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black px-6 py-10 overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="mb-10 text-sm text-gray-400"
          >
            Close
          </button>

          <div className="space-y-10">
            <MobileSection title="Platform" links={["Media", "Teams", "Admins", "Developers"]} />
            <MobileSection title="Features" links={["Core features", "Pro experience", "Integrations"]} />
            <MobileSection title="Learn more" links={["Blog", "Case studies", "Customer stories", "Best practices"]} />
            <MobileSection title="Support" links={["Contact", "Support", "Legal"]} />
          </div>
        </div>
      )}
    </>
  );
}

function MobileSection({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-white font-medium tracking-wide">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
