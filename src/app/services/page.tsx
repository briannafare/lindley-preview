import { Metadata } from "next";
import Nav from "@/components/Nav";
import ServicesList from "@/components/ServicesList";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mortgage Services Portland | The Lindley Team",
  description:
    "Full range of mortgage services in Portland, Oregon. Purchase, refinance, FHA, VA, jumbo, HELOC, cash-out, investment, divorce lending, and reverse mortgages. NMLS #1367416.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <section className="pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-light mb-4">
            Our Services
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight mb-6">
            Every mortgage product.{" "}
            <span className="font-script font-normal text-orange text-[0.85em]">
              One team.
            </span>
          </h1>
          <p className="text-lg text-ink-mid font-normal leading-relaxed max-w-[600px]">
            We fund most loans in-house through our own bank. When another product fits better, we broker it. Either way, you get the best option.
            We find the one that fits your life — not the other way around.
          </p>
        </div>
      </section>
      <ServicesList />
      <Footer />
    </>
  );
}
