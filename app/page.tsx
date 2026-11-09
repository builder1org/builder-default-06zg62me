import { CategoryStrip } from "@/components/sections/category-strip";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { HomeHero } from "@/components/sections/home-hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <HomeHero />
      <CategoryStrip />
      <FeaturedProducts />
    </main>
  );
}
