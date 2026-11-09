import { Check, Package, Shield, Truck, Undo2 } from "lucide-react";

import type { ProductExtended } from "@/lib/data/product-details";

type ProductDetailSectionsProps = {
  product: ProductExtended;
};

export function ProductDetailSections({ product }: ProductDetailSectionsProps) {
  const allSpecs = [...product.specs, ...product.extraSpecs];

  return (
    <div className="mt-10 space-y-8 border-t border-border pt-8 lg:col-span-2">
      <section aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" className="text-base font-bold sm:text-lg">
          ویژگی‌های کلیدی
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {product.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-border/80 bg-card/80 px-3 py-2.5 text-sm"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="description-heading">
        <h2 id="description-heading" className="text-base font-bold sm:text-lg">
          توضیحات تکمیلی
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{product.longDescription}</p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.description}</p>
      </section>

      <section aria-labelledby="specs-heading">
        <h2 id="specs-heading" className="text-base font-bold sm:text-lg">
          مشخصات فنی کامل
        </h2>
        <dl className="mt-3 overflow-hidden rounded-2xl border border-border bg-card text-sm">
          {allSpecs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-1 border-b border-border/80 px-3 py-2.5 last:border-b-0 sm:flex-row sm:justify-between sm:px-4 sm:py-3"
            >
              <dt className="text-muted-foreground">{spec.label}</dt>
              <dd className="font-semibold">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="inbox-heading">
        <h2 id="inbox-heading" className="flex items-center gap-2 text-base font-bold sm:text-lg">
          <Package className="size-5 text-primary" aria-hidden />
          محتویات جعبه
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground sm:text-base">
          {product.inBox.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="service-heading"
        className="grid gap-3 sm:grid-cols-3"
      >
        <h2 id="service-heading" className="sr-only">
          ارسال و خدمات
        </h2>
        <ServiceCard icon={Truck} title="ارسال" body={product.deliveryInfo} />
        <ServiceCard icon={Shield} title="گارانتی" body={product.warranty} />
        <ServiceCard icon={Undo2} title="مرجوعی" body={product.returnPolicy} />
      </section>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Truck;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-border/80 bg-muted/40 p-4">
      <div className="flex items-center gap-2 font-semibold">
        <Icon className="size-4 text-primary" aria-hidden />
        {title}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{body}</p>
    </article>
  );
}
