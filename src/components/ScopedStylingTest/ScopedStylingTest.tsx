const css = String.raw;

export default function ScopedStylingTest() {
  return (
    <div className="test">
      {/* Permitted in React 19+ */}
      <style>
        {css`
          @scope {
            /* scoped to direct parent of style tag, e.g. .test but not other .test classes */
            :scope {
              padding: 1rem;
              border: 1px solid red;
            }

            span {
              color: red;
            }
          }
        `}
      </style>
      <span>Test</span>
    </div>
  );
}
