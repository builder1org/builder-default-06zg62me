import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCircle } from "@/components/site/category-circle";
import { PageShell } from "@/components/site/page-shell";
import { ProductCard } from "@/components/site/product-card";
import { categories, getCategoryBySlug, products } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "محصولات",
  description: "فهرست محصولات فروشگاه لوازم الکترونیک",
};

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const { category: categorySlug } = await searchParams;
  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  const filtered = categorySlug
    ? products.filter((p) => p.categorySlug === categorySlug)
    : products;

  const invalidCategory = categorySlug && !activeCategory;

  return (
    <PageShell tight>
      <h1 className="text-xl font-bold sm:text-2xl">همه محصولات</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {activeCategory
          ? `دسته «${activeCategory.name}»`
          : "برای فیلتر، یکی از دایره‌ها را انتخاب کنید"}
      </p>

      <div
        className={cn(
          "mt-5 flex gap-3 overflow-x-auto pb-1",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory"
        )}
      >
        <Link
          href="/products"
          className={cn(
            "flex w-[5.5rem] shrink-0 snap-start flex-col items-center gap-2",
            !categorySlug && "opacity-100"
          )}
        >
          <span
            className={cn(
              "flex size-[4.25rem] items-center justify-center rounded-full border-2 border-dashed text-xs font-bold",
              !categorySlug ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"
            )}
          >
            همه
          </span>
          <span className="text-center text-[11px] font-semibold">همه</span>
        </Link>
        {categories.map((cat) => (
          <CategoryCircle
            key={cat.slug}
            category={cat}
            active={activeCategory?.slug === cat.slug}
            size="sm"
            className="snap-start"
            linkMode="products-filter"
          />
        ))}
      </div>

      {invalidCategory ? (
        <p className="mt-8 text-sm text-destructive">دسته انتخاب‌شده معتبر نیست.</p>
      ) : filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">محصولی برای این فیلتر وجود ندارد.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
