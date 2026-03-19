"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-label", {
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".hero-title-line",
          {
            y: 60,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.2"
        )
        .from(
          ".hero-script",
          {
            scale: 0.9,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-sub",
          {
            y: 30,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-btn",
          {
            y: 20,
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.2"
        );

      // SVG decorations
      gsap.from(".hero-circle", {
        strokeDashoffset: 1760,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.6,
      });

      gsap.to(".hero-circle-group", {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-end relative overflow-hidden pb-16 lg:pb-20 bg-ink text-white"
    >
      {/* Decorative SVG elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rotating circle */}
        <svg
          className="absolute -top-[15%] -right-[10%] w-[700px] h-[700px] hero-circle-group"
          viewBox="0 0 700 700"
        >
          <circle
            className="hero-circle"
            cx="350"
            cy="350"
            r="280"
            stroke="#E26125"
            strokeWidth="0.75"
            fill="none"
            opacity="0.15"
            strokeDasharray="1760"
            strokeDashoffset="0"
          />
          <circle
            cx="350"
            cy="350"
            r="200"
            stroke="#3554D9"
            strokeWidth="0.5"
            fill="none"
            opacity="0.08"
            strokeDasharray="8 8"
          />
        </svg>

        {/* Portland bridge silhouette — abstract St. Johns arches */}
        <svg
          className="absolute bottom-[5%] right-[5%] w-[500px] h-[200px] opacity-[0.06]"
          viewBox="0 0 500 200"
          fill="none"
        >
          <path
            d="M0 180 Q60 40 120 180 Q180 40 240 180 Q300 40 360 180 Q420 40 500 180"
            stroke="white"
            strokeWidth="1"
          />
          <line x1="60" y1="180" x2="60" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="180" y1="180" x2="180" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="300" y1="180" x2="300" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="420" y1="180" x2="420" y2="200" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Mt. Hood outline */}
        <svg
          className="absolute bottom-[8%] right-[25%] w-[300px] h-[150px] opacity-[0.04]"
          viewBox="0 0 300 150"
          fill="none"
        >
          <path
            d="M0 150 L120 30 L150 50 L170 20 L200 60 L300 150"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

        {/* Dot grid — architectural motif */}
        <svg className="absolute top-[10%] left-[5%] w-[200px] h-[200px] opacity-[0.05]" viewBox="0 0 200 200">
          <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect width="200" height="200" fill="url(#hero-dots)" />
        </svg>

        {/* Blue accent arc */}
        <svg
          className="absolute top-[30%] right-[20%] w-[120px] h-[120px] opacity-[0.12]"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d="M10 110 A90 90 0 0 1 110 10"
            stroke="#3554D9"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10">
        <p className="hero-label text-[0.72rem] font-medium tracking-[0.2em] uppercase text-white/50 mb-8">
          Portland, Oregon · Mortgage Strategy
        </p>

        <h1 className="font-display text-[clamp(4.5rem,10vw,10rem)] font-medium leading-[0.92] tracking-tight max-w-[800px] mb-10">
          <span className="hero-title-line block">The Lindley</span>
          <span className="hero-script font-script font-normal text-orange leading-none text-[1.15em] inline-block">
            Team
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <p className="hero-sub text-[0.95rem] leading-relaxed text-white/50 font-normal max-w-[400px]">
            Three decades helping Portland families build wealth through real
            estate — not just buy houses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="hero-btn px-8 py-4 bg-white text-ink rounded-full text-[0.78rem] font-medium tracking-[0.04em] uppercase hover:scale-[1.03] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Get Pre-Approved <span>→</span>
            </Link>
            <Link
              href="/neighborhoods"
              className="hero-btn px-8 py-4 border-[1.5px] border-white/30 text-white rounded-full text-[0.78rem] font-medium tracking-[0.04em] uppercase hover:border-white transition-all inline-flex items-center gap-2"
            >
              Explore Portland <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
