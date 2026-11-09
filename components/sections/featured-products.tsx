import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { ProductCard } from "@/components/site/product-card";
import { getFeaturedProducts } from "@/lib/data/catalog";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="mt-8 sm:mt-10" aria-labelledby="featured-heading">
      <div className="flex items-center justify-between gap-3 px-0.5">
        <h2 id="featured-heading" className="text-lg font-bold sm:text-xl">
          پیشنهاد ویژه
        </h2>
        <Link
          href="/products"
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary sm:text-sm"
        >
          همه
          <ChevronLeft className="size-3.5" aria-hidden />
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
