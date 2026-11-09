import Link from "next/link";

import { categories } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  activeSlug?: string;
};

export function CategoryFilter({ activeSlug }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="فیلتر دسته">
      <Link
        href="/products"
        className={cn(
          "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
          !activeSlug
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-muted-foreground hover:text-foreground"
        )}
      >
        همه
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/products?category=${cat.slug}`}
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
            activeSlug === cat.slug
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:text-foreground"
          )}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
