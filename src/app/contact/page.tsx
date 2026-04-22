import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact The Lindley Team — Schedule a Complimentary Consultation",
  description:
    "Request a complimentary consultation with Bri Lindley. Licensed in Oregon and Washington. 30-minute call to walk through your options.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-light mb-4">
            Contact
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tight mb-6">
            Request a{" "}
            <span className="font-script font-normal text-orange text-[0.85em]">
              rate quote
            </span>
          </h1>
          <p className="text-lg text-ink-mid font-normal leading-relaxed max-w-[600px]">
            Tell us a bit about what you&rsquo;re looking to do. Bri will reach out
            to schedule a complimentary 30-minute consultation.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[560px]">
            <LeadForm
              formType="rate-quote"
              sourcePage="/contact"
              submitLabel="Request rate quote"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
