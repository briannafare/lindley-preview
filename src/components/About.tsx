"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-[#eee]">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
              alt="Bri Lindley — Senior Loan Officer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-[0.7rem] font-semibold text-ink flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow" />
              NMLS #1367416
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-light mb-2">
              Meet Bri
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-tight mb-5">
              Not your typical{" "}
              <span className="font-script font-normal text-blue text-[1em]">
                loan officer
              </span>
            </h2>

            <div className="space-y-3 mb-7">
              <p className="text-[0.95rem] leading-relaxed text-ink-mid font-normal">
                I&apos;m Bri Lindley. I&apos;ve spent my career in Portland mortgage,
                watching the market shift, watching families build wealth, and
                watching too many people get steered into loans that didn&apos;t fit
                their lives.
              </p>
              <p className="text-[0.95rem] leading-relaxed text-ink-mid font-normal">
                So I do things differently. I listen first. I structure financing
                around where you&apos;re going, not just where you are. And I&apos;ll
                tell you straight if something doesn&apos;t make sense.
              </p>
              <p className="text-[0.95rem] leading-relaxed text-ink-mid font-normal">
                This is a mother-daughter team. My mom Tammi built the foundation
                over two decades. I&apos;m building on it with fresh eyes and new
                tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-6 border-t border-border">
              {[
                "CDLP Certified",
                "OR / WA / CA Licensed",
                "Mortgage Express",
                "1,000+ Families Served",
              ].map((cred) => (
                <div
                  key={cred}
                  className="flex items-center gap-2 text-[0.72rem] font-medium text-ink-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  {cred}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
