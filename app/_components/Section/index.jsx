'use client'; 

/** @param {import('react').PropsWithChildren<unknown>} */
export function Section({ children }) {
  return (
    <div className="mb-16">
      {children}
    </div>
  );
}
