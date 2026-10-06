import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Validate AI’s community of organisations and individuals working on responsible AI, assurance and trustworthy adoption.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        kicker="Get Involved"
        title="Help build a trusted AI assurance ecosystem"
        description="We welcome engagement from organisations and individuals involved in developing, delivering, regulating, procuring, using or assuring AI systems."
        image={photos.roundtable}
        imageAlt="Placeholder photograph of people gathered around a table"
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Who should take part
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              Contributors should include professional and learned societies,
              assurance providers, technology organisations, regulators,
              academia, customers and practitioners. The profession should
              reflect marketplace experience and wider societal needs. It
              should not be developed by one organisation or profession alone.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              How to get in touch
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              Write to us and we will follow up. We are looking for
              organisations and people who can help turn AI assurance thinking
              into practical capability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${site.email}`} variant="primary">
                Email {site.email}
              </ButtonLink>
              <ButtonLink href="/ai-assurance#forum" variant="secondary">
                Join the conversation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderImage
            src={photos.discussion}
            alt="Placeholder photograph of colleagues working together"
            caption={null}
            aspect="aspect-[4/3]"
          />
          <div>
            <blockquote className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
              Our ambition is to build an inclusive, practitioner-led community
              that can turn emerging thinking on AI Assurance into practical
              approaches, professional capability and trusted services.
            </blockquote>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted">
              Ultimately, we want to help create a lasting AI Assurance ecosystem
              that supports responsible innovation and delivers meaningful
              benefits for organisations, individuals and wider society.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
