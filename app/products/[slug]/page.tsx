import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/site/breadcrumbs";
import { ProductVisual } from "@/components/site/product-visual";
import { Button } from "@/components/ui/button";
import {
  getCategoryBySlug,
  getProductBySlug,
  products,
} from "@/lib/data/catalog";
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
  const product = getProductBySlug(slug);
  if (!product) notFound();

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
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <Breadcrumbs items={crumbs} />

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <ProductVisual categorySlug={product.categorySlug} badge={product.badge} size="lg" />
        <ProductDetails
          product={product}
          categoryName={category?.name}
          categoryHref={category ? `/categories/${category.slug}` : undefined}
        />
      </div>
    </main>
  );
}

type ProductDetailsProps = {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
  categoryName?: string;
  categoryHref?: string;
};

function ProductDetails({ product, categoryName, categoryHref }: ProductDetailsProps) {
  return (
    <div>
      {categoryName && categoryHref ? (
        <Link href={categoryHref} className="text-sm font-medium text-primary hover:underline">
          {categoryName}
        </Link>
      ) : null}
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{product.shortDescription}</p>

      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
        <p className="text-sm text-muted-foreground">قیمت نمایشی (تومان)</p>
        <p className="mt-1 text-3xl font-extrabold tabular-nums">{formatToman(product.demoPriceToman)}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg" disabled className="gap-2">
          <ShoppingCart className="size-4" />
          افزودن به سبد — به‌زودی
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/products">بازگشت به فهرست</Link>
        </Button>
      </div>

      <p className="mt-8 leading-relaxed text-muted-foreground">{product.description}</p>

      <h2 className="mt-10 text-xl font-semibold">مشخصات فنی</h2>
      <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
        {product.specs.map((spec) => (
          <div
            key={spec.label}
            className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:justify-between sm:gap-4"
          >
            <dt className="text-sm font-medium text-muted-foreground">{spec.label}</dt>
            <dd className="text-sm font-semibold">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
