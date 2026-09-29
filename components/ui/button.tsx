import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "dark" | "light";
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  dark: "bg-dark text-white hover:bg-dark-grey",
  light: "bg-white text-ink hover:bg-off-white",
} as const;

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`z-clip-sm inline-flex min-h-12 items-center justify-center px-7 py-3 text-sm font-extrabold tracking-[0.08em] uppercase transition-colors ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
