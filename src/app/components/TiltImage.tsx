import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { C, Sh } from "../tokens";

/**
 * Layered image with a soft 3D tilt that follows the pointer (desktop only).
 * The image fully fills its frame (object-cover) so it never leaves a gap.
 * A second offset panel sits behind it to create "Building in Layers" depth.
 * Tilt is disabled on touch devices and when reduced-motion is requested.
 */
export function TiltImage({
  src,
  alt,
  ratio = "4 / 5",
  max = 6,
}: {
  src: string;
  alt: string;
  ratio?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const interactive = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e: React.MouseEvent) => {
    if (!interactive()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * max, ry: px * max });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div style={{ perspective: 1000 }}>
      <div style={{ position: "relative" }}>
        {/* Layer behind — offset accent panel for depth */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            transform: "translate(14px, 14px)",
            background: `linear-gradient(135deg, ${C.lavender}, ${C.iris})`,
            borderRadius: 12,
          }}
        />
        {/* Foreground image layer */}
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className="overflow-hidden"
          style={{
            position: "relative",
            aspectRatio: ratio,
            borderRadius: 12,
            border: `1px solid ${C.ash}`,
            boxShadow: Sh.card,
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.25s ease-out",
            willChange: "transform",
          }}
        >
          <ImageWithFallback
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
