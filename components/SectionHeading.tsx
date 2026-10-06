import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={cx(
            "text-sm tracking-[0.14em] uppercase",
            invert ? "text-dark-muted" : "text-muted",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cx(
          "font-serif text-3xl leading-[1.15] tracking-tight md:text-5xl",
          eyebrow ? "mt-4" : "",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-5 max-w-xl text-base leading-7 md:text-lg md:leading-8",
            invert ? "text-dark-muted" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
