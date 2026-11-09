import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import type { Category } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

import { CategoryCircle } from "./category-circle";

type CategoryCircleRailProps = {
  categories: Category[];
  title?: string;
  subtitle?: string;
  activeSlug?: string;
  showAllHref?: string | false;
  layout?: "scroll" | "grid";
  circleSize?: "sm" | "md";
  className?: string;
  linkMode?: "category" | "products-filter";
};

export function CategoryCircleRail({
  categories,
  title,
  subtitle,
  activeSlug,
  showAllHref = "/categories" as string | false,
  layout = "scroll",
  circleSize = "md",
  className,
  linkMode = "category",
}: CategoryCircleRailProps) {
  return (
    <section className={cn(className)} aria-labelledby={title ? "category-rail-heading" : undefined}>
      {(title || showAllHref !== false) && (
        <div className="flex items-end justify-between gap-3 px-1">
          <div>
            {title ? (
              <h2 id="category-rail-heading" className="text-lg font-bold tracking-tight sm:text-xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{subtitle}</p>
            ) : null}
          </div>
          {showAllHref !== false ? (
            <Link
              href={typeof showAllHref === "string" ? showAllHref : "/categories"}
              className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold text-primary sm:text-sm"
            >
              همه
              <ChevronLeft className="size-3.5" aria-hidden />
            </Link>
          ) : null}
        </div>
      )}

      {layout === "scroll" ? (
        <div
          className={cn(
            "mt-4 flex gap-3 overflow-x-auto pb-1",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "snap-x snap-mandatory"
          )}
        >
          {categories.map((cat) => (
            <CategoryCircle
              key={cat.slug}
              category={cat}
              active={activeSlug === cat.slug}
              size={circleSize}
              className="snap-start"
              linkMode={linkMode}
            />
          ))}
        </div>
      ) : (
        <ul className="mt-5 grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {categories.map((cat) => (
            <li key={cat.slug} className="flex justify-center">
              <CategoryCircle
                category={cat}
                active={activeSlug === cat.slug}
                size={circleSize}
                linkMode={linkMode}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
