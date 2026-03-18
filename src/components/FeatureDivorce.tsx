"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeatureDivorce() {
  return (
    <section className="py-24 bg-ink text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-silver mb-2">
              Specialty
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-tight mb-5">
              Divorce doesn&apos;t have to mean losing{" "}
              <span className="font-script font-normal text-orange text-[1em]">
                your home
              </span>
            </h2>
            <p className="text-[0.95rem] leading-relaxed text-silver font-light mb-8">
              As a Certified Divorce Lending Professional, Bri works with
              divorcing spouses, attorneys, and mediators to structure mortgage
              solutions that protect both parties.
            </p>
            <Link
              href="/services/divorce-lending"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:scale-[1.03] hover:shadow-xl transition-all"
            >
              Learn More <span>→</span>
            </Link>
            <div className="flex gap-10 mt-10 pt-6 border-t border-white/10">
              {[
                { val: "CDLP", label: "Certified" },
                { val: "100+", label: "Divorce Cases" },
                { val: "OR / WA / CA", label: "Licensed" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-2xl font-extrabold text-yellow">
                    {s.val}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.1em] text-silver mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — close-up Portland detail, duotone warm treatment like Met art objects */}
          <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative">
            <Image
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
              alt="Portland cityscape at golden hour"
              fill
              className="object-cover hover:scale-[1.04] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Warm duotone overlay like Met uses on select images */}
            <div className="absolute inset-0 bg-orange/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
