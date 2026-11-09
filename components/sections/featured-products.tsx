import Link from "next/link";

import { ProductCard } from "@/components/site/product-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data/catalog";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="mt-14" aria-labelledby="featured-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="featured-heading" className="text-2xl font-bold tracking-tight">
            منتخب فروشگاه
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">محصولات نمایشی برای تست چیدمان</p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/products">مشاهده همه</Link>
        </Button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
