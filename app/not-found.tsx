import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <p className="text-sm tracking-[0.14em] text-muted uppercase">404</p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-6xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
        That page is not part of this site. Return home or explore Validate AI’s
        work.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm font-medium text-ink"
      >
        Back to home <span aria-hidden="true">→</span>
      </Link>
    </Container>
  );
}
