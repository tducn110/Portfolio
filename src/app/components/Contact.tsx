import { useState } from "react";
import { Github, Mail, MapPin, Linkedin, Send } from "lucide-react";
import { C, F, Sh } from "../tokens";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactLinks = [
  { icon: Github, label: "GitHub", value: "tducn110", href: "https://github.com/tducn110" },
  { icon: Mail, label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Your LinkedIn", href: "#" },
  { icon: MapPin, label: "Location", value: "Da Nang, Viet Nam", href: null },
];

export function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="gsap-reveal" style={{ marginBottom: 52 }}>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 12,
              fontWeight: 500,
              color: C.steel,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: F.ui,
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              letterSpacing: "-1px",
              color: C.graphite,
              maxWidth: 480,
              marginBottom: 16,
            }}
          >
            Let's build something useful.
          </h2>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 15,
              color: C.iron,
              lineHeight: 1.7,
              maxWidth: 540,
            }}
          >
            I am open to internships, student projects, portfolio websites,
            landing pages, full-stack web apps, and experimental product ideas.
            If you have a story, a project, or an idea that needs to become a
            real product, I would be happy to help shape it, build it, and make
            it clearer.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Form */}
          <div className="gsap-reveal">
            {sent ? (
              <div
                style={{
                  padding: 40,
                  backgroundColor: C.white,
                  border: `1px solid ${C.ash}`,
                  borderRadius: 8,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
                <h3
                  style={{
                    fontFamily: F.ui,
                    fontSize: 18,
                    fontWeight: 600,
                    color: C.graphite,
                    marginBottom: 8,
                  }}
                >
                  Message sent.
                </h3>
                <p style={{ fontFamily: F.ui, fontSize: 14, color: C.steel }}>
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                style={{
                  padding: 28,
                  backgroundColor: C.white,
                  border: `1px solid ${C.ash}`,
                  borderRadius: 8,
                }}
              >
                <div className="flex flex-col gap-5">
                  {[
                    { id: "name", label: "Your name", type: "text", placeholder: "Alex Nguyen", key: "name" as const },
                    { id: "email", label: "Email address", type: "email", placeholder: "you@company.com", key: "email" as const },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: F.ui,
                          fontSize: 12,
                          fontWeight: 500,
                          color: C.smoke,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key]}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, [field.key]: e.target.value }))
                        }
                        placeholder={field.placeholder}
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          fontFamily: F.ui,
                          fontSize: 14,
                          color: C.graphite,
                          backgroundColor: C.white,
                          border: `1px solid ${C.mist}`,
                          borderRadius: 4,
                          outline: "none",
                          transition: "border-color 0.15s",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = C.violet;
                          e.target.style.boxShadow = `0 0 0 2px ${C.lavender}`;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = C.mist;
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: F.ui,
                        fontSize: 12,
                        fontWeight: 500,
                        color: C.smoke,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      What are you building?
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Tell me about your idea, project, or opportunity. The rougher the idea, the better — that's where I'm most useful."
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        fontFamily: F.ui,
                        fontSize: 14,
                        color: C.graphite,
                        backgroundColor: C.white,
                        border: `1px solid ${C.mist}`,
                        borderRadius: 4,
                        outline: "none",
                        resize: "none",
                        transition: "border-color 0.15s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = C.violet;
                        e.target.style.boxShadow = `0 0 0 2px ${C.lavender}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = C.mist;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 cursor-pointer w-full"
                    style={{
                      fontFamily: F.ui,
                      fontSize: 14,
                      fontWeight: 500,
                      color: C.white,
                      backgroundColor: C.violet,
                      padding: "10px 20px",
                      borderRadius: 9999,
                      border: "none",
                      boxShadow: Sh.primaryCta,
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.88")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="gsap-reveal flex flex-col gap-3">
            {/* Availability */}
            <div
              style={{
                padding: "14px 18px",
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: 8,
                marginBottom: 4,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: C.green,
                  }}
                />
                <span
                  style={{
                    fontFamily: F.ui,
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.green,
                    letterSpacing: "0.04em",
                  }}
                >
                  Available for work
                </span>
              </div>
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 12,
                  color: "#374151",
                  lineHeight: 1.6,
                }}
              >
                Open to internships, freelance projects, and
                student collaborations starting now.
              </p>
            </div>

            {contactLinks.map((link) => {
              const inner = (
                <div
                  style={{
                    padding: "14px 16px",
                    backgroundColor: C.white,
                    border: `1px solid ${C.ash}`,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    transition: "border-color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = C.mist)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = C.ash)
                  }
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: C.bone,
                      border: `1px solid ${C.ash}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <link.icon size={14} color={C.steel} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: F.mono,
                        fontSize: 10,
                        color: C.smoke,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {link.label}
                    </div>
                    <div
                      style={{
                        fontFamily: F.ui,
                        fontSize: 13,
                        fontWeight: 500,
                        color: C.graphite,
                      }}
                    >
                      {link.value}
                    </div>
                  </div>
                </div>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={link.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
