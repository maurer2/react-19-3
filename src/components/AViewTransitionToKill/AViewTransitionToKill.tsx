import { useReducer, ViewTransition, startTransition } from 'react';
import { catNames } from 'cat-names';

type CatNameAction = { type: 'prev' } | { type: 'next' } | { type: 'reset' };

// const initialIndex = Math.trunc(catNames.length / 2);
const initialIndex = 0;

function catNameReducer(currentIndex: number, action: CatNameAction): number {
  switch (action.type) {
    case 'prev': {
      return currentIndex === 0 ? catNames.length - 1 : currentIndex - 1;
    }
    case 'next': {
      return currentIndex === catNames.length - 1 ? 0 : currentIndex + 1;
    }
    case 'reset': {
      return initialIndex;
    }
    default: {
      return currentIndex;
    }
  }
}

const css = String.raw;

export default function AViewTransitionToKill() {
  const [currentIndex, dispatch] = useReducer(catNameReducer, initialIndex);

  return (
    <section>
      <h2>View transition</h2>
      <output>{catNames[currentIndex]}</output>
      <div
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
        role="group"
        aria-label="Controls for changing the active entry of the list"
      >
        <button
          type="button"
          onClick={() => {
            startTransition(() => {
              dispatch({ type: 'prev' });
            });
          }}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => {
            startTransition(() => {
              dispatch({ type: 'next' });
            });
          }}
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => {
            startTransition(() => {
              dispatch({ type: 'reset' });
            });
          }}
        >
          Reset
        </button>
      </div>
      <ol>
        {catNames.map((catName, index) => (
          <ViewTransition key={catName}>
            <li aria-current={index === currentIndex ? 'true' : undefined}>{catName}</li>
          </ViewTransition>
        ))}
      </ol>
      <style>
        {css`
          ::view-transition-old(*),
          ::view-transition-new(*) {
            animation-duration: 500ms;
          }

          ::view-transition-new(*) {
            animation-name: fade-in;
          }

          ::view-transition-old(*) {
            animation-name: fade-in;
            animation-direction: reverse;
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @scope {
            :scope {
            }

            li {
              padding: 0.25lh 1rem;
              inline-size: fit-content;

              &::marker {
                color: var(--color-text);
              }

              &:where([aria-current='true']) {
                background: red;
                color: contrast-color(red);
              }
            }
          }
        `}
      </style>
    </section>
  );
}
