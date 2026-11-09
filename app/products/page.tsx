import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CategoryFilter } from "@/components/site/category-filter";
import { ProductCard } from "@/components/site/product-card";
import { categories, getCategoryBySlug, products } from "@/lib/data/catalog";

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
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <Breadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "محصولات" },
        ]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight">همه محصولات</h1>
      <p className="mt-2 text-muted-foreground">
        {activeCategory
          ? `نمایش محصولات دسته «${activeCategory.name}»`
          : "فیلتر بر اساس دسته یا باز کردن کارت هر محصول"}
      </p>

      <div className="mt-6">
        <CategoryFilter activeSlug={activeCategory?.slug} />
      </div>

      {invalidCategory ? (
        <p className="mt-8 text-destructive">دسته انتخاب‌شده معتبر نیست.</p>
      ) : filtered.length === 0 ? (
        <p className="mt-8 text-muted-foreground">محصولی برای این فیلتر وجود ندارد.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}

      <p className="sr-only">
        {categories.length} دسته در سیستم نمونه تعریف شده است.
      </p>
    </main>
  );
}
