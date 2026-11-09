import Link from "next/link";

import type { Category } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

type CategoryCircleProps = {
  category: Category;
  active?: boolean;
  size?: "sm" | "md";
  className?: string;
  /** مسیر پیش‌فرض صفحه دسته؛ روی لیست محصولات از `products-filter` استفاده کنید */
  linkMode?: "category" | "products-filter";
};

export function CategoryCircle({
  category,
  active,
  size = "md",
  className,
  linkMode = "category",
}: CategoryCircleProps) {
  const Icon = category.icon;
  const href =
    linkMode === "products-filter"
      ? `/products?category=${category.slug}`
      : `/categories/${category.slug}`;
  const circleSize = size === "sm" ? "size-[4.25rem]" : "size-[4.75rem] sm:size-[5.25rem]";
  const iconSize = size === "sm" ? "size-6" : "size-7";

  return (
    <Link
      href={href}
      className={cn(
        "group flex w-[5.5rem] shrink-0 flex-col items-center gap-2 sm:w-[6.25rem]",
        className
      )}
    >
      <span
        className={cn(
          "relative flex items-center justify-center rounded-full bg-gradient-to-b from-card to-muted/80 shadow-[0_8px_24px_-8px_rgba(15,40,120,0.25)] ring-1 ring-border/80 transition-transform duration-200",
          "group-active:scale-95",
          circleSize,
          active
            ? "ring-2 ring-primary shadow-md"
            : "group-hover:ring-primary/40"
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-primary/10 text-primary",
            size === "sm" ? "size-14" : "size-16 sm:size-[4.25rem]"
          )}
        >
          <Icon className={iconSize} strokeWidth={1.5} aria-hidden />
        </span>
      </span>
      <span
        className={cn(
          "max-w-full px-0.5 text-center text-[11px] font-semibold leading-tight sm:text-xs",
          active ? "text-primary" : "text-foreground"
        )}
      >
        {category.name}
      </span>
    </Link>
  );
}
