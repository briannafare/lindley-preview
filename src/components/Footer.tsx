import Link from "next/link";

const serviceLinks = [
  { name: "Purchase", href: "/services/purchase" },
  { name: "Refinance", href: "/services/refinance" },
  { name: "Divorce Lending", href: "/services/divorce-lending" },
  { name: "FHA Loans", href: "/services/fha" },
  { name: "VA Loans", href: "/services/va" },
  { name: "Jumbo", href: "/services/jumbo" },
  { name: "Cash-Out Refi", href: "/services/cash-out" },
  { name: "HELOC", href: "/services/heloc" },
  { name: "Investment", href: "/services/investment" },
  { name: "Reverse Mortgage", href: "/services/reverse-mortgage" },
];

const exploreLinks = [
  { name: "Neighborhoods", href: "/neighborhoods" },
  { name: "Calculator", href: "/calculator" },
  { name: "Journal", href: "/blog" },
  { name: "Reviews", href: "/reviews" },
  { name: "Resources", href: "/resources" },
];

const connectLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "971.754.1771", href: "tel:9717541771" },
  { name: "Email Us", href: "mailto:LindleyTeam@mtgxps.com" },
  { name: "Apply Now", href: "/apply" },
];

export default function Footer() {
  return (
    <footer className="pt-14 pb-6 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="font-display text-lg font-bold mb-3">
              The Lindley Team
            </div>
            <p className="text-sm text-ink-light leading-relaxed max-w-[300px] font-normal">
              Portland mortgage strategy for people who want to build wealth
              through real estate. Licensed in Oregon, Washington, and
              California.
            </p>
          </div>
          <FooterCol title="Services" links={serviceLinks} />
          <FooterCol title="Explore" links={exploreLinks} />
          <FooterCol title="Connect" links={connectLinks} />
        </div>

        <div className="pt-5 border-t border-border">
          <p className="text-[0.65rem] text-silver leading-relaxed max-w-[860px]">
            Not a commitment to lock or lend. Terms and restrictions apply. Not
            all applicants will qualify. Mortgage Express, LLC. NMLS Company ID:
            40831 | mtgxps.com | Licensed in OR/WA/CA. Licensing in California
            by the DFPI under the Residential Mortgage Act. Mortgage Express is
            an Equal Housing Lender. 10260 SW Greenburg Road, Ste. 830,
            Portland, OR 97223.
          </p>
          <div className="flex flex-wrap justify-between items-center mt-5 gap-4">
            <span className="text-[0.72rem] text-silver">
              © {new Date().getFullYear()} The Lindley Team
            </span>
            <div className="flex gap-2">
              {[
                { label: "Fb", href: "https://www.facebook.com/TammiLindleyTeam/" },
                { label: "Ig", href: "https://www.instagram.com/thelindleyteam" },
                { label: "Li", href: "https://www.linkedin.com/in/brianna-lindley-80673015/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[0.65rem] font-bold text-ink-light hover:bg-ink hover:text-white hover:border-ink hover:-translate-y-0.5 transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-ink mb-4">
        {title}
      </h4>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="block text-sm text-ink-light font-normal mb-2 hover:text-ink transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
