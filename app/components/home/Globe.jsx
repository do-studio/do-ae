"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
phi: 0,
theta: 0,
dark: 1,
diffuse: 1.2,
mapSamples: 16000,
mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [0.68, 1.0, 0.0],
  glowColor: [0.5, 0.5, 0.5],
  markers: [
    { location: [10.8505, 76.2711], size: 0.04 },
    { location: [12.971599, 77.594566], size: 0.05 },
    { location: [25.276987, 55.296249], size: 0.06 },
  ],
};

export default function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <canvas
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: 1,
      }}
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX;
        updatePointerInteraction(e.clientX);
      }}
      onPointerUp={() => updatePointerInteraction(null)}
      onPointerOut={() => updatePointerInteraction(null)}
      onMouseMove={(e) => updateMovement(e.clientX)}
      onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
    />
  );
}
