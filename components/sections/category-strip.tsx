import { categories, products } from "@/lib/data/catalog";

import { CategoryCard } from "@/components/site/category-card";

export function CategoryStrip() {
  return (
    <section className="mt-14" aria-labelledby="categories-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="categories-heading" className="text-2xl font-bold tracking-tight">
            دسته‌بندی‌ها
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            مسیر سریع به محصولات هر گروه
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.slug}
            category={cat}
            productCount={products.filter((p) => p.categorySlug === cat.slug).length}
          />
        ))}
      </div>
    </section>
  );
}
