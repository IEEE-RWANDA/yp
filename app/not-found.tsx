import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-condensed text-5xl font-bold text-ieee-navy">Page not found</h1>
      <p className="mt-3 text-muted">This page has moved or does not exist.</p>
      <div className="mt-8"><ButtonLink href="/">Back to home</ButtonLink></div>
    </Container>
  );
}
