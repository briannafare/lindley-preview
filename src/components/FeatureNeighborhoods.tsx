import Link from "next/link";

export default function FeatureNeighborhoods() {
  return (
    <section className="py-24 bg-blue text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] mb-5 max-w-[700px]">
              71 Portland{" "}
              <span className="font-script font-normal text-yellow text-[1em]">
                neighborhoods.
              </span>
              <br />
              One for you.
            </h2>
            <p className="text-base leading-relaxed text-white/60 font-light max-w-[550px] mb-8">
              We&apos;ve reviewed every neighborhood in Portland — parks, schools,
              dining, commute times, home prices. Find yours, then let us handle
              the financing.
            </p>
            <Link
              href="/neighborhoods"
              className="inline-flex items-center gap-2 px-8 py-4 border-[1.5px] border-white/40 text-white rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:border-white transition-all"
            >
              Explore All Neighborhoods <span>→</span>
            </Link>
          </div>
          <div className="flex gap-12">
            {[
              { val: "71", label: "Neighborhoods" },
              { val: "$580k", label: "Median Home Price" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-5xl font-extrabold text-white">
                  {s.val}
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.1em] text-white/40 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
