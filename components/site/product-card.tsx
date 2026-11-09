import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { getCategoryBySlug, type Product } from "@/lib/data/catalog";
import { formatToman } from "@/lib/format";
import { cn } from "@/lib/utils";

import { ProductVisual } from "./product-visual";

type ProductCardProps = {
  product: Product;
  className?: string;
  compact?: boolean;
};

export function ProductCard({ product, className, compact = true }: ProductCardProps) {
  const category = getCategoryBySlug(product.categorySlug);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[0_4px_20px_-6px_rgba(20,40,100,0.18)] ring-1 ring-border/60 transition-shadow",
        "hover:shadow-[0_8px_28px_-8px_rgba(20,40,100,0.22)]",
        className
      )}
    >
      <Link href={`/products/${product.slug}`} className="block p-3 pb-0 sm:p-4">
        <ProductVisual categorySlug={product.categorySlug} badge={product.badge} size="sm" />
        {category && !compact ? (
          <p className="mt-2 text-xs font-medium text-primary">{category.name}</p>
        ) : null}
        <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug sm:text-base">
          {product.name}
        </h3>
        {!compact ? (
          <p className="mt-1 line-clamp-2 hidden text-sm text-muted-foreground sm:block">
            {product.shortDescription}
          </p>
        ) : null}
      </Link>
      <div className="mt-auto flex items-center justify-between gap-2 p-3 pt-2 sm:p-4">
        <p className="text-sm font-extrabold tabular-nums sm:text-base">
          {formatToman(product.demoPriceToman)}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-9"
          aria-label={`مشاهده ${product.name}`}
        >
          <ChevronLeft className="size-4" />
        </Link>
      </div>
    </article>
  );
}
