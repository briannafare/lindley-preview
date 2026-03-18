import type { Metadata } from "next";
import { DM_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
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
      className={`${dmSans.variable} ${pinyonScript.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
