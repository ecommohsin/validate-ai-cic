import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  invert?: boolean;
};

export function Logo({ invert = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={invert ? "text-white" : "text-ink"}
      aria-label={`${site.shortName} home`}
    >
      <span className="flex items-center gap-2.5">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-medium ${
            invert ? "border-white/25" : "border-ink/20"
          }`}
          aria-hidden="true"
        >
          V
        </span>
        <span className="text-sm font-medium tracking-tight">{site.shortName}</span>
      </span>
    </Link>
  );
}
