import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CategoryCard } from "@/components/site/category-card";
import { categories, products } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "دسته‌بندی‌ها",
  description: "همه دسته‌های محصولات فروشگاه لوازم الکترونیک",
};

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <Breadcrumbs items={[{ label: "خانه", href: "/" }, { label: "دسته‌بندی‌ها" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight">دسته‌بندی محصولات</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        هر دسته صفحه جداگانه دارد تا مشتری سریع‌تر به محصول مورد نظر برسد.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.slug}
            category={cat}
            productCount={products.filter((p) => p.categorySlug === cat.slug).length}
          />
        ))}
      </div>
    </main>
  );
}
