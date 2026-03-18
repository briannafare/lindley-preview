export default function Testimonial() {
  return (
    <section className="py-24 bg-bg-alt text-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-light mb-10">
          What Clients Say
        </p>
        <div className="max-w-[720px] mx-auto">
          <div className="w-10 h-0.5 bg-yellow mx-auto mb-8" />
          <blockquote className="font-display text-[clamp(1.2rem,2vw,1.6rem)] font-medium italic leading-relaxed text-ink mb-6">
            This team is amazing. We went through the entire process of buying
            our home with ease. I really appreciated how honest and upfront they
            were with me being a first time home buyer. Even conversations of
            &lsquo;if you were my daughter this is what I would suggest&rsquo; — it put my
            mind at ease. The Lindley Team is a must.
          </blockquote>
          <p className="text-sm font-bold text-ink">Tiffany Z.</p>
          <p className="text-[0.72rem] text-ink-light font-medium mt-0.5">
            First-Time Home Buyer · Portland
          </p>
        </div>
      </div>
    </section>
  );
}
