"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-svg path, .about-svg circle", {
        strokeDashoffset: 800,
        duration: 1.8,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".about-text > *", {
        y: 35,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-32 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          {/* Abstract portrait composition */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-gradient-to-b from-cream to-[#E8E0D6]">
            <svg
              className="about-svg absolute inset-0 w-full h-full"
              viewBox="0 0 300 400"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Decorative concentric circles */}
              <circle cx="150" cy="160" r="120" stroke="#222" strokeWidth="0.5" opacity="0.06" strokeDasharray="755" />
              <circle cx="150" cy="160" r="90" stroke="#E26125" strokeWidth="0.5" opacity="0.08" strokeDasharray="565" />
              <circle cx="150" cy="160" r="60" stroke="#3554D9" strokeWidth="0.5" opacity="0.06" strokeDasharray="377" />

              {/* Abstract head + shoulders silhouette */}
              <path
                d="M150 80 C130 80 115 100 115 125 C115 150 130 170 150 170 C170 170 185 150 185 125 C185 100 170 80 150 80"
                stroke="#222"
                strokeWidth="1.5"
                opacity="0.25"
                strokeDasharray="250"
              />
              <path
                d="M95 280 C95 230 120 195 150 185 C180 195 205 230 205 280"
                stroke="#222"
                strokeWidth="1.5"
                opacity="0.2"
                strokeDasharray="250"
              />

              {/* Small accent dots */}
              <circle cx="80" cy="100" r="3" fill="#E26125" opacity="0.15" />
              <circle cx="220" cy="120" r="2" fill="#3554D9" opacity="0.12" />
              <circle cx="100" cy="300" r="2.5" fill="#E26125" opacity="0.1" />
            </svg>

            {/* NMLS badge */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-[0.7rem] font-medium text-ink flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow" />
              NMLS #1367416
            </div>
          </div>

          <div className="about-text">
            <p className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-ink-light mb-2">
              Meet Bri
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-tight mb-5">
              Not your typical{" "}
              <span className="font-script font-normal text-blue text-[1.15em]">
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
                "OR / WA Licensed",
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
