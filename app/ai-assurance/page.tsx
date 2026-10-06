import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { forumWorkstreams, lifecycleConnections } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "AI Assurance",
  description:
    "Validate AI works on practical AI assurance, professionalisation and a trusted ecosystem for responsible adoption.",
};

export default function AiAssurancePage() {
  return (
    <>
      <PageHero
        kicker="AI Assurance"
        title="Assurance that supports innovation and protects people"
        description="AI assurance is the practical work of checking that AI is developed, deployed and governed in ways organisations and society can trust."
        image={photos.discussion}
        imageAlt="Placeholder photograph of professionals in discussion"
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <h2 className="max-w-md font-serif text-3xl tracking-tight md:text-4xl">
            Why assurance matters for responsible adoption
          </h2>
          <div className="max-w-xl space-y-5 text-base leading-8 text-muted">
            <p>
              Responsible AI depends on more than good intentions. It needs
              ways to examine quality, ethics, legal requirements, governance,
              deployment and monitoring across the life of a system.
            </p>
            <p>
              Validate AI’s work is to help build a trusted, practical and
              scalable assurance ecosystem. That ecosystem should support
              innovation while protecting organisations, individuals and
              society.
            </p>
            <p>
              AI assurance ultimately exists to help ensure that AI is
              developed, deployed and governed in ways that people and
              organisations can trust.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            title="Across the AI lifecycle"
            description="Practical assurance connects work that is too often kept apart. Validate AI treats these as connected parts of responsible adoption, not isolated technical checks."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {lifecycleConnections.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-white px-5 py-6 font-serif text-xl tracking-tight"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <PlaceholderImage
            src={photos.documents}
            alt="Placeholder photograph of professional documents and planning"
            caption={null}
            aspect="aspect-[4/3]"
          />
          <div>
            <h2 className="max-w-md font-serif text-3xl tracking-tight md:text-4xl">
              Building the profession
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-8 text-muted">
            <p>
              Validate AI supports the BCS-led AI Assurance Stakeholder
              Consortium, particularly the work to help establish AI assurance
              as a recognised profession.
            </p>
            <p>
              Two Consortium areas align closely with this involvement:
              Building the Profession, and Skills and Competencies. The first
              looks at how assurance can scale in the UK and internationally,
              including certification, registration and a pathway towards a
              formally recognised profession. The second concerns the skills,
              knowledge and competencies needed for effective assurance
              practice, drawing on cybersecurity, data science and internal
              audit.
            </p>
            <p>
              Long-term credibility will depend not only on frameworks and
              regulation, but on a trusted professional community with
              recognised competencies, ethical standards, independence and
              accountability. Validate AI does not itself grant certifications
              or registrations.
            </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="forum" className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <PlaceholderImage
              src={photos.workshop}
              alt="Placeholder photograph of a workshop discussion"
              label="Placeholder image"
              caption="Placeholder for the AI Assurance Service Design Forum, 30 April 2026."
            />
            <div>
              <SectionHeading
                eyebrow="AI Assurance Forum"
                title="From dialogue to delivery"
                description="On 30 April 2026, Validate AI CIC, Imperial College London, the Office for Statistics Regulation and ICAEW brought together more than 30 leaders and practitioners at Imperial College London."
              />
              <p className="mt-5 text-[15px] leading-7 text-muted">
                The community spanned government, academia, professional
                bodies, consulting, financial services, insurance, technology,
                research and industry. The Forum narrative is Align · Convene ·
                Deliver · Grow.
              </p>
            </div>
          </div>

          <h3 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">
            Four workstreams
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {forumWorkstreams.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <PlaceholderImage
                  src={item.image}
                  alt={`Placeholder photograph for ${item.title}`}
                  caption={null}
                  rounded={false}
                  aspect="aspect-[16/8]"
                />
                <div className="p-6 md:p-7">
                  <h4 className="font-serif text-xl tracking-tight">{item.title}</h4>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl tracking-tight">Since April</h3>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                Validate AI has held one-to-one discussions with participants
                to understand where their expertise and interests can
                contribute. Participants have offered expertise and support
                and, in some cases, additional organisational resource. The
                original attendees form an informed founding community.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-tight">What comes next</h3>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                The next phase is intended to combine that thought leadership
                with practitioners and emerging professionals. Planned work
                includes small-group sessions, collaboration with BCS on
                profession-building, mobilising the four workstreams, widening
                participation, and using learning to support the UK and global
                assurance ecosystem.
              </p>
            </div>
          </div>

          <blockquote className="mt-16 max-w-3xl border-l border-ink/20 pl-6 font-serif text-2xl leading-snug tracking-tight md:text-3xl">
            Our ambition is not simply to create another forum. It is to build
            an inclusive, practitioner-led community that turns AI Assurance
            thinking into practical capability and trusted services for the
            benefit of society.
          </blockquote>

          <div className="mt-10">
            <ButtonLink href="/get-involved" variant="primary">
              Get Involved
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Join the conversation on AI assurance"
        description="The opportunity is to create a bridge between policy, professionalisation and real-world delivery."
        primaryLabel="Get Involved"
        primaryHref="/get-involved"
        secondaryLabel="See our work"
        secondaryHref="/our-work-impact"
      />
    </>
  );
}
