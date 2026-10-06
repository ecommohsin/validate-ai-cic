import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { insightThemes } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thought leadership from Validate AI on AI risk, assurance, responsible adoption, human rights and professionalisation.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Thinking that can be used in practice"
        description="Validate AI’s thought leadership is grouped by recurring themes rather than by individual events. Publications and practical outputs will be added here as they become available."
        image={photos.documents}
        imageAlt="Placeholder photograph of documents and research materials"
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Five themes"
            description="These themes run through the Forum, the 2026 risk perspective and Validate AI’s wider convening."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {insightThemes.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                text={item.text}
                image={item.image}
                imageAlt={`Placeholder photograph for ${item.title}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <PlaceholderImage
            src={photos.library}
            alt="Placeholder photograph of a library archive"
            caption={null}
            aspect="aspect-[4/3]"
          />
          <div>
            <h2 className="max-w-md font-serif text-3xl tracking-tight md:text-4xl">
              Previous position papers
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-8 text-muted">
            <p>
              A 2024 risk position paper remains part of Validate AI’s record
              and will be archived here, with title, date, version and download,
              when the original file is available.
            </p>
            <p>
              The current public statement on risk is the 2026 Beyond the Mirror
              perspective.
            </p>
            <a
              href="/ai-risk-perspectives"
              className="inline-flex text-sm font-medium text-ink"
            >
              Read the 2026 perspective <span aria-hidden="true">→</span>
            </a>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Share insight, not only comment"
        description="The Forum’s next phase is intended to turn thought leadership into practical outputs. If you have evidence, cases or questions, we would like to hear from you."
      />
    </>
  );
}
