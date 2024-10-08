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
      
      
      gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
  }, []);
  return (
    <div className="demo-wrapper overflow-hidden">
      <header ref={panelRef} className="h-svh grid place-content-center">
        <div>
          <h1 className="text-5xl font-clash font-bold">ScrollTrigger</h1>
          <h2 className="text-2xl">demo</h2>
        </div>
      </header>

      {/* <section className="demo-text">
        <div className="font-clash wrapper text font-extrabold text-[clamp(8rem,15vw,16rem)] leading-none">
          anisimovanisimovanisimov
        </div>
      </section> */}
      <section ref={scrollRef}>
        <ul className="wrapper flex gap-4 py-4">
          <li
            key="images1-1"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images1-2"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images1-3"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images1-4"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
        </ul>

        <ul className="wrapper flex gap-4 py-4">
          <li
            key="images2-1"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images2-2"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images2-3"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images2-4"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
        </ul>
        <ul className="wrapper flex gap-4 py-4">
          <li
            key="images3-1"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images3-2"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images3-3"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images3-4"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
        </ul>
        <ul className="wrapper flex gap-4 py-4">
          <li
            key="images4-1"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images4-2"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images4-3"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
          <li
            key="images4-4"
            className="block w-[600px] h-[400px] bg-gray-200"
          ></li>
        </ul>
      </section>
    </div>
  );
};

export default ScrollTriggerComponent;
