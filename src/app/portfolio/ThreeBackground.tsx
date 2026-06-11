import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * Subtle floating particle field rendered with Three.js.
 * Sits behind all content as a fixed background layer.
 * Respects prefers-reduced-motion by halting animation.
 */
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particles
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      velocities[i * 3] = (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connecting lines between nearby particles
    const lineGeometry = new THREE.BufferGeometry();
    const maxLineSegments = particleCount * 3;
    const linePositions = new Float32Array(maxLineSegments * 6);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.08,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse tracking for subtle camera movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Animation loop
    let animationId: number;
    const connectionThreshold = 1.8;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!prefersReduced) {
        // Drift particles
        const positionAttribute = geometry.getAttribute("position");
        const posArray = positionAttribute.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          posArray[i * 3] += velocities[i * 3];
          posArray[i * 3 + 1] += velocities[i * 3 + 1];
          posArray[i * 3 + 2] += velocities[i * 3 + 2];

          // Wrap around bounds
          if (Math.abs(posArray[i * 3]) > 5) velocities[i * 3] *= -1;
          if (Math.abs(posArray[i * 3 + 1]) > 4) velocities[i * 3 + 1] *= -1;
          if (Math.abs(posArray[i * 3 + 2]) > 3) velocities[i * 3 + 2] *= -1;
        }

        positionAttribute.needsUpdate = true;

        // Update connection lines
        let lineIndex = 0;
        const lineArray = lineGeometry.getAttribute("position")
          .array as Float32Array;

        for (let i = 0; i < particleCount && lineIndex < maxLineSegments; i++) {
          for (
            let j = i + 1;
            j < particleCount && lineIndex < maxLineSegments;
            j++
          ) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionThreshold) {
              lineArray[lineIndex * 6] = posArray[i * 3];
              lineArray[lineIndex * 6 + 1] = posArray[i * 3 + 1];
              lineArray[lineIndex * 6 + 2] = posArray[i * 3 + 2];
              lineArray[lineIndex * 6 + 3] = posArray[j * 3];
              lineArray[lineIndex * 6 + 4] = posArray[j * 3 + 1];
              lineArray[lineIndex * 6 + 5] = posArray[j * 3 + 2];
              lineIndex++;
            }
          }
        }

        lineGeometry.setDrawRange(0, lineIndex * 2);
        lineGeometry.getAttribute("position").needsUpdate = true;

        // Camera follows mouse gently
        camera.position.x += (mouseX - camera.position.x) * 0.02;
        camera.position.y += (-mouseY - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="three-bg-canvas" />;
}
