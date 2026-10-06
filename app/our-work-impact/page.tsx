import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { EventCard } from "@/components/EventCard";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { activities, internationalWork, workThemes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work & Impact",
  description:
    "Validate AI’s convening, professionalisation and international work across responsible AI and assurance.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        kicker="Our Work & Impact"
        title="From convening to practical capability"
        description="Validate AI’s public activity runs from UK roadshows and policy engagement to the AI Assurance Forum and international work on responsible AI, governance and human rights."
        image="/placeholders/conference.jpg"
        imageAlt="Placeholder photograph of a conference gathering"
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Work organised by theme"
            description="Events are grouped to show impact and learning, not only attendance. Dates are shown with the precision available in Validate AI’s activity record."
          />
          <div className="mt-12 space-y-16">
            {workThemes.map((theme) => {
              const items = activities.filter((activity) => activity.theme === theme);
              if (items.length === 0) return null;
              return (
                <div key={theme}>
                  <h3 className="text-sm tracking-[0.14em] text-muted uppercase">
                    {theme}
                  </h3>
                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    {items.map((activity) => (
                      <EventCard
                        key={`${activity.title}-${activity.date}`}
                        activity={activity}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="International collaboration"
            title="A coherent international strand"
            description="Validate AI’s UK work sits alongside engagement in Europe and Asia. The relationships below are described as engagement, not as formal country partnerships or offices."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {internationalWork.map((item) => (
              <article
                key={item.place}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <PlaceholderImage
                  src={item.image}
                  alt={`Placeholder photograph suggesting ${item.place}`}
                  caption={null}
                  rounded={false}
                  aspect="aspect-[16/8]"
                />
                <div className="p-6 md:p-7">
                  <p className="text-sm text-muted">
                    {item.place}
                    <span className="mx-2 text-line">·</span>
                    {item.date}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight">
                    {item.organisation}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {item.nature}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 space-y-2 text-sm leading-6 text-muted">
            <p>
              Related references:{" "}
              <a
                className="underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
                href="https://ataftax.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ATAF
              </a>
              ,{" "}
              <a
                className="underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
                href="https://ai2cg.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI2CG
              </a>
              ,{" "}
              <a
                className="underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
                href="https://www.wu.ac.at/en/taxlaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                WU tax law
              </a>
              ,{" "}
              <a
                className="underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
                href="https://www.coe.int/en/web/artificial-intelligence/huderia-risk-and-impact-assessment-of-ai-systems"
                target="_blank"
                rel="noopener noreferrer"
              >
                Council of Europe HUDERIA
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Contribute to the next phase of this work"
        description="The Forum and related activity are intended to grow beyond the founding group to practitioners, emerging professionals and a wider community of interest."
      />
    </>
  );
}
