import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/site/breadcrumbs";
import { PageShell } from "@/components/site/page-shell";
import { ProductDetailSections } from "@/components/site/product-detail-sections";
import { ProductMetaChips } from "@/components/site/product-meta-chips";
import { ProductMobileBar } from "@/components/site/product-mobile-bar";
import { ProductVisual } from "@/components/site/product-visual";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getProductBySlug, products } from "@/lib/data/catalog";
import { enrichProduct } from "@/lib/data/product-details";
import { formatToman } from "@/lib/format";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "محصول یافت نشد" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const base = getProductBySlug(slug);
  if (!base) notFound();

  const product = enrichProduct(base);
  const category = getCategoryBySlug(product.categorySlug);

  const crumbs: BreadcrumbItem[] = [
    { label: "خانه", href: "/" },
    { label: "محصولات", href: "/products" },
  ];
  if (category) {
    crumbs.push({ label: category.name, href: `/categories/${category.slug}` });
  }
  crumbs.push({ label: product.name });

  return (
    <PageShell tight className="pb-32 md:pb-12">
      <Breadcrumbs className="hidden sm:block" items={crumbs} />

      <div className="mt-2 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
        <ProductVisual categorySlug={product.categorySlug} badge={product.badge} size="lg" />
        <ProductSummary
          product={product}
          categoryName={category?.name}
          categoryHref={category ? `/categories/${category.slug}` : undefined}
        />
        <ProductDetailSections product={product} />
      </div>
      <ProductMobileBar price={product.demoPriceToman} />
    </PageShell>
  );
}

type ProductSummaryProps = {
  product: ReturnType<typeof enrichProduct>;
  categoryName?: string;
  categoryHref?: string;
};

function ProductSummary({ product, categoryName, categoryHref }: ProductSummaryProps) {
  return (
    <div className="mt-6 lg:mt-0">
      {categoryName && categoryHref ? (
        <Link href={categoryHref} className="text-xs font-semibold text-primary sm:text-sm">
          {categoryName}
        </Link>
      ) : null}
      <h1 className="mt-1 text-xl font-bold leading-snug sm:text-3xl">{product.name}</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{product.shortDescription}</p>
      <ProductMetaChips product={product} />

      <div className="mt-5 hidden rounded-2xl border border-border bg-muted/40 p-4 md:block">
        <p className="text-sm text-muted-foreground">قیمت نمایشی</p>
        <p className="mt-1 text-2xl font-extrabold tabular-nums sm:text-3xl">
          {formatToman(product.demoPriceToman)}
        </p>
      </div>

      <div className="mt-5 hidden flex-wrap gap-3 md:flex">
        <Button size="lg" disabled className="gap-2 rounded-full">
          <ShoppingCart className="size-4" />
          افزودن به سبد — به‌زودی
        </Button>
        <Button size="lg" variant="outline" className="rounded-full" asChild>
          <Link href="/products">بازگشت به فهرست</Link>
        </Button>
      </div>
    </div>
  );
}
