import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

type CtaSectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  title,
  description,
  primaryLabel = "Get Involved",
  primaryHref = "/get-involved",
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="bg-dark text-white">
      <Container className="py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-dark-muted md:text-lg md:leading-8">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} variant="light">
              {primaryLabel}
            </ButtonLink>
            {secondaryLabel && secondaryHref ? (
              <ButtonLink href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
