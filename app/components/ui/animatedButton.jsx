'use client'
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, Elastic } from "gsap";

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

    // Reset padding (important for reverse animation!)
    gsap.set(link, { paddingRight: "1.25rem", paddingLeft: "0" });
    // Reset dot to initial position
    gsap.set(green, { left: "-0.65em", width: "2em" });

    let hoverTL = gsap.timeline({ paused: true });

    hoverTL
      // Dot stretches instantly (to cover background for seamless transition)
      .to(
        green,
        {
          width: "calc(100% + 1.3em)",
          duration: 0,
          ease: Elastic.easeOut.config(0.2, 0.3),
        },
        0
      )
      // Dot moves to right side and shrinks back
      .to(
        green,
        {
          width: "2em",
          left: "calc(100% - 1.45em)",
          duration: 0.4,
          ease: Elastic.easeOut.config(0.4, 0.3),
        },
        "<"
      )
      // Swap padding: right to left
      .to(
        link,
        {
          paddingRight: 0,
          paddingLeft: "1.25rem",
          duration: 0.4,
          ease: Elastic.easeOut.config(0.4, 0.3),
        },
        "<"
      );

    if (hoverTextColor) {
      hoverTL.to(
        text,
        {
          color: hoverTextColor,
          duration: 0.3,
          ease: "power1.out",
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
          ease: "power1.out",
        },
        0
      );
    }

    function onMouseEnter() {
      hoverTL.play();
    }
    function onMouseLeave() {
      hoverTL.reverse();
    }

    link.addEventListener("mouseenter", onMouseEnter);
    link.addEventListener("mouseleave", onMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", onMouseEnter);
      link.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hoverTextColor, hoverIconColor]);

  return (
    <div className="p-1">
      <Link href={href} passHref>
        <div
          ref={linkRef}
          className="relative w-fit flex items-center justify-center border border-[#AEFE00] py-2 md:py-2.5 rounded-full text-xs md:text-sm"
          style={{
            cursor: "pointer",
            paddingRight: "1.25rem", // Start at pr-5 = 20px
            paddingLeft: "0",
            transition: "padding 0.4s",
            // overflow: "hidden", 
            minWidth: '7.5em', // Optional: to ensure button doesn't shrink
            boxSizing: 'border-box', // maintain sizing
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Colored circle */}
          <div
            ref={colorRef}
            className="absolute rounded-full"
            style={{
              backgroundColor: circleColor,
              width: "2em",
              height: "2em",
              top: "50%",
              left: "-0.65em",
              transform: "translateY(-50%)",
              zIndex: 0,
              transition: "left 0.4s, width 0.4s",
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
          {/* Right arrow icon */}
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




// 'use client'
// import React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import { gsap, Elastic } from "gsap";


// const AnimatedButton = ({
// href,
// label,
// IconComponent,
// textColor = "#000",
// hoverTextColor,
// iconColor = "#000",
// hoverIconColor,
// circleColor = "#AEFE00",
// }) => {
// const linkRef = useRef(null);
// const colorRef = useRef(null);
// const textRef = useRef(null);
// const iconRef = useRef(null);


// useEffect(() => {
// const green = colorRef.current;
// const link = linkRef.current;
// const text = textRef.current;
// const icon = iconRef.current;


// let hoverTL = gsap.timeline({ paused: true });


// hoverTL.to(
// green,
// {
// width: "calc(100% + 1.3em)",
// duration: 0,
// ease: Elastic.easeOut.config(0.2, 0.3),
// },
// 0
// );
// hoverTL.to(
// green,
// {
// width: "2em",
// left: "calc(100% - 1.45em)",
// duration: 0.4,
// ease: Elastic.easeOut.config(0.4, 0.3),
// },
// "<"
// );


// // Animate text color if hoverTextColor is provided
// if (hoverTextColor) {
// hoverTL.to(
// text,
// {
// color: hoverTextColor,
// duration: 0.3,
// ease: "power1.out",
// },
// 0
// );
// }


// // Animate icon color if hoverIconColor is provided
// if (icon && hoverIconColor) {
// hoverTL.to(
// icon,
// {
// color: hoverIconColor,
// fill: hoverIconColor, // For SVG fill support
// duration: 0.3,
// ease: "power1.out",
// },
// 0
// );
// }


// function onMouseEnter() {
// hoverTL.play();
// }
// function onMouseLeave() {
// hoverTL.reverse();
// }


// link.addEventListener("mouseenter", onMouseEnter);
// link.addEventListener("mouseleave", onMouseLeave);


// return () => {
// link.removeEventListener("mouseenter", onMouseEnter);
// link.removeEventListener("mouseleave", onMouseLeave);
// };
// }, [hoverTextColor, hoverIconColor]);


// return (
// <div className="p-1">
// <Link href={href} passHref>
// <div
// ref={linkRef}
// className="relative w-fit flex items-center border border-[#AEFE00] pr-5 py-3 rounded-full text-sm md:text-base"
// target="_blank"
// rel="noopener noreferrer"
// style={{ cursor: "pointer" }}
// >
// {/* Colored circle */}
// <div
// ref={colorRef}
// className="absolute rounded-full"
// style={{
// backgroundColor: circleColor,
// width: "2em",
// height: "2em",
// top: "50%",
// left: "-0.65em",
// transform: "translateY(-50%)",
// }}
// ></div>
// {/* Text */}
// <span
// className="relative"
// ref={textRef}
// style={{ color: textColor, transition: "color 0.3s" }}
// >
// {label}
// </span>
// {/* Right arrow icon */}
// {IconComponent && (
// <IconComponent
// className="relative ml-3"
// ref={iconRef}
// style={{ color: iconColor, fill: iconColor, transition: "color 0.3s, fill 0.3s" }}
// />
// )}
// </div>
// </Link>
// </div>
// );
// };


// export default AnimatedButton;