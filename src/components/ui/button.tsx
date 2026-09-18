import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold transition-[transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-50 enabled:active:scale-[0.96] hover:-translate-y-px",
  {
    variants: {
      variant: {
        foam: "bg-foam text-cream hover:bg-ink",
        inverse: "bg-cream text-foam hover:bg-sand",
        ghost: "bg-transparent text-ink hover:bg-sand",
        outline: "bg-transparent text-ink border border-line hover:bg-sand",
        inverseOutline:
          "bg-transparent text-cream border border-cream/25 hover:bg-cream/10",
      },
      size: {
        sm: "h-10 px-4 text-subheadline",
        md: "h-11 px-5 text-headline",
        lg: "h-14 px-7 text-headline",
      },
    },
    defaultVariants: {
      variant: "foam",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
