import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { riskCategories } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "AI Risk Perspectives",
  description:
    "Validate AI’s 2026 AI risk perspective, using the Beyond the Mirror lens and four connected categories of risk.",
};

export default function AiRiskPage() {
  return (
    <>
      <PageHero
        kicker="AI Risk Perspectives"
        title="Beyond the Mirror"
        description="AI risk is not only about what a model does. It is about the systems, incentives and institutions that surround it — and the people who live with the results."
        image={photos.library}
        imageAlt="Placeholder photograph of a library, suggesting reflection and evidence"
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.14em] text-muted uppercase">
              2026 perspective
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted md:text-lg md:leading-9">
              <p>
                AI risk is not only about what a model does. AI systems can
                mirror and amplify human choices, incentives, inequalities and
                concentrations of power. As those systems gain scale and
                agency, the challenge becomes whole-system governance and
                assurance: the interactions between humans, institutions and
                AI; the feedback loops that emerge; and how benefits and harms
                are distributed.
              </p>
              <p>
                A useful way to organise this work is across four connected
                categories. Technical and performance risk concerns whether
                systems are reliable, secure and fit for their intended use.
                Human and organisational risk concerns how people, incentives
                and institutions shape design, deployment and oversight.
                Societal and distributional risk concerns who benefits, who is
                exposed to harm, and how existing inequalities may be
                amplified. Frontier and systemic risk concerns effects that
                emerge as AI systems become more capable, more widely used and
                more tightly coupled with other systems.
              </p>
              <p>
                The lens is a progression from mirror to power, agency,
                ecosystem, transformation, feedback, assurance and, ultimately,
                human welfare. Societal needs remain the point of the work.
              </p>
              <p>
                AI-enabled systems should not simply replicate normal human
                standards of decision-making. Through good design, governance
                and independent assurance, they should aspire to higher
                standards of consistency, evidence, fairness, transparency and
                accountability.
              </p>
              <p>
                Mitigation is therefore central. Practical response depends on
                governance, assurance, evaluation, professional standards,
                human oversight and continuous monitoring. Risk is not a reason
                to halt responsible innovation, nor a problem that will resolve
                itself. This perspective is intended to be measured,
                evidence-led and practical, and to recognise uncertainty and
                competing views.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Four categories of risk"
            description="The categories are connected. Each one needs attention if assurance is to serve organisations and society."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {riskCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-white p-6 md:p-7"
              >
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <PlaceholderImage
            src={photos.civic}
            alt="Placeholder photograph of a civic building"
            caption={null}
            aspect="aspect-[4/3]"
          />
          <div>
            <h2 className="max-w-md font-serif text-3xl tracking-tight md:text-4xl">
              A practical response
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-8 text-muted">
            <p>
              Validate AI’s response to AI risk is practical: governance,
              assurance, evaluation, professional standards, human oversight
              and continuous monitoring.
            </p>
            <p>
              A 2024 risk position paper remains part of Validate AI’s record.
              It will be retained under Insights as a previous position paper
              when the original file and details are available. This page is
              the current 2026 perspective.
            </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Assurance is how risk becomes manageable"
        description="Independent scrutiny, professional capability and whole-system governance are part of responsible adoption."
        primaryLabel="Explore AI Assurance"
        primaryHref="/ai-assurance"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
