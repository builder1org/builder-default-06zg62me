import type { Metadata } from "next";

import { CategoryCircleRail } from "@/components/site/category-circle-rail";
import { PageShell } from "@/components/site/page-shell";
import { categories } from "@/lib/data/catalog";

export const metadata: Metadata = {
  title: "دسته‌بندی‌ها",
  description: "همه دسته‌های محصولات فروشگاه لوازم الکترونیک",
};

export default function CategoriesPage() {
  return (
    <PageShell tight>
      <h1 className="text-xl font-bold sm:text-2xl">دسته‌بندی محصولات</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        هر دایره یک ویترین جدا — مناسب مرور سریع روی موبایل
      </p>
      <CategoryCircleRail
        className="mt-6"
        categories={categories}
        showAllHref={false}
        layout="grid"
        circleSize="md"
      />
    </PageShell>
  );
}
