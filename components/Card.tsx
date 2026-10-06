import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { cx } from "@/lib/cx";

type CardProps = {
  href?: string;
  title: string;
  text: string;
  kicker?: string;
  cta?: string;
  image?: string;
  imageAlt?: string;
};

export function Card({
  href,
  title,
  text,
  kicker,
  cta = "Read more",
  image,
  imageAlt,
}: CardProps) {
  const content = (
    <>
      {image ? (
        <PlaceholderImage
          src={image}
          alt={imageAlt ?? title}
          caption={null}
          rounded={false}
          aspect="aspect-[16/9]"
        />
      ) : null}
      <div className={image ? "p-7 md:p-8" : ""}>
        {kicker ? (
          <p className="text-sm tracking-[0.12em] text-muted uppercase">{kicker}</p>
        ) : null}
        <h3
          className={cx(
            "font-serif text-2xl tracking-tight text-ink",
            kicker ? "mt-3" : "",
          )}
        >
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-muted">{text}</p>
        {href ? (
          <p className="mt-6 text-sm font-medium text-ink">
            {cta} <span aria-hidden="true">→</span>
          </p>
        ) : null}
      </div>
    </>
  );

  const classes = cx(
    "block overflow-hidden rounded-2xl border border-line bg-white",
    !image && "p-7 md:p-8",
    href && "transition-colors hover:border-ink/20",
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
