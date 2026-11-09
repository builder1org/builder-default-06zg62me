import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/site/breadcrumbs";
import { PageShell } from "@/components/site/page-shell";
import { ProductMobileBar } from "@/components/site/product-mobile-bar";
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
    <PageShell tight className="pb-32 md:pb-12">
      <Breadcrumbs className="hidden sm:block" items={crumbs} />

      <div className="mt-2 space-y-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
        <ProductVisual categorySlug={product.categorySlug} badge={product.badge} size="lg" />
        <ProductDetails
          product={product}
          categoryName={category?.name}
          categoryHref={category ? `/categories/${category.slug}` : undefined}
        />
      </div>
      <ProductMobileBar price={product.demoPriceToman} />
    </PageShell>
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
        <Link href={categoryHref} className="text-xs font-semibold text-primary sm:text-sm">
          {categoryName}
        </Link>
      ) : null}
      <h1 className="mt-1 text-xl font-bold leading-snug sm:mt-2 sm:text-3xl">{product.name}</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{product.shortDescription}</p>

      <div className="mt-4 hidden rounded-2xl border border-border bg-muted/30 p-4 md:block">
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

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

      <h2 className="mt-8 text-base font-bold sm:text-lg">مشخصات فنی</h2>
      <dl className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card text-sm">
        {product.specs.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4 sm:py-3"
          >
            <dt className="text-muted-foreground">{spec.label}</dt>
            <dd className="font-semibold">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
