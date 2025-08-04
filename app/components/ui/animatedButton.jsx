'use client'
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const AnimatedButton = ({
  href,
  label,
  IconComponent,
  textColor = "#000",
  hoverTextColor,
  iconColor = "#000",
  hoverIconColor,
  circleColor = "#AEFE00",
}) => {
  const linkRef = useRef(null);
  const colorRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const green = colorRef.current;
    const link = linkRef.current;
    const text = textRef.current;
    const icon = iconRef.current;

    // Set initial state
    gsap.set(green, { 
      left: "0.3em",
      width: "2em",
      height: "2em",
      borderRadius: "50%",
    });

    let hoverTL = gsap.timeline({ paused: true });

    // Move dot to right-side w/ same space as left
    hoverTL.to(
      green,
      {
        left: "calc(100% - 2em - 0.3em)",
        duration: 0.5,
        ease: "power3.out", // <-- smooth
      },
      0
    );

    if (hoverTextColor) {
      hoverTL.to(
        text,
        {
          color: hoverTextColor,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );
    }

    if (icon && hoverIconColor) {
      hoverTL.to(
        icon,
        {
          color: hoverIconColor,
          fill: hoverIconColor,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );
    }

    function onMouseEnter() { hoverTL.play(); }
    function onMouseLeave() { hoverTL.reverse(); }

    link.addEventListener("mouseenter", onMouseEnter);
    link.addEventListener("mouseleave", onMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", onMouseEnter);
      link.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hoverTextColor, hoverIconColor]);

  return (
    <div>
      <Link href={href} passHref>
        <div
          ref={linkRef}
          className="relative w-fit flex items-center justify-center px-2.5 border border-[#AEFE00] py-2 md:py-2.5 rounded-full text-xs md:text-sm"
          style={{
            cursor: "pointer",
            boxSizing: 'border-box',
            overflow: "hidden",
            minWidth: '100px', // Optional: ensure minimum button width for design
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Colored circle */}
          <div
            ref={colorRef}
            className="absolute"
            style={{
              backgroundColor: circleColor,
              width: "2em",
              height: "2em",
              top: "50%",
              left: "0.3em",
              transform: "translateY(-50%)",
              zIndex: 0,
              borderRadius: "50%",
              transition: "left 0.4s ease",
            }}
          ></div>
          {/* Text */}
          <span
            className="relative z-10 font-medium"
            ref={textRef}
            style={{
              color: textColor,
              transition: "color 0.3s",
              textAlign: "center",
              flex: 1,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
          {/* Icon */}
          {IconComponent && (
            <IconComponent
              className="relative ml-3 z-10"
              ref={iconRef}
              style={{
                color: iconColor,
                fill: iconColor,
                transition: "color 0.3s, fill 0.3s",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </Link>
    </div>
  );
};

export default AnimatedButton;
