import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { featureRoutes, internationalWork, whatWeDo } from "@/lib/content";
import { photos } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <section className="bg-dark text-white">
        <Container className="pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl font-serif text-[2.35rem] leading-[1.12] tracking-tight text-pretty sm:text-6xl md:text-7xl">
              The independent platform for responsible AI and assurance
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-dark-muted md:text-lg">
              Validate AI CIC convenes government, professional bodies,
              academia, industry and practitioners to align perspectives, build
              trusted relationships and develop practical solutions around a
              common societal purpose.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/our-work-impact" variant="light">
                Explore Our Work
              </ButtonLink>
              <ButtonLink href="/get-involved" variant="ghost">
                Get Involved
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-dark pb-10 md:pb-16">
        <Container>
          <PlaceholderImage
            src={photos.roundtable}
            alt="Placeholder photograph of people in discussion around a table"
            label="Placeholder image"
            caption="A space for Forum photography from 30 April 2026 at Imperial College London."
            priority
          />
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="A neutral place to turn responsible AI into practice"
            description="We do not represent a single profession, organisation or commercial interest. Our role is to bring people together, align perspectives and help develop practical approaches to AI assurance and trustworthy adoption."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {whatWeDo.map((item, index) => (
              <div key={item.title}>
                <PlaceholderImage
                  src={
                    [
                      photos.workshop,
                      photos.london,
                      photos.university,
                    ][index]
                  }
                  alt={`Placeholder photograph for ${item.title}`}
                  caption={null}
                  aspect="aspect-[5/3]"
                />
                <div className="mt-5 border-t border-line pt-6">
                  <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Explore"
            title="Three ways into the work"
            description="Start with assurance, the 2026 risk perspective, or the record of Validate AI’s convening and impact."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featureRoutes.map((item) => (
              <Card
                key={item.href}
                href={item.href}
                title={item.title}
                text={item.text}
                image={item.image}
                imageAlt={`Placeholder photograph for ${item.title}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <PlaceholderImage
              src={photos.workshop}
              alt="Placeholder photograph of a collaborative workshop"
              label="Placeholder image"
              caption="Placeholder for AI Assurance Forum photography."
            />
            <div>
              <SectionHeading
                eyebrow="AI Assurance Forum"
                title="From dialogue to delivery"
                description="On 30 April 2026, Validate AI CIC, Imperial College London, the Office for Statistics Regulation and ICAEW brought together more than 30 leaders and practitioners at Imperial College London."
              />
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
                The Forum is building a trusted, practical and scalable AI
                assurance ecosystem — one that supports innovation while
                protecting organisations, individuals and society.
              </p>
              <div className="mt-8">
                <ButtonLink href="/ai-assurance#forum" variant="primary">
                  Read about the Forum
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="International reach"
            title="UK work with a wider view"
            description="Validate AI’s activity is rooted in the UK and reaches Europe and Asia through engagement on responsible AI, assurance, governance, human rights and professional practice."
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
          <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">
            These are areas of engagement, not a list of formal country offices
            or exclusive partnerships.
          </p>
        </Container>
      </section>

      <CtaSection
        title="Help shape a trusted AI assurance ecosystem"
        description="We welcome organisations and individuals involved in developing, delivering, regulating, procuring, using or assuring AI systems."
        primaryLabel="Get Involved"
        primaryHref="/get-involved"
        secondaryLabel="Contact us"
        secondaryHref="mailto:contact@validateai.org"
      />
    </>
  );
}
