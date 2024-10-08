"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import trailImg1 from "../images/trail1.webp";
import trailImg2 from "../images/trail2.jpg";
import trailImg3 from "../images/trail3.jpg";
import trailImg4 from "../images/trail4.jpg";
import trailImg5 from "../images/trail5.jpg";
import trailImg6 from "../images/trail6.jpg";

const ImageTrail: React.FC = () => {
  // Define imgRefs as an array of HTMLDivElement references
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images: StaticImageData[] = [
    trailImg1,
    trailImg2,
    trailImg3,
    trailImg4,
    trailImg5,
    trailImg6,
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(imgRefs.current, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.1,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden md:block absolute w-full h-full overflow-hidden px-4 md:px-8">
      {images.map((src, index) => (
        <div
          key={index}
          ref={(el) => {
            imgRefs.current[index] = el;
          }}
          className="absolute w-60 h-32 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <Image
            src={images[index]}
            alt={`Image ${index + 1}`}
            className="rounded-md absolute top-0 left-0 w-full h-full object-cover"
            width={240}
            height={133}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTrail;
