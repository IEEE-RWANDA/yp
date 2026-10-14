import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-condensed text-6xl font-bold text-ieee-blue">404</p>
      <h1 className="mt-4 font-condensed text-4xl font-bold text-brand">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for has moved or does not exist.</p>
      <div className="mt-8"><ButtonLink href="/">Back to home</ButtonLink></div>
    </Container>
  );
}
