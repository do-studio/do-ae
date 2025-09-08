"use client";
import React, { useEffect, useState, useRef } from "react";

const TEXT = `Do Studio is more than just a digital marketing agency in Dubai. We're
          a team of strategists, creatives, analysts, and developers passionate
          about turning ideas into results. Our mission is to empower businesses through intelligent digital
            strategies that lead to measurable growth`;
const CHAR_COUNT = TEXT.length;

function ScrollRevealText() {
  const [revealCount, setRevealCount] = useState(0);
  const textRef = useRef(null);
  const animationFrameRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      
      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        const element = textRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Calculate visibility ratio (0 when bottom at top of viewport, 1 when top at bottom of viewport)
        const startPosition = windowHeight;
        const endPosition = -elementHeight;
        const currentPosition = rect.top;
        
        // Progress from 0 to 1 as element moves through viewport
        let progress = (startPosition - currentPosition) / (startPosition - endPosition);
        progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1
        
        // Apply easing for smoother animation
        const easedProgress = easeInOutCubic(progress);
        setRevealCount(Math.floor(easedProgress * CHAR_COUNT * 1.2));
      });
    };

    // Easing function for smooth animation
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set reveal count
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className="py-8">
      <h1 className="text-white text-2xl sm:text-4xl xl:text-5xl font-medium leading-tight">
        {TEXT.split("").map((char, idx) => (
          <span
            key={idx}
            className={
              revealCount > idx ? "text-white" : "text-gray-400 opacity-50"
            }
            style={{
              transition: "color 0.15s ease-out, opacity 0.15s ease-out",
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default ScrollRevealText;