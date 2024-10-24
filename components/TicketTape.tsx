"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import logo1 from "@/images/logos/logo1.jpg";
import logo2 from "@/images/logos/logo2.png";
import logo3 from "@/images/logos/logo3.png";
import logo4 from "@/images/logos/logo4.png";
import logo5 from "@/images/logos/logo5.png";
import logo6 from "@/images/logos/logo6.png";
import logo7 from "@/images/logos/logo7.png";
import logo8 from "@/images/logos/logo8.png";
import Image from "next/image";

const TickerTape = () => {
  const tickerRef = useRef(null);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  useGSAP(() => {
    const ticker = tickerRef.current;
    const totalWidth = ticker.scrollWidth;
    const duration = totalWidth / 100;

    gsap.to(ticker, {
      x: `-${totalWidth / 2}px`,
      repeat: -1,
      ease: "none",
      duration: duration,
    });
  });

  return (
    <div className="overflow-hidden whitespace-nowrap relative pb-8">
      <div ref={tickerRef} className="flex">
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="size-32 object-contain mx-4 grayscale hover:grayscale-0 transition-all duration-300"
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
