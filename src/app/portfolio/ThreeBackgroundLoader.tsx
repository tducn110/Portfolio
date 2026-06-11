import { lazy, Suspense, useState, useEffect } from "react";

const ThreeBackgroundLazy = lazy(() =>
  import("./ThreeBackground").then((module) => ({
    default: module.ThreeBackground,
  }))
);

export function ThreeBackgroundLoader() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isMobile && !isReduced) {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <Suspense fallback={null}>
      <ThreeBackgroundLazy />
    </Suspense>
  );
}
