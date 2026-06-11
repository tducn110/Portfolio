import { useState, useEffect } from "react";
import gsap from "gsap";
import { C, F, Sh } from "../tokens";

const MODULES = [
  "Origin",
  "Projects",
  "Process",
  "Service",
  "Contact",
];

export function BootScreen() {
  const [shouldShow, setShouldShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [readyCount, setReadyCount] = useState(0);
  const [isReadyToEnter, setIsReadyToEnter] = useState(false);

  useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem("portfolio_boot_seen_v2")) {
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && shouldShow) {
        completeBoot();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldShow]);

  const completeBoot = () => {
    sessionStorage.setItem("portfolio_boot_seen_v2", "true");
    
    gsap.to(".boot-screen", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setShouldShow(false);
      }
    });
  };

  if (!shouldShow) return null;

  return (
    <div className="boot-screen" style={{ backgroundColor: C.parchment }}>
      <div className="boot-grid" />
      
      <div className="boot-content">
        <div className="boot-header">
          <div className="boot-badge">NTD / Nguyen Tam Duc</div>
          <button className="boot-skip" onClick={completeBoot}>
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
            <p className="boot-modules-title" style={{ fontFamily: F.mono }}>Loading modules</p>
            <ul>
              {MODULES.map((mod, i) => (
                <li key={mod} className={i < readyCount ? "is-ready" : "is-pending"}>
                  <span className="boot-module-status" />
                  <span className="boot-module-name">{mod}</span>
                  <span className="boot-module-state">{i < readyCount ? "ready" : "pending"}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="boot-progress-container">
            <div className="boot-progress-bar">
              <div className="boot-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="boot-progress-text" style={{ fontFamily: F.mono }}>
              {Math.floor(progress)}%
            </span>
          </div>

          {isReadyToEnter && (
            <div className="boot-ready-prompt" onClick={completeBoot}>
              Press Enter or Click to Start
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
