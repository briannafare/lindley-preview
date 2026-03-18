"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-quote", {
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".testimonial-attr", {
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.3,
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
    <section ref={sectionRef} className="py-32 bg-bg-alt text-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-ink-light mb-10">
          What Clients Say
        </p>
        <div className="max-w-[720px] mx-auto relative">
          {/* Decorative quotation mark */}
          <svg
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 opacity-[0.06]"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M14 40 C14 32 18 24 28 20 L26 16 C14 20 6 30 6 42 C6 50 12 54 18 54 C24 54 28 50 28 44 C28 38 24 40 14 40 Z M42 40 C42 32 46 24 56 20 L54 16 C42 20 34 30 34 42 C34 50 40 54 46 54 C52 54 56 50 56 44 C56 38 52 40 42 40 Z"
              fill="#E26125"
            />
          </svg>

          <div className="w-10 h-0.5 bg-yellow mx-auto mb-8" />
          <blockquote className="testimonial-quote font-display text-[clamp(1.3rem,2.2vw,1.8rem)] font-light leading-relaxed text-ink mb-6">
            This team is amazing. We went through the entire process of buying
            our home with ease. I really appreciated how honest and upfront they
            were with me being a first time home buyer. Even conversations of
            &lsquo;if you were my daughter this is what I would suggest&rsquo; — it put my
            mind at ease. The Lindley Team is a must.
          </blockquote>
          <div className="testimonial-attr">
            <p className="text-sm font-medium text-ink">Tiffany Z.</p>
            <p className="text-[0.72rem] text-ink-light font-medium mt-0.5">
              First-Time Home Buyer · Portland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
