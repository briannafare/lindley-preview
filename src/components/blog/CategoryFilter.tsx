"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All Posts";
  const [active, setActive] = useState(initialCategory);

  function handleSelect(category: string) {
    setActive(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All Posts") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    const query = params.toString();
    router.push(query ? `/blog?${query}` : "/blog", { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className={`px-5 py-2.5 rounded-full text-[0.72rem] font-bold tracking-[0.06em] uppercase transition-all ${
              isActive
                ? "bg-ink text-white"
                : "border border-border text-ink-mid hover:border-ink hover:text-ink"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
