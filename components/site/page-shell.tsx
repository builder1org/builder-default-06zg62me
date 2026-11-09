import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
  /** کم‌padding برای صفحات فروش موبایل */
  tight?: boolean;
};

export function PageShell({ children, className, tight }: PageShellProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-7xl pb-24 md:pb-12",
        tight ? "px-3 py-4 sm:px-6 sm:py-8" : "px-4 py-6 sm:px-6 sm:py-10",
        className
      )}
    >
      {children}
    </main>
  );
}
