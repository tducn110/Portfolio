import { ArrowRight } from "lucide-react";

export function scrollToTarget(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ButtonArrow() {
  return <ArrowRight aria-hidden size={16} strokeWidth={1.6} />;
}

export function motionAttr(...names: string[]) {
  return names.join(" ");
}

export function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-header reveal" data-motion={motionAttr("reveal")}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {body && <span>{body}</span>}
    </div>
  );
}
