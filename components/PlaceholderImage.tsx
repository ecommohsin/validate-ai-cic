import Image from "next/image";
import { cx } from "@/lib/cx";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string | null;
  className?: string;
  aspect?: string;
  priority?: boolean;
  rounded?: boolean;
};

export function PlaceholderImage({
  src,
  alt,
  label = "Placeholder image",
  caption = "Stock placeholder — genuine Validate AI photography will replace this.",
  className,
  aspect = "aspect-[16/10]",
  priority = false,
  rounded = true,
}: PlaceholderImageProps) {
  return (
    <figure className={cx("overflow-hidden", className)}>
      <div
        className={cx(
          "relative overflow-hidden bg-line",
          aspect,
          rounded && "rounded-2xl",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1100px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <p className="absolute bottom-4 left-4 text-[11px] tracking-[0.16em] text-white uppercase">
          {label}
        </p>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs leading-5 text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
