import { useEffect, useState } from "react";
import { ImageOff, Play } from "lucide-react";
import type { PortfolioMedia } from "../content/portfolioMedia";
import { GeneratedProof } from "./GeneratedProof";

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return prefersReduced;
}

export function MediaFrame({
  media,
  className = "",
}: {
  media?: PortfolioMedia;
  className?: string;
}) {
  const [mediaFailed, setMediaFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  if (!media) {
    return (
      <figure className={`media-frame ${className}`} data-motion="media-frame reveal">
        <div className="media-frame-fallback" role="img" aria-label="Preview pending">
          <ImageOff aria-hidden size={20} strokeWidth={1.5} />
          <span>Preview pending</span>
        </div>
      </figure>
    );
  }

  const posterOrImage = media.poster ?? media.src;
  const hasVideoSource = Boolean(media.src || media.sources?.length);
  const shouldUseIframe = media.type === "iframe" && !mediaFailed && media.src;
  const shouldUseVideo =
    media.type === "video" && !mediaFailed && !prefersReduced && hasVideoSource;
  const shouldUseImage =
    (media.type === "image" && !mediaFailed && media.src) ||
    (media.type === "video" &&
      (prefersReduced || mediaFailed || !media.src) &&
      posterOrImage &&
      !posterFailed) ||
    (media.type === "iframe" && mediaFailed && posterOrImage && !posterFailed);
  const canUseGenerated = Boolean(media.generatedVariant);
  const isFallback = !shouldUseIframe && !shouldUseVideo && !shouldUseImage;
  const shouldUseGenerated = isFallback && canUseGenerated;
  const isPendingVideo = Boolean(shouldUseVideo && !ready && !mediaFailed);
  const isPendingIframe = Boolean(shouldUseIframe && !ready && !mediaFailed);

  return (
    <figure className={`media-frame ${className}`} data-motion="media-frame reveal">
      {shouldUseIframe ? (
        <iframe
          src={media.src}
          title={media.alt}
          onLoad={() => setReady(true)}
          onError={() => setMediaFailed(true)}
          style={{ width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
        />
      ) : shouldUseVideo ? (
        <video
          src={media.sources?.length ? undefined : media.src}
          poster={media.poster}
          aria-label={media.alt}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={(event) => {
            const video = event.currentTarget;
            if (video.videoWidth > 0 && video.videoHeight > 0) {
              setReady(true);
            } else {
              setMediaFailed(true);
            }
          }}
          onError={() => setMediaFailed(true)}
        >
          {media.sources?.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : shouldUseImage ? (
        <img
          src={media.type === "image" ? media.src : posterOrImage}
          alt={media.alt}
          onLoad={() => setReady(true)}
          onError={() => {
            if (media.type === "video" || media.type === "iframe") {
              setPosterFailed(true);
            } else {
              setMediaFailed(true);
            }
          }}
        />
      ) : shouldUseGenerated && media.generatedVariant ? (
        <GeneratedProof variant={media.generatedVariant} label={media.label} />
      ) : (
        <div className="media-frame-fallback" role="img" aria-label={media.alt}>
          <ImageOff aria-hidden size={20} strokeWidth={1.5} />
          <span>{media.label ?? "Preview pending"}</span>
        </div>
      )}

      {(isPendingVideo || isPendingIframe) && (
        <div className="media-frame-fallback media-frame-overlay" aria-hidden>
          {media.generatedVariant ? (
            <GeneratedProof variant={media.generatedVariant} label={media.label} />
          ) : (
            <>
              <ImageOff aria-hidden size={20} strokeWidth={1.5} />
              <span>{media.label ?? "Preview pending"}</span>
            </>
          )}
        </div>
      )}

      {media.label && !isFallback && !isPendingVideo && !isPendingIframe && (
        <figcaption>
          {media.type === "video" && !prefersReduced && !mediaFailed && (
            <Play aria-hidden size={12} strokeWidth={1.7} />
          )}
          <span>{media.label}</span>
        </figcaption>
      )}
    </figure>
  );
}
