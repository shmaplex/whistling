import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    // Base
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "text-sm font-black",
    "transition-colors duration-150",
    "cursor-pointer select-none",

    // Shape & structure
    "rounded-none border-2",
    "px-4 py-2",

    // Focus & state
    "outline-none",
    "focus-visible:border-ring",
    "focus-visible:ring-2 focus-visible:ring-ring/60",
    "disabled:pointer-events-none disabled:opacity-50",

    // SVG handling
    "[&_svg]:pointer-events-none",
    "[&_svg:not([class*='size-'])]:size-4",
    "[&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-primary hover:bg-accent hover:border-accent",

        secondary:
          "bg-secondary text-secondary-foreground border-border hover:bg-muted",

        outline:
          "bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground",

        stone:
          "bg-[#d5c7ae] text-foreground border-[#d5c7ae] hover:bg-[#fd3f30] hover:border-[#fd3f30] hover:text-white",

        ghost:
          "bg-transparent text-foreground border-transparent hover:bg-muted",

        destructive:
          "bg-destructive text-white border-destructive hover:bg-destructive/90",

        link: "border-transparent bg-transparent text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
