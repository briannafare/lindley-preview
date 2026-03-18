import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EASE = {
  reveal: "power3.out",
  smooth: "power2.inOut",
};

export function sectionReveal(
  trigger: string | Element,
  targets: string | Element | Element[],
  options?: { stagger?: number; y?: number }
) {
  return gsap.from(targets, {
    y: options?.y ?? 50,
    opacity: 0,
    duration: 0.8,
    ease: EASE.reveal,
    stagger: options?.stagger ?? 0.1,
    scrollTrigger: {
      trigger,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}

export function counterAnimation(
  target: Element,
  endValue: string,
  trigger: string | Element
) {
  const numericMatch = endValue.match(/[\d,]+/);
  if (!numericMatch) return;

  const numStr = numericMatch[0].replace(/,/g, "");
  const endNum = parseInt(numStr);
  if (isNaN(endNum)) return;

  const prefix = endValue.slice(0, endValue.indexOf(numericMatch[0]));
  const suffix = endValue.slice(
    endValue.indexOf(numericMatch[0]) + numericMatch[0].length
  );
  const hasCommas = numericMatch[0].includes(",");

  const obj = { val: 0 };
  gsap.to(obj, {
    val: endNum,
    duration: 1.5,
    ease: EASE.smooth,
    scrollTrigger: {
      trigger,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      const formatted = hasCommas
        ? Math.round(obj.val).toLocaleString()
        : Math.round(obj.val).toString();
      target.textContent = `${prefix}${formatted}${suffix}`;
    },
  });
}
