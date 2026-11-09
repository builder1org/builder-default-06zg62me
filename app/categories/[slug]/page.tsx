import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CategoryCircleRail } from "@/components/site/category-circle-rail";
import { PageShell } from "@/components/site/page-shell";
import { ProductCard } from "@/components/site/product-card";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/data/catalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "دسته یافت نشد" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <PageShell tight>
      <Breadcrumbs
        className="hidden sm:block"
        items={[
          { label: "خانه", href: "/" },
          { label: "دسته‌بندی‌ها", href: "/categories" },
          { label: category.name },
        ]}
      />
      <h1 className="mt-0 text-xl font-bold sm:mt-2 sm:text-2xl">{category.name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>

      <CategoryCircleRail
        className="mt-5 border-b border-border/60 pb-5"
        categories={categories}
        activeSlug={slug}
        showAllHref={false}
        layout="scroll"
        circleSize="sm"
      />

      {items.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">هنوز محصولی در این دسته ثبت نشده است.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
