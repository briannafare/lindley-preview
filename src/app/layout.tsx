import type { Metadata } from "next";
import { Outfit, Urbanist, Pinyon_Script } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Lindley Team — Portland Mortgage Strategy",
  description:
    "Three decades helping Portland families build wealth through real estate. Access to hundreds of mortgage products across Oregon, Washington, and California. NMLS #1367416.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${urbanist.variable} ${pinyonScript.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
