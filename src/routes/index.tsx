import { createFileRoute } from '@tanstack/react-router';

import AViewTransitionToKill from '#components/AViewTransitionToKill/AViewTransitionToKill';
import ScopedStylingTest from '#components/ScopedStylingTest/ScopedStylingTest';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className="page">
      <h1>TanStack Start</h1>
      <ScopedStylingTest />

      <AViewTransitionToKill />
    </main>
  );
}
