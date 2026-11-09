import type { LucideIcon } from "lucide-react";
import {
  Headphones,
  Laptop,
  Plug,
  Smartphone,
  Watch,
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  /** نمایشی — جایگزین با قیمت واقعی */
  demoPriceToman: number;
  specs: { label: string; value: string }[];
  featured?: boolean;
  badge?: string;
};

export const categories: Category[] = [
  {
    slug: "mobile-tablet",
    name: "موبایل و تبلت",
    description: "گوشی هوشمند، تبلت و لوازم مرتبط",
    icon: Smartphone,
  },
  {
    slug: "laptop-pc",
    name: "لپ‌تاپ و کامپیوتر",
    description: "لپ‌تاپ، رایانه رومیزی و مانیتور",
    icon: Laptop,
  },
  {
    slug: "audio",
    name: "صوتی و هدفون",
    description: "هدفون، اسپیکر و تجهیزات صوتی",
    icon: Headphones,
  },
  {
    slug: "accessories",
    name: "لوازم جانبی",
    description: "کابل، شارژر، پاوربانک و کیف",
    icon: Plug,
  },
  {
    slug: "wearables",
    name: "گجت پوشیدنی",
    description: "ساعت هوشمند و دستبند سلامت",
    icon: Watch,
  },
];

export const products: Product[] = [
  {
    slug: "phone-alpha-x",
    name: "گوشی نمونه Alpha X",
    categorySlug: "mobile-tablet",
    shortDescription: "نمایشگر AMOLED، باتری پرظرفیت",
    description:
      "محصول نمونه برای نمایش صفحه جزئیات. مشخصات و قیمت را با داده واقعی فروشگاه جایگزین کنید.",
    demoPriceToman: 28_500_000,
    specs: [
      { label: "حافظه", value: "۲۵۶ گیگابایت" },
      { label: "رم", value: "۸ گیگابایت" },
      { label: "صفحه", value: "۶.۷ اینچ" },
    ],
    featured: true,
    badge: "پرفروش",
  },
  {
    slug: "tablet-note-11",
    name: "تبلت نمونه Note 11",
    categorySlug: "mobile-tablet",
    shortDescription: "مناسب مطالعه و طراحی",
    description: "نسخه دمو — توضیحات کامل محصول از طرف فروشگاه تکمیل می‌شود.",
    demoPriceToman: 18_200_000,
    specs: [
      { label: "صفحه", value: "۱۱ اینچ" },
      { label: "قلم", value: "همراه استایلوس" },
    ],
    featured: true,
  },
  {
    slug: "laptop-pro-14",
    name: "لپ‌تاپ نمونه Pro 14",
    categorySlug: "laptop-pc",
    shortDescription: "پردازنده نسل جدید، وزن سبک",
    description: "قالب نمایشی برای دسته لپ‌تاپ.",
    demoPriceToman: 42_000_000,
    specs: [
      { label: "CPU", value: "نسل جدید (نمونه)" },
      { label: "RAM", value: "۱۶ گیگابایت" },
      { label: "SSD", value: "۵۱۲ گیگابایت" },
    ],
    featured: true,
    badge: "جدید",
  },
  {
    slug: "monitor-ultra-27",
    name: "مانیتور نمونه Ultra 27",
    categorySlug: "laptop-pc",
    shortDescription: "IPS، نرخ نوسازی بالا",
    description: "محصول دمو.",
    demoPriceToman: 12_800_000,
    specs: [
      { label: "اندازه", value: "۲۷ اینچ" },
      { label: "رزولوشن", value: "QHD" },
    ],
  },
  {
    slug: "headphones-air-sound",
    name: "هدفون نمونه Air Sound",
    categorySlug: "audio",
    shortDescription: "بی‌سیم، نویزکنسلینگ",
    description: "صفحه محصول نمونه در دسته صوتی.",
    demoPriceToman: 6_450_000,
    specs: [
      { label: "اتصال", value: "بلوتوث ۵.۳" },
      { label: "عمر باتری", value: "تا ۳۰ ساعت (نمونه)" },
    ],
    featured: true,
  },
  {
    slug: "speaker-room-mini",
    name: "اسپیکر نمونه Room Mini",
    categorySlug: "audio",
    shortDescription: "صدای فراگیر برای اتاق",
    description: "دمو.",
    demoPriceToman: 3_200_000,
    specs: [{ label: "توان", value: "۴۰ وات (نمونه)" }],
  },
  {
    slug: "powerbank-20k",
    name: "پاوربانک نمونه ۲۰هزار",
    categorySlug: "accessories",
    shortDescription: "شارژ سریع دو پورت",
    description: "لوازم جانبی — قیمت نمایشی.",
    demoPriceToman: 1_850_000,
    specs: [
      { label: "ظرفیت", value: "۲۰۰۰۰ mAh" },
      { label: "خروجی", value: "USB-C / USB-A" },
    ],
  },
  {
    slug: "cable-braided-2m",
    name: "کابل بافته نمونه ۲ متری",
    categorySlug: "accessories",
    shortDescription: "دو سر USB-C",
    description: "محصول کم‌قیمت برای پر کردن گرید.",
    demoPriceToman: 320_000,
    specs: [{ label: "طول", value: "۲ متر" }],
  },
  {
    slug: "watch-fit-pulse",
    name: "ساعت هوشمند نمونه Fit Pulse",
    categorySlug: "wearables",
    shortDescription: "ضربان قلب و خواب",
    description: "گجت پوشیدنی — داده نمایشی.",
    demoPriceToman: 5_600_000,
    specs: [
      { label: "ضدآب", value: "IP68 (نمونه)" },
      { label: "باتری", value: "۷ روز (نمونه)" },
    ],
    featured: true,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
