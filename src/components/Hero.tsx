"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-end relative overflow-hidden pb-16 lg:pb-20">
      {/* Floating Portland landmark image — Met "art object" style */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1200&q=80"
            alt="St Johns Bridge architectural detail — Portland, Oregon"
            fill
            className="object-cover img-bw opacity-30"
            priority
            sizes="45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10">
        <p className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-ink-mid mb-8">
          Portland, Oregon · Mortgage Strategy
        </p>

        <h1 className="font-display text-[clamp(4.5rem,10vw,10rem)] font-extrabold leading-[0.92] tracking-tight max-w-[800px] mb-10">
          The Lindley
          <br />
          <span className="font-script font-normal text-orange leading-none text-[0.85em]">
            Team
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <p className="text-[0.95rem] leading-relaxed text-ink-mid font-normal max-w-[400px]">
            Three decades helping Portland families build wealth through real
            estate — not just buy houses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="px-8 py-4 bg-ink text-white rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:scale-[1.03] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Get Pre-Approved <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/neighborhoods"
              className="px-8 py-4 border-[1.5px] border-ink text-ink rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:bg-ink hover:text-white transition-all inline-flex items-center gap-2"
            >
              Explore Portland <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
