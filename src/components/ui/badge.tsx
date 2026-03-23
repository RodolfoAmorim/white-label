import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "success" | "error";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variantClasses = cva(
    "tracking-light text-xs rounded-full leading-tight px-1 py-0.5 font-semibold uppercase",
    {
      variants: {
        variant: {
          primary: "bg-main-100 text-main-600",
          success: "bg-success-500/20 text-success-700",
          error: "bg-red-100 text-red-800",
        },
      },
    },
  );

  return (
    <span className={cn(variantClasses({ variant }), className)}>
      {children}
    </span>
  );
}
