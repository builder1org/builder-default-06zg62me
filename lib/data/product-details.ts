import type { Product } from "./catalog";

export type StockStatus = "available" | "limited";

export type ProductExtended = Product & {
  sku: string;
  stockStatus: StockStatus;
  stockLabel: string;
  highlights: string[];
  inBox: string[];
  warranty: string;
  deliveryInfo: string;
  returnPolicy: string;
  extraSpecs: { label: string; value: string }[];
  longDescription: string;
};

const WARRANTY_PLACEHOLDER = "[مدت و شرایط گارانتی — توسط فروشگاه تکمیل شود]";
const DELIVERY_PLACEHOLDER = "[زمان ارسال و محدوده تحویل — توسط فروشگاه تکمیل شود]";
const RETURN_PLACEHOLDER = "[شرایط مرجوعی کالا — توسط فروشگاه تکمیل شود]";

type ProductOverride = Partial<
  Omit<ProductExtended, keyof Product | "categorySlug" | "slug" | "name" | "shortDescription" | "demoPriceToman" | "specs" | "featured" | "badge" | "description">
>;

const overrides: Record<string, ProductOverride> = {
  "phone-alpha-x": {
    sku: "DEMO-PH-ALPHA-X",
    stockStatus: "available",
    stockLabel: "موجود در انبار (نمایشی)",
    highlights: [
      "نمایشگر AMOLED با کنتراست بالا",
      "شارژ سریع و مدیریت مصرف باتری",
      "پشتیبانی از شبکه‌های نسل جدید (نمونه)",
      "بدنه با روکش ضد اثر انگشت (نمونه)",
    ],
    inBox: ["گوشی", "کابل USB-C", "آداپتور (در صورت موجودی نسخه)", "سنجاق سیم‌کارت", "برچسب گارانتی نمونه"],
    extraSpecs: [
      { label: "سیستم‌عامل", value: "نمونه / قابل تنظیم" },
      { label: "دوربین اصلی", value: "۵۰ مگاپیکسل (نمونه)" },
      { label: "وزن", value: "۱۸۵ گرم (نمونه)" },
      { label: "گواهی‌ها", value: "[مدارک استاندارد فروشگاه]" },
    ],
    longDescription:
      "این صفحه برای نمایش سطح جزئیات حرفه‌ای در نسخه دمو طراحی شده است. می‌توانید توضیح بازاری، نکات فنی و مقایسه با مدل‌های مشابه را در این بخش قرار دهید. متن فعلی جایگزین محتوای واقعی شماست.",
  },
  "laptop-pro-14": {
    sku: "DEMO-LP-PRO14",
    highlights: [
      "مناسب کار روزمره و تدوین سبک",
      "صفحه‌کلید بک‌لایت با فاصله استاندارد",
      "پورت‌های متنوع USB-C و HDMI (نمونه)",
      "خنک‌کننده دو فن (نمونه)",
    ],
    inBox: ["لپ‌تاپ", "شارژر اصلی", "راهنمای شروع"],
    extraSpecs: [
      { label: "گرافیک", value: "یکپارچه / نمونه" },
      { label: "صفحه", value: "۱۴ اینچ FHD (نمونه)" },
      { label: "وزن", value: "۱.۴ کیلوگرم (نمونه)" },
    ],
    longDescription:
      "بخش توضیحات تکمیلی لپ‌تاپ: کاربردها، طول عمر باتری در سناریوهای مختلف و توصیه فروشگاه برای ارتقا RAM یا حافظه را اینجا بنویسید.",
  },
};

export function enrichProduct(product: Product): ProductExtended {
  const custom = overrides[product.slug];
  const baseHighlights =
    custom?.highlights ??
    product.specs.map((s) => `${s.label}: ${s.value}`).concat(product.shortDescription);

  return {
    ...product,
    sku: custom?.sku ?? `DEMO-${product.slug.toUpperCase()}`,
    stockStatus: custom?.stockStatus ?? "available",
    stockLabel: custom?.stockLabel ?? "موجود (نمایشی)",
    highlights: baseHighlights.slice(0, 6),
    inBox: custom?.inBox ?? ["محصول اصلی", "لوازم جانبی استاندارد (نمونه)", "مستندات"],
    warranty: custom?.warranty ?? WARRANTY_PLACEHOLDER,
    deliveryInfo: custom?.deliveryInfo ?? DELIVERY_PLACEHOLDER,
    returnPolicy: custom?.returnPolicy ?? RETURN_PLACEHOLDER,
    extraSpecs: custom?.extraSpecs ?? [],
    longDescription: custom?.longDescription ?? product.description,
  };
}
