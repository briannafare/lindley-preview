const services = [
  "Purchase", "Refinance", "FHA", "VA Loans", "Jumbo",
  "HELOC", "Cash-Out", "Investment", "Divorce Lending", "Reverse",
];

export default function Marquee() {
  const items = [...services, ...services];

  return (
    <section className="py-5 overflow-hidden bg-yellow">
      <div className="flex animate-marquee w-max">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-[clamp(1.2rem,2vw,1.6rem)] font-normal text-ink whitespace-nowrap px-5">
              {item}
            </span>
            <span className="text-[clamp(1.2rem,2vw,1.6rem)] font-light text-ink/25 px-1">
              /
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
