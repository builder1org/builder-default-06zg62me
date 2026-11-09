import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getCategoryBySlug, type Product } from "@/lib/data/catalog";
import { formatToman } from "@/lib/format";
import { cn } from "@/lib/utils";

import { ProductVisual } from "./product-visual";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const category = getCategoryBySlug(product.categorySlug);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <Link href={`/products/${product.slug}`} className="block p-4 pb-0">
        <ProductVisual categorySlug={product.categorySlug} badge={product.badge} />
        {category ? (
          <p className="mt-3 text-xs font-medium text-primary">{category.name}</p>
        ) : null}
        <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>
      </Link>
      <div className="mt-auto flex items-end justify-between gap-2 p-4 pt-3">
        <div>
          <p className="text-xs text-muted-foreground">قیمت نمایشی</p>
          <p className="text-lg font-bold tabular-nums">{formatToman(product.demoPriceToman)}</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/products/${product.slug}`}>
            جزئیات
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
