import Link from "next/link";

import { Button } from "@/components/ui/button";
import { STORE_TAGLINE } from "@/components/site/store-brand";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-primary to-primary/85 px-5 py-6 text-primary-foreground shadow-lg sm:px-8 sm:py-10 lg:py-12">
      <p className="text-xs font-medium opacity-90 sm:text-sm">فروشگاه تخصصی دیجیتال</p>
      <h1 className="mt-2 text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
        خرید حرفه‌ای لوازم الکترونیک
      </h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed opacity-90 sm:text-base">{STORE_TAGLINE}</p>
      <div className="mt-5 flex gap-2 sm:mt-6">
        <Button
          size="sm"
          variant="secondary"
          className="h-10 rounded-full px-5 font-semibold sm:h-11 sm:px-6"
          asChild
        >
          <Link href="/products">محصولات</Link>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-10 rounded-full border-primary-foreground/30 bg-transparent px-5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:h-11 sm:px-6"
          asChild
        >
          <Link href="/categories">دسته‌ها</Link>
        </Button>
      </div>
    </section>
  );
}
