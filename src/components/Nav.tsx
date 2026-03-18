"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[0.85rem] font-medium tracking-[0.08em] uppercase text-ink"
        >
          The Lindley Team
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {["About", "Services", "Neighborhoods", "Journal", "Calculator", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[0.78rem] font-medium text-ink-mid uppercase tracking-[0.04em] hover:text-ink transition-colors"
              >
                / {item}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="tel:9717541771"
            className="hidden md:block text-[0.78rem] font-medium text-ink-mid"
          >
            971.754.1771
          </a>
          <Link
            href="/apply"
            className="px-5 py-2.5 bg-ink text-white rounded-full text-[0.72rem] font-medium tracking-[0.06em] uppercase hover:scale-[1.03] hover:shadow-lg transition-all"
          >
            Get Pre-Approved
          </Link>
        </div>
      </div>
    </nav>
  );
}
