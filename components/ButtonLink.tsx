import Link from "next/link";
import { cx } from "@/lib/cx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-ink text-paper hover:bg-black",
  secondary: "border border-ink/15 text-ink hover:bg-white",
  light: "bg-white text-ink hover:bg-paper",
  ghost: "border border-white/20 text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");

  const classes = cx(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors",
    variants[variant],
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
