import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { forumParticipants } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Validate AI CIC is an independent Community Interest Company providing a neutral convening platform for responsible AI and assurance.",
};

const participantGroups = [
  { title: "Academic and research", items: forumParticipants.academic },
  { title: "Government and public bodies", items: forumParticipants.government },
  { title: "Professional and convening bodies", items: forumParticipants.professional },
  { title: "Industry and professional services", items: forumParticipants.industry },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="An independent Community Interest Company"
        description="Validate AI CIC provides a neutral convening platform for organisations with different perspectives to collaborate around a common societal purpose."
        image={photos.workshop}
        imageAlt="Placeholder photograph of people collaborating in a workshop"
      />

      <section className="border-b border-line py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <h2 className="max-w-md font-serif text-3xl tracking-tight md:text-4xl">
            A trusted place for cross-sector collaboration
          </h2>
          <div className="max-w-xl space-y-5 text-base leading-8 text-muted">
            <p>
              Our role is not to represent any single profession, organisation
              or commercial interest. It is to bring together government,
              professional bodies, academia, technology organisations,
              assurance providers, regulators, customers and practitioners.
            </p>
            <p>
              Together, they can align perspectives, build trusted relationships
              and develop practical solutions collectively.
            </p>
            <p>
              Societal needs and human welfare sit at the centre of this work.
              The aim is Responsible AI and trustworthy adoption: assurance that
              supports innovation while protecting organisations, individuals
              and society.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Who the work is for
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            Validate AI’s audiences include government, academia, professional
            bodies, industry and the wider public. Forum work also addresses
            technical, legal, consulting, policy, regulatory, academic,
            supplier, customer and community perspectives, alongside
            practitioners and emerging professionals.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <PlaceholderImage
              src={photos.university}
              alt="Placeholder photograph of a university setting"
              caption={null}
              aspect="aspect-[4/3]"
            />
            <PlaceholderImage
              src={photos.london}
              alt="Placeholder photograph of London"
              caption={null}
              aspect="aspect-[4/3]"
            />
            <PlaceholderImage
              src={photos.discussion}
              alt="Placeholder photograph of a professional discussion"
              caption={null}
              aspect="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Organisations in the April 2026 Forum
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            The following organisations took part in the AI Assurance Service
            Design Forum. This is a list of participating organisations, not a
            list of formal partners, funders or sponsors.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {participantGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm tracking-[0.12em] text-muted uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-7 text-ink">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Work with Validate AI"
        description="If you are developing, delivering, regulating, procuring, using or assuring AI systems, we welcome your engagement."
      />
    </>
  );
}
