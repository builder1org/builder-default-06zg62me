import { categories } from "@/lib/data/catalog";

import { CategoryCircleRail } from "@/components/site/category-circle-rail";

export function CategoryStrip() {
  return (
    <CategoryCircleRail
      className="mt-6 sm:mt-8"
      categories={categories}
      title="دسته‌بندی‌ها"
      subtitle="لمس کنید و مستقیم وارد ویترین شوید"
      layout="scroll"
    />
  );
}
