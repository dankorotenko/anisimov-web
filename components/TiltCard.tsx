"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const ROTATION_RANGE = 40;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ img, text, href }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
    >
      <a href={href}>
        <figure className="relative px-[8%] pt-[8%] pb-[32%] rounded-md backdrop-blur-sm border border-[#363636] bg-[#272727]/30">
          <Image
            style={{
              transformStyle: "preserve-3d",
            }}
            src={img}
            alt="camera"
            className="relative block size-full rounded-md translate-z-12 shadow-lg"
          />
          <figcaption className="mt-2">
            <span className="font-clash text-lg font-bold text-text">
              {text}
            </span>
            <p className="font-clash pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea!</p>
          </figcaption>
        </figure>
      </a>
    </motion.div>
  );
};

export default TiltCard;
