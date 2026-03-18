"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureDivorce() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".divorce-text > *", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".divorce-svg path, .divorce-svg circle, .divorce-svg line", {
        strokeDashoffset: 600,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-32 bg-ink text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="divorce-text">
            <p className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-silver mb-2">
              Specialty
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-tight mb-5">
              Divorce doesn&apos;t have to mean losing{" "}
              <span className="font-script font-normal text-orange text-[1.15em]">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink rounded-full text-[0.78rem] font-medium tracking-[0.04em] uppercase hover:scale-[1.03] hover:shadow-xl transition-all"
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
                  <div className="font-display text-2xl font-light text-yellow">
                    {s.val}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.1em] text-silver mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract SVG composition — house/division motif */}
          <div className="flex items-center justify-center">
            <svg
              className="divorce-svg w-full max-w-[420px] h-auto"
              viewBox="0 0 420 320"
              fill="none"
            >
              {/* Concentric circles */}
              <circle cx="210" cy="160" r="140" stroke="#E26125" strokeWidth="0.75" opacity="0.15" strokeDasharray="880" />
              <circle cx="210" cy="160" r="100" stroke="#3554D9" strokeWidth="0.5" opacity="0.1" strokeDasharray="630" />
              <circle cx="210" cy="160" r="60" stroke="#E26125" strokeWidth="0.5" opacity="0.08" strokeDasharray="377" />

              {/* Abstract house/roof */}
              <path
                d="M130 200 L210 100 L290 200"
                stroke="#E26125"
                strokeWidth="1.5"
                strokeDasharray="300"
              />
              <path
                d="M150 200 L150 270 L270 270 L270 200"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="280"
              />

              {/* Split line — representing division */}
              <line
                x1="210"
                y1="100"
                x2="210"
                y2="290"
                stroke="#F2FF91"
                strokeWidth="1"
                opacity="0.25"
                strokeDasharray="4 6"
              />

              {/* Door divided */}
              <path
                d="M190 270 L190 230 L210 230"
                stroke="white"
                strokeWidth="0.75"
                opacity="0.2"
                strokeDasharray="80"
              />
              <path
                d="M230 270 L230 230 L210 230"
                stroke="white"
                strokeWidth="0.75"
                opacity="0.2"
                strokeDasharray="80"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
