"use client";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import './style.css'

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useGSAP(() => {

    gsap.to("#reveal-section-1", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".blue-bg",
        start: "bottom top",
        end: "+=100%",
        pinSpacing: false,
        scrub: true,
        pin: true,
        //markers:true
      },
    });

  }, []);
  return (
    <div id="content">
      <section className="section scrolling-section h-svh text-center text-white flex justify-center items-center text-2xl blue-bg mb-[100svh]">
        Normal scrolling Section
      </section>
      <section id="reveal-section-1" className="section fixed top-0 w-full -z-[1] h-svh text-center text-white flex justify-center items-center text-2xl green-bg">
        Revealed Section 1 that gets push off as user scrolls
      </section>
      <section className="section scrolling-section h-svh text-center text-white flex justify-center items-center text-2xl black-bg">
        Normal scrolling Section
      </section>
      <section className="footer">Footer</section>
    </div>
  );
};

export default page;
