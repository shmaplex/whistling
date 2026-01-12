import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ProductSplit = {
  title: string;
  image: string;
  href?: string;

  /** Styling hooks */
  titleClassName?: string;
  buttonClassName?: string;
  overlayClassName?: string;
};

interface ProductSplitSectionProps {
  id?: string;
  left: ProductSplit;
  right: ProductSplit;
  className?: string;
}

/* =========================
   Desktop split section
   ========================= */

export function ProductSplitSection({
  left,
  right,
  className,
  id = "products",
}: ProductSplitSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full snap-start",
        "grid grid-rows-2 md:grid-rows-1 md:grid-cols-2",
        "h-[200vh] md:h-screen",
        className,
      )}
    >
      <SplitPanel {...left} />
      <SplitPanel {...right} />
    </section>
  );
}

/* =========================
   Mobile single section
   ========================= */

function ProductSplitSingle(props: ProductSplit) {
  return (
    <div className="relative h-full w-full">
      <SplitPanel {...props} />
    </div>
  );
}

/* attach as static property */
ProductSplitSection.Single = ProductSplitSingle;

/* =========================
   Shared panel renderer
   ========================= */

function SplitPanel({
  title,
  image,
  href,
  titleClassName,
  buttonClassName,
  overlayClassName,
}: ProductSplit) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image src={image} alt={title} fill priority className="object-cover" />

      {/* Overlay */}
      <div className={cn("absolute inset-0 bg-black/40", overlayClassName)} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
        <h2
          className={cn(
            "text-4xl sm:text-5xl md:text-7xl",
            "font-bold uppercase tracking-tight leading-none",
            titleClassName ?? "text-white",
          )}
        >
          {title}
        </h2>

        {href && (
          <Link
            href={href}
            className={cn(
              "mt-4 w-fit inline-flex items-center justify-center",
              "h-12 px-8 border-2 rounded-none",
              "font-black text-base uppercase",
              "transition-colors duration-150",
              "bg-primary text-primary-foreground border-primary",
              "hover:bg-accent hover:border-accent",
              buttonClassName,
            )}
          >
            Explore
          </Link>
        )}
      </div>
    </div>
  );
}
