"use client";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
  const scrollRef = useRef();
  const panelRef = useRef();

  useGSAP(() => {
    const uls = gsap.utils.toArray(scrollRef.current.children);

    uls.forEach((ul, index) => {
      const [x, xEnd] = index % 2 ? ["100%", 0] : ["-100%", 0];
      gsap.fromTo(
        ul,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: ul,
            scrub: 0.25,
            markers: true,
            start: "bottom, bottom",
            end: "top 20%",
          },
        }
      );
    });

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
  }, []);
  return (
    <div className="demo-wrapper overflow-hidden">
      <header ref={panelRef} className="h-svh grid place-content-center">
        <div>
          <h1 className="text-5xl font-clash font-bold">ScrollTrigger</h1>
          <h2 className="text-2xl">demo</h2>
        </div>
      </header>

    </div>
  );
};

export default ScrollTriggerComponent;
