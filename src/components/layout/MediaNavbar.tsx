"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MediaNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Analysis", href: "/media" },
    { name: "Policy", href: "/media/policy" },
    { name: "Economy", href: "/media/economy" },
    { name: "Technology", href: "/media/technology" },
  ];

  return (
    <header className="media-navbar">
      <div className="media-navbar-inner">

        {/* Logo */}
        <Link href="/media" className="media-logo">
          VRM Media
        </Link>

        {/* Navigation */}
        <nav className="media-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`media-nav-item ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="media-nav-right">
          <Link href="/media/about">About</Link>
          <Link href="/join" className="join-btn">Join</Link>
        </div>

      </div>
    </header>
  );
}
