import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className="page">
      <h1>TanStack Start</h1>
    </main>
  );
}
