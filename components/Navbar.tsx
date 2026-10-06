"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { cx } from "@/lib/cx";
import { navItems } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark text-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo invert />

        <nav
          className="hidden items-center gap-7 text-sm text-dark-muted lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "hover:text-white",
                  active && "text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/get-involved"
            className="rounded-full bg-white px-3 py-2 text-sm font-medium text-ink hover:bg-paper sm:px-4"
          >
            Get Involved
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <span aria-hidden="true" className="text-xl leading-none">
                ×
              </span>
            ) : (
              <span aria-hidden="true" className="flex flex-col items-center gap-1.5">
                <span className="block h-px w-4 bg-white" />
                <span className="block h-px w-4 bg-white" />
                <span className="block h-px w-4 bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-dark-muted hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="pt-2 text-white"
              onClick={() => setOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
