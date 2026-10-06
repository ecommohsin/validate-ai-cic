import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <Container className="pt-16 pb-14 md:pt-24 md:pb-20">
        {kicker ? (
          <p className="text-sm tracking-[0.14em] text-muted uppercase">{kicker}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-serif text-[2.15rem] leading-[1.12] tracking-tight text-pretty sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        {image ? (
          <PlaceholderImage
            src={image}
            alt={imageAlt ?? title}
            className="mt-10"
            aspect="aspect-[21/9]"
            caption={null}
            priority
          />
        ) : null}
      </Container>
    </section>
  );
}
