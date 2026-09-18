import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d98b2b]/50",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(90deg,#e6a141_0%,#d98b2b_22%,#16779a_50%,#0d5978_62%,#d98b2b_82%,#e6a141_100%)] bg-[length:200%_100%] bg-left text-white shadow-[0_12px_40px_rgba(217,139,43,0.22)] transition-[background-position,transform,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:bg-right hover:shadow-[0_16px_50px_rgba(13,89,120,0.28)]",
        outline:
          "border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.08]",
        ghost:
          "text-white/75 hover:bg-white/[0.06] hover:text-white",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        lg: "h-14 px-7 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
