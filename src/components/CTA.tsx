import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 text-center bg-yellow">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight text-ink mb-4">
          Ready to make a
          <br />
          <span className="font-script font-normal text-[0.85em] text-ink">
            smart move?
          </span>
        </h2>
        <p className="text-base text-ink-mid font-normal max-w-[440px] mx-auto mb-8 leading-relaxed">
          Whether you&apos;re buying, refinancing, or navigating something
          complex — the conversation starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply"
            className="px-8 py-4 bg-ink text-white rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:scale-[1.03] hover:shadow-xl transition-all inline-flex items-center gap-2 justify-center"
          >
            Get Pre-Approved <span>→</span>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-[1.5px] border-ink text-ink rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:bg-ink hover:text-white transition-all inline-flex items-center gap-2 justify-center"
          >
            Schedule a Call <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
