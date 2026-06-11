import { useState } from "react";
import { Check } from "lucide-react";
import { C, F, Sh } from "../tokens";

/**
 * Shared "Work With Me" CTA. On click it confirms (color shift + label change
 * to "Let's talk") and smooth-scrolls to the contact section.
 */
export function WorkWithMeButton({
  variant = "primary",
  fullWidth = false,
  className = "",
}: {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setActive(true);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isPrimary = variant === "primary";

  const bg = active
    ? C.indigo
    : isPrimary
      ? C.violet
      : C.white;
  const color = active || isPrimary ? C.white : C.graphite;
  const border = isPrimary || active ? "none" : `1px solid ${C.ash}`;
  const shadow = active
    ? "0 8px 24px rgba(94,92,255,0.4)"
    : isPrimary
      ? Sh.primaryCta
      : Sh.secondaryCta;

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer ${className}`.trim()}
      style={{
        fontFamily: F.ui,
        fontSize: 14,
        fontWeight: 500,
        color,
        backgroundColor: bg,
        padding: "10px 20px",
        borderRadius: 9999,
        border,
        boxShadow: shadow,
        width: fullWidth ? "100%" : undefined,
        transform: pressed ? "scale(0.96)" : "scale(1)",
        transition: "transform 0.12s ease, background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
      }}
    >
      {active && <Check size={14} />}
      {active ? "Let's talk" : "Work With Me"}
    </button>
  );
}
