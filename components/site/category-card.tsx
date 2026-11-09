import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Category } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: Category;
  productCount: number;
  className?: string;
};

export function CategoryCard({ category, productCount, className }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cn(
        "group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon className="size-6" aria-hidden />
        </span>
        <ArrowLeft className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{category.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
        <p className="mt-3 text-xs font-medium text-primary">
          {productCount.toLocaleString("fa-IR")} محصول نمونه
        </p>
      </div>
    </Link>
  );
}
