'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const BlurryShape = () => {
  const ellipseRef = useRef(null);

  useEffect(() => {
    const el = ellipseRef.current;

    // Recursive organic animation
    let isMouseActive = false;
    let animationFrame;

    const animate = () => {
      if (!isMouseActive) {
        gsap.to(el, {
          x: gsap.utils.random(-80, 80),
          y: gsap.utils.random(-60, 60),
          scale: gsap.utils.random(0.9, 1.15),
          rotate: gsap.utils.random(-10, 10),
          duration: gsap.utils.random(0.9, 1.1),
          ease: 'power1.inOut',
          onComplete: animate
        });
      }
    };

    animate();

    // Mouse tracking handler
    const onMouseMove = (event) => {
      isMouseActive = true;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Center of the viewport
      const centerX = vw / 2;
      const centerY = vh / 2;
      const relX = mouseX - centerX;
      const relY = mouseY - centerY;

      // Move towards mouse position with gentle motion
      gsap.to(el, {
        x: relX * 2.16,
        y: relY * 2.16,
        duration: 0.5,
        ease: 'power3.out',
        onComplete: () => {
          isMouseActive = false;
          animate();
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      gsap.killTweensOf(el);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
      <svg
        width={700}
        height={700}
        className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 700 700"
        style={{ filter: 'blur(90px)', opacity: 0.8 }}
      >
        <defs>
          <radialGradient id="blurryGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="60%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#f87171" />
          </radialGradient>
        </defs>
        <ellipse
          ref={ellipseRef}
          cx="350"
          cy="350"
          rx="300"
          ry="250"
          fill="url(#blurryGradient)"
        />
      </svg>
    </div>
  );
};

export default BlurryShape;
