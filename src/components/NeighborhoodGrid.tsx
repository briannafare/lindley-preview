"use client";

import Image from "next/image";
import Link from "next/link";

const neighborhoods = [
  {
    name: "Sellwood-Moreland",
    slug: "sellwood-moreland",
    tags: "Antique Row · Oaks Park · River views",
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
  },
  {
    name: "Alberta Arts",
    slug: "alberta-arts",
    tags: "Galleries · Restaurants · Last Thursday",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  },
  {
    name: "Pearl District",
    slug: "pearl-district",
    tags: "Powell's Books · First Thursday · Lofts",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
  },
];

export default function NeighborhoodGrid() {
  return (
    <section className="py-24 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {neighborhoods.map((hood) => (
            <Link
              key={hood.slug}
              href={`/neighborhoods/${hood.slug}`}
              className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] block bg-[#eee]"
            >
              <Image
                src={hood.img}
                alt={hood.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.06] img-bw group-hover:filter-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 z-20">
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {hood.name}
                </h3>
                <p className="text-[0.75rem] text-white/60 font-normal">
                  {hood.tags}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
