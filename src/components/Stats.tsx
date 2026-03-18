"use client";

const stats = [
  { value: "1,000+", label: "Families Helped" },
  { value: "30 yrs", label: "Combined Experience" },
  { value: "5.0★", label: "Google Rating" },
  { value: "CDLP", label: "Divorce Lending Certified" },
];

export default function Stats() {
  return (
    <section className="py-14 border-t border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="relative py-4">
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-[20%] h-[60%] w-px bg-border" />
              )}
              <div className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-ink">
                {stat.value}
              </div>
              <div className="text-[0.68rem] font-bold text-ink-light tracking-[0.1em] uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
