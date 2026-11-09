import { CategoryStrip } from "@/components/sections/category-strip";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { HomeHero } from "@/components/sections/home-hero";
import { PageShell } from "@/components/site/page-shell";

export default function Home() {
  return (
    <PageShell tight>
      <CategoryStrip />
      <div className="mt-6">
        <HomeHero />
      </div>
      <FeaturedProducts />
    </PageShell>
  );
}
