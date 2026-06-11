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
  media: PortfolioMedia;
  className?: string;
}) {
  const [mediaFailed, setMediaFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const posterOrImage = media.poster ?? media.src;
  const hasVideoSource = Boolean(media.src || media.sources?.length);
  const shouldUseVideo =
    media.type === "video" && !mediaFailed && !prefersReduced && hasVideoSource;
  const shouldUseImage =
    (media.type === "image" && !mediaFailed && media.src) ||
    (media.type === "video" &&
      (prefersReduced || mediaFailed || !media.src) &&
      posterOrImage &&
      !posterFailed);
  const canUseGenerated = Boolean(media.generatedVariant);
  const isFallback = !shouldUseVideo && !shouldUseImage;
  const shouldUseGenerated = isFallback && canUseGenerated;
  const isPendingVideo = Boolean(shouldUseVideo && !ready && !mediaFailed);

  return (
    <figure className={`media-frame ${className}`} data-motion="media-frame reveal">
      {shouldUseVideo ? (
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
            if (media.type === "video") {
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

      {isPendingVideo && (
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

      {media.label && !isFallback && !isPendingVideo && (
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
