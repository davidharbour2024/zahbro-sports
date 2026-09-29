import { Header } from "@/components/header/Header";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-off-white text-ink">
      <section className="z-section relative flex min-h-screen items-center">
        <div
          aria-hidden="true"
          className="z-clip-lg absolute -right-24 top-0 h-full w-[38vw] min-w-48 bg-dark"
        />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <p className="z-eyebrow mb-5">Zahbro Sports</p>
            <span className="z-stripe mb-8" aria-hidden="true" />

            <h1 className="z-display text-[clamp(3.5rem,10vw,8rem)]">
              Built for the
              <span className="block text-primary">fight.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              The Zahbro Sports foundation is ready. Premium combat sports
              experiences are being built on a faster, sharper design system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#foundation">Explore the foundation</ButtonLink>
              <ButtonLink href="#next" variant="dark">
                What&apos;s next
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="foundation" className="z-section bg-dark text-white">
        <Container>
          <p className="z-eyebrow">Phase 01</p>
          <h2 className="z-display mt-4 max-w-3xl text-4xl sm:text-6xl">
            A consistent system. A distinct edge.
          </h2>
          <p id="next" className="mt-6 max-w-2xl text-grey">
            Color, typography, spacing, responsive layout, and Zahbro&apos;s
            signature clipped geometry are in place. The multi-row header comes
            next.
          </p>
        </Container>
      </section>
      </main>
    </>
  );
}
