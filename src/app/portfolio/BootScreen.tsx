import { useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { C, F, Sh } from "../tokens";

const MODULES = [
  { label: "Origin", id: "origin" },
  { label: "Projects", id: "projects" },
  { label: "Process", id: "process" },
  { label: "Service", id: "service" },
  { label: "Contact", id: "contact" },
];

export function BootScreen() {
  const [shouldShow, setShouldShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [readyCount, setReadyCount] = useState(0);
  const [isReadyToEnter, setIsReadyToEnter] = useState(false);

  useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem("portfolio_boot_seen_v4")) {
      return;
    }
    setShouldShow(true);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setProgress(100);
      setReadyCount(MODULES.length);
      setIsReadyToEnter(true);
      return;
    }

    // Animation sequence
    let currentProgress = 0;
    let currentReady = 0;

    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress > 100) currentProgress = 100;
      
      const expectedReady = Math.floor((currentProgress / 100) * MODULES.length);
      if (expectedReady > currentReady) {
        currentReady = expectedReady;
      }

      setProgress(currentProgress);
      setReadyCount(currentReady);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsReadyToEnter(true);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleOpenMenu = () => {
      setShouldShow(true);
      setProgress(100);
      setReadyCount(MODULES.length);
      setIsReadyToEnter(true);
      gsap.fromTo(".boot-screen", { opacity: 0 }, { opacity: 1, duration: 0.4 });
    };
    window.addEventListener("open-menu", handleOpenMenu);
    return () => window.removeEventListener("open-menu", handleOpenMenu);
  }, []);

  const completeBoot = useCallback((targetId?: string) => {
    sessionStorage.setItem("portfolio_boot_seen_v4", "true");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      setShouldShow(false);
      if (targetId) {
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        }, 100);
      }
    };

    if (reduced) {
      finish();
      return;
    }
    
    gsap.to(".boot-screen", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: finish,
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && shouldShow) {
        completeBoot();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldShow, completeBoot]);

  if (!shouldShow) return null;

  return (
    <div className="boot-screen" style={{ backgroundColor: C.parchment }} role="dialog" aria-label="Portfolio boot screen">
      <div className="boot-grid" />
      
      <div className="boot-content">
        <div className="boot-header">
          <a href="https://www.instagram.com/tdu._cn/" target="_blank" rel="noreferrer" className="boot-badge" style={{ textDecoration: 'none', color: 'inherit' }}>
            tdu._cn / Nguyen Tam Duc
          </a>
          <button className="boot-skip" onClick={() => completeBoot()}>
            {isReadyToEnter ? "Enter Portfolio ↵" : "Skip Boot ↵"}
          </button>
        </div>

        <div className="boot-main">
          <h1 style={{ fontFamily: F.serif }}>TamDuc.exe</h1>
          <p className="boot-subtitle" style={{ fontFamily: F.mono }}>initializing portfolio system...</p>

          <div className="boot-flow" aria-hidden>
            <span>[ rough idea ]</span>
            <span className="boot-flow-arrow">→</span>
            <span>[ normalize ]</span>
            <span className="boot-flow-arrow">→</span>
            <span>[ ship ]</span>
          </div>

          <div className="boot-modules">
            <p className="boot-modules-title" style={{ fontFamily: F.mono }}>
              {isReadyToEnter ? "Select Destination" : "Loading modules"}
            </p>
            <ul role={isReadyToEnter ? "menu" : "list"} aria-label="Portfolio sections">
              {MODULES.map((mod, i) => {
                const isReady = isReadyToEnter || i < readyCount;
                return (
                  <li
                    key={mod.label}
                    className={`${isReady ? "is-ready" : "is-pending"} ${isReadyToEnter ? "is-clickable" : ""}`}
                    role={isReadyToEnter ? "none" : undefined}
                  >
                    {isReadyToEnter ? (
                      <button
                        type="button"
                        className="boot-module-button"
                        role="menuitem"
                        onClick={() => completeBoot(mod.id)}
                      >
                        <span className="boot-module-status" />
                        <span className="boot-module-name">{mod.label}</span>
                        <span className="boot-module-state">ACCESS</span>
                      </button>
                    ) : (
                      <>
                        <span className="boot-module-status" />
                        <span className="boot-module-name">{mod.label}</span>
                        <span className="boot-module-state">{isReady ? "ready" : "pending"}</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {!isReadyToEnter ? (
            <div className="boot-progress-container">
              <div className="boot-progress-bar">
                <div className="boot-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="boot-progress-text" style={{ fontFamily: F.mono }}>
                {Math.floor(progress)}%
              </span>
            </div>
          ) : (
            <button type="button" className="boot-ready-prompt" onClick={() => completeBoot()}>
              Enter Portfolio Normally ↵
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
