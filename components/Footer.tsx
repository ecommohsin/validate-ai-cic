import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Logo invert />
            <p className="mt-4 max-w-sm text-sm leading-7 text-dark-muted">
              An independent Community Interest Company providing a neutral
              convening platform for responsible AI, assurance and trustworthy
              adoption.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.14em] text-white/40 uppercase">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-dark-muted">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.14em] text-white/40 uppercase">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-dark-muted">
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <p>Validate AI CIC</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Validate AI CIC
        </div>
      </Container>
    </footer>
  );
}
